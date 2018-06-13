var cvs = document.getElementById("canvas"); 
var ctx = cvs.getContext("2d");

//load images

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

bird.src = "image/bird.png"; 
bg.src = "image/bg.png"; 
fg.src = "image/fg.png"; 
pipeNorth.src = "image/pipeNorth.png"; 
pipeSouth.src = "image/pipeSouth.png"; 

//some variables

var gap = 89;  //space between pipes
var constant = pipeNorth.height+gap;

var bX = 10;
var bY = 150;

var gravity = 2;

var score = 0;

//keyUP

document.addEventListener ("keydown", moveUp);

function moveUp(){
    bY -= 28;
    soundtrack.play();
}

//pipes

var pipe = [];

pipe [0] = {
    x: cvs.width,
    y: 0
};

//MUSIC

var scor = new Audio ();
var soundtrack = new Audio();

soundtrack.src = "sound/fristajlo.mp3"
scor.src = "sound/score.mp3"

//draw images

function draw(){
    
    ctx.drawImage(bg, 0, 0);

    for(var i=0; i < pipe.length; i++){
        ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeSouth, pipe[i].x, pipe[i].y+constant);

        pipe[i].x--;

        if(pipe[i].x == 125){
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height
            })
        }

        //collision

        if(bX + bird.width >= pipe[i].x && bX <= pipe[i].x + pipeNorth.width && (bY <= pipe[i].y + pipeNorth.height || bY + bird.height >= pipe[i].y+constant) || bY + bird.height >= cvs.height - fg.height){
            stop();
        }

        if(pipe[i].x == 5){
            score++;
            scor.play();
        }
    }

    ctx.drawImage(fg, 0, cvs.height-fg.height);

    ctx.drawImage(bird,bX,bY);

    bY += gravity;
    //text 
    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText ("Score : "+score,10,cvs.height-20);

    var aframe = requestAnimationFrame (draw);
}

draw();

var star = document.getElementById("Start");
star.addEventListener("click", start);

function start(){
    bX = 10;
    bY = 150;
    pipe [0] = {
        x: cvs.width,
        y: 0
    };
    score = 0
    // pipe.x: cvs.width;
    // pipe.y: Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height;
    draw ();
    // location.reload();
}

function stop(){
    var con = confirm ("Your score: "+score+". Play again?");
    if  (con==true){
        start;
    }
    else{
        location.href="http://google.pl";
    }
    window.cancelAnimationFrame (aframe);
}
