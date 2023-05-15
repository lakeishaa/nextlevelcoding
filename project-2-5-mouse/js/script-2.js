var a = 220;  // Set up the horizontal amplitude
var b = 35;  // Set up the vertical amplitude
var angle = 273;

function preload(){
  img1 = loadImage("./images/moony.png")
  img2 = loadImage("./images/assets-word.png")
}

function setup() {
  createCanvas(500, 400);
  textSize(20);
  
  angleMode(DEGREES);
  textAlign(CENTER);
  rectMode(CENTER);
  // noLoop();
}

function draw() {
  clear(); // Clear the canvas before each frame
  translate(-13, 0);
  rotate(337); 
  // background(0, 10);
  background('rgba(255,255,255, 0)');
  
  angle = map(mouseX, 0, width, 0, 360); // Map the mouseX position to a 360-degree range
  
  var x = a * cos(angle);
  var y = b * sin(angle);
  
  image(img1, 179 + x, 178 + y, 45, 45);

  // Draw circle
  stroke(0);
  noFill();
  noStroke();
  fill(255, 0, 0);
  // ellipse(200 + x, 200 + y, 20);
  // line(200, 200, 200 + x, 200 + y);
  fill(100, 100);
  
  console.log(angle);

}

