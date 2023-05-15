const db = {
  id: 'appqlAk4rdVEwSycH',
  table: 'Dummy Moon Data',
  apiKey: 'keyeABd47N9SUfc1p'
};

const airtableUrl = `https://api.airtable.com/v0/appqlAk4rdVEwSycH/songs?api_key=keyeABd47N9SUfc1p`

var a = 220;  //Set up the horizontal amplitute
var b = 35;  //Set up the vertical amplitute
// var angle = myData.properties.moonPhase.type;
var angle = 0;


function setup() {
  createCanvas(500, 400);
  textSize(20);
  
  angleMode(DEGREES);
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {
  translate(-13, 0);
  rotate(337); 
  background(255);
  var x = a*cos(angle);
  var y = b*sin(angle);
  angle = 241.700;
  
  // Heading & Settings
  text("TO DRAW A CIRCLE (or ELLIPSE) . . .", 200, 30);
  text("a = " + a + ",   b = " + b, 200,320);
  fill(150);
  text("Try changing a and b in lines 1 and 2 of the code. If a = b, you get a circle.", 200, 350, width-50, 50);
  
  // Draw circle
  stroke(0);
  noFill();
  ellipse(200, 200, 2*a, 2*b);
  line(200,200,200+a,200);
  noStroke();
  fill(255,0,0);
  ellipse(200+x, 200+y, 8);
  ellipse(200, 200, 4);
  stroke(255,0,0);
  line(200, 200, 200+x, 200+y);
  fill(100, 100);
  arc(200, 200, a/2, a/2, 0, angle);

  
  // Highlight x-movement
  stroke(0,255,0);
  fill(0,255,0);
  ellipse(200+x, 180-a, 8);
  line(200+x, 180-a, 200+x, 200+y);
  line(200+x, 200, 200, 200);
  push();
  textSize(10);
  fill(0);
  noStroke();
  text("x = a*cos(angle)", 200+x+45, 180-a+2.5);
  pop();
  
  // Highlight y-movement
  stroke(0,0,255);
  fill(0,0,255);
  ellipse(180-a, 200+y, 8);
  line(180-a, 200+y, 200+x, 200+y);
  line(200+x, 200, 200+x, 200+y);
  push();
  translate(180-a, 200+y);
  rotate(-90);
  textSize(10);
  fill(0);
  noStroke();
  text("y = b*sin(angle)", 45, 2.5);
  pop();
  
  // Label x and y movement
  fill(0);
  text("x-movement uses cosine",200,150-a, 120, 50);
  push();
  translate(150-a, 200);
  rotate(-90);
  text("y-movement uses sine",0, 0, 120, 50);
  pop();
  
  // Display angle measurement
  noStroke();
  fill(255);
  rect(250+a,200,60,30);
  fill(0);
  text((angle%360)+"°",250+a,210);
}