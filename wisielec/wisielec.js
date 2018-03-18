var haslo = "Spartez gonna programing";
haslo = haslo.toUpperCase();

var haslo1 = "";

var dlugosc = haslo.length;
var ile_bledow = 0;

for (i=0; i<dlugosc; i++)
{
    if (haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
    else haslo1 = haslo1 + "-";
}

function wypisz_haslo()
{
    document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;

var litera = new Array(35);

litera[0] = "A";
litera[1] = "Ą";
litera[2] = "B";
litera[3] = "C";
litera[4] = "Ć";
litera[5] = "D";
litera[6] = "E";
litera[7] = "Ę";
litera[8] = "F";
litera[9] = "G";
litera[10] = "H";
litera[11] = "I";
litera[12] = "J";
litera[13] = "K";
litera[14] = "L";
litera[15] = "Ł";
litera[16] = "M";
litera[17] = "N";
litera[18] = "Ń";
litera[19] = "O";
litera[20] = "Ó";
litera[21] = "P";
litera[22] = "Q";
litera[23] = "R";
litera[24] = "S";
litera[25] = "Ś";
litera[26] = "T";
litera[27] = "U";
litera[28] = "V";
litera[29] = "W";
litera[30] = "X";
litera[31] = "Y";
litera[32] = "Z";
litera[33] = "Ź";
litera[34] = "Ż";

function start()
{
    var tresc_diva = "";
    
    for (i=0; i<35; i++){
        var element = "lit" + i;
        tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litera[i]+'</div>';
        if ((i+1)%7==0) tresc_diva = tresc_diva + '<div id="cboth"></div>';
    }
    document.getElementById("alfabet").innerHTML = tresc_diva;
    wypisz_haslo();
}

String.prototype.ustawZnak = function (miejsce, znak){
    if (miejsce > this.length - 1) return this.toString();
    else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}

function sprawdz(nr)
{

    var trafiona = false;

    for(i=0; i<dlugosc; i++){
        if (haslo.charAt(i) == litera[nr]){
            haslo1 = haslo1.ustawZnak(i,litera[nr]);
            trafiona = true;
        }
    }
    
    if (trafiona == true){
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#4CAF50";
        document.getElementById(element).style.color = "#1B5E20";
        document.getElementById(element).style.border = "2px solid #4CAF50";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick",";");
    }
    else{
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#F44336";
        document.getElementById(element).style.color = "#B71C1C";
        document.getElementById(element).style.border = "2px solid #F44336";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick",";");

        ile_bledow++;
        var obraz = "img/s" + ile_bledow + ".jpg";
        document.getElementById("wisielec").innerHTML= '<img src="'+obraz+'"/>';
    }
    wypisz_haslo();

    //wygrana
    if (haslo == haslo1)
    document.getElementById("alfabet").innerHTML = "Wygrałeś! Odgadłeś prawidłowe hasło! Było nim:"+haslo+'.<br /><br /><span class="reset" onclick="location.reload()">Chcesz ponownie zagrać?</span>';

    //przegrana
    if (ile_bledow>=9)
    document.getElementById("alfabet").innerHTML = "Przegrałeś! Prawidłowe hasło brzmi:"+haslo+'.<br /><br /><span class="reset" onclick="location.reload()">Spróbuj jeszcze raz!</span>';
}