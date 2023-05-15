const url = 'https://moon-phase.p.rapidapi.com/moon_phase/advanced.php';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '68944bbcefmsh684231356406e1fp16bcf0jsn8178802d6796',
		'X-RapidAPI-Host': 'moon-phase.p.rapidapi.com'
	}
};

fetch(url, options)
	.then(response => response.text())
	.then(result => {
		console.log(result);

		// Access the age_days property
		// const ageDays = Math.floor(result.age_days);
		const ageDays = result.age_days;
		console.log('Age in days:', ageDays);

		var a = 220;
		var b = 35;
		var angle = ageDays;

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
		}

		function draw() {
			clear(); // Clear the canvas before each frame
			 translate(-13, 0);
			 rotate(337); 
			// background(0, 10);
			background('rgba(255,255,255, 0)');

			angle = map(ageDays, 0, 28, 255, -89); // Map the ageDays value to the range of 255 to -89

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
		}

		preload();
		setup();
		draw();
	})
	.catch(error => {
		console.error(error);
	});
