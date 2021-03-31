canvas = document.getElementById("myCanvas");

context = canvas.getContext("2d");

var roverimage = "rover.png";
var roverimageheight = 90;
var roverimagewidth = 100;
var backrounimage = "mars.jpg";
function add() {
  backgroundtag = new Image();
  backgroundtag.src = backrounimage;
  backgroundtag.onload = drawbackground;
  rovertag = new Image();
  rovertag.src = roverimage;
  rovertag.onload = drawrover;
}
var roverxpostion=10
var roverypostion=10
function drawbackground() {
  context.drawImage(backgroundtag, 0, 0, canvas.width, canvas.height);
}
function drawrover() {
  context.drawImage(rovertag, roverxpostion, roverypostion, roverimagewidth, roverimageheight);
}

window.addEventListener("keydown", mykeypress);
function mykeypress(e) {
  if (e.keyCode == 38) {
    console.log("up arrow");
    up();
  }
  if (e.keyCode == 39) {
    console.log("right arrow");
    right();
  }
  if (e.keyCode == 37) {
    console.log("left arrow");
    left();
  }
  if (e.keyCode == 40) {
    console.log("down arrow");
    down();
  }
}
function up(){
roverypostion=roverypostion-10
drawbackground()
drawrover()
}

function down(){
roverypostion=roverypostion+10
drawbackground()
drawrover()

}

function left(){
roverxpostion=roverxpostion-10
drawbackground()
drawrover()
}
function right(){
roverxpostion=roverxpostion+10;
drawbackground();
drawrover();
} 
