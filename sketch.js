var socket;

function setup(){
  createCanvas(600,400);
  background(51)；

  socket = io.connect('https:localhost:3000');
}
