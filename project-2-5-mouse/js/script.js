
// const db = {
//   id: 'appqlAk4rdVEwSycH',
//   table: 'Dummy Moon Data',
//   apiKey: 'keyeABd47N9SUfc1p'
// };

// const airtableUrl = `https://api.airtable.com/v0/appqlAk4rdVEwSycH/songs?api_key=keyeABd47N9SUfc1p`

var a = 220;  //Set up the horizontal amplitute
var b = 35;  //Set up the vertical amplitute
// var angle = myData.properties.moonPhase.type;
var angle = 273;
//255 and 273

function preload(){
  img1 =loadImage("./images/moony.png")
  img2 =loadImage("./images/assets-word.png")

}

function setup() {
  createCanvas(500, 400);
  textSize(20);
  
  angleMode(DEGREES);
  textAlign(CENTER);
  rectMode(CENTER);
  noLoop();
}

function draw() {
  // clear();
  translate(-13, 0);
  rotate(337); 
  //background(0, 10);
  background('rgba(255,255,255, 0)');
  var x = a*cos(angle);
  var y = b*sin(angle);
  // angle = 228.400;
  //  angle ++;
  
  image(img1,179+x, 178+y, 45, 45);


  // Draw circle
  stroke(0);
  noFill();
  noStroke();
  fill(255,0,0);
  // ellipse(200+x, 200+y, 20);
  // line(200, 200, 200+x, 200+y);
  fill(100, 100);
  
}