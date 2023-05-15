var a = 220;  // Set up the horizontal amplitude
var b = 35;  // Set up the vertical amplitude
var angle = 273;
var ageDays; // Declare ageDays variable

function preload() {
  img1 = loadImage("./images/moony.png");
  img2 = loadImage("./images/assets-word.png");
}

function setup() {
  createCanvas(500, 400);
  textSize(20);
  
  angleMode(DEGREES);
  textAlign(CENTER);
  rectMode(CENTER);
  // noLoop();

  // Call the API and retrieve ageDays
  const url = 'https://moon-phase.p.rapidapi.com/moon_phase/advanced.php';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '485e42fe1emshbd59f7a41a9e9b4p1cff0ajsnefa7589c985c',
      'X-RapidAPI-Host': 'moon-phase.p.rapidapi.com'
    }
  };

  fetch(url, options)
    .then(response => response.text())
    .then(result => {
      console.log(result);
      const parsedResult = JSON.parse(result);
      ageDays = parsedResult.age_days;
      console.log('Age in days:', ageDays);
    })
    .catch(error => {
      console.error(error);
    });
}

function draw() {
	if (ageDays === undefined) {
	  // Wait for the API response before executing the draw function
	  return;
	}
  
	clear(); // Clear the canvas before each frame
	translate(-13, 0);
	rotate(337); 
	// background(0, 10);
	background('rgba(255,255,255, 0)');
	
	angle = map(ageDays, 0, 28, 255, -89); // Map the ageDays value to the desired angle range
	// angle = 1.400357614073753;

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
