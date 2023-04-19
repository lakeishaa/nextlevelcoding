

let sheetID = "1T1QrxpWcUj2ISNmZ6tkojUZPQT7th2EupxuBQYrhSpM";
let tabName = 'Sheet1';

let opensheet_uri = `https://opensheet.elk.sh/${sheetID}/${tabName}`;

fetch(opensheet_uri)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // console.log(data);
				//do something with the data here


            // Loop through each item in the data array
            for (let i=0; i<data.length; i++){

            let circles = document.querySelectorAll(".circle");
            let lines = document.querySelectorAll(".lines");
            // let liness = document.querySelectorAll(".lines");


            // Get the value of the 'Dance' column from the current row
            let dVal = data[i]['Dance'];
            let dValSpeed = data[i]['Danceability (%)'];
            let eVal = data[i]['Energy'];
            let bVal = data[i]['BPM'];
            let pVal = data[i] ['Positiveness'];
            let bgVal = data[i] ['Background Color'];
            let linesColors = data[i] ['Background Color'];
            let linesColors1 = data[i] ['New Color 1'];
            let linesColors2 = data[i] ['New Color 2'];
            let linesColors3 = data[i] ['New Color 3'];
            let linesColors4 = data[i] ['New Color 4'];
            
            // Select the circle element with the index 'i'
            let circle = circles[i];
            
            // MAPPING lines starts here
            let danceMinVal = 5.2;  // minimum value of the original range
            let danceMaxVal = 9.3;  // maximum value of the original range
            let danceNewMinVal = 5;  // minimum value of the new range
            let danceNewMaxVal = 15;  // maximum value of the new range

            let danceMappedVal = ((dVal - danceMinVal) * (danceNewMaxVal - danceNewMinVal)) / (danceMaxVal - danceMinVal) + danceNewMinVal;

            // let danceSpeedMax = 93;
            // let danceSpeedMin = 52;

            // let RandomSpeed = Math.floor(Math.random() * (danceSpeedMax - danceSpeedMin) + danceSpeedMin)

            // MAPPING dance speed starts here
            let danceSpeedMin = 0;  // minimum value of the original range
            let danceSpeedMax = 100;  // maximum value of the original range
            let danceNewSpeedMin = 0;  // minimum value of the new range
            let danceNewSpeedMax = 2000;  // maximum value of the new range

            let danceSpeedMappedVal = ((dValSpeed - danceSpeedMin) * (danceNewSpeedMax - danceNewSpeedMin)) / (danceSpeedMax - danceSpeedMin) + danceNewSpeedMin;


            // Add 'dVal' number of liness to the current circle element
            for (let j=0; j<danceMappedVal; j++){
                let lines = document.createElement("DIV");
                lines.classList.add("lines");
                setInterval(()=>{
                    lines.style.transform = "translate(-50%, -50%) rotate(" + Math.random()*360 + "deg)";
                }, danceSpeedMappedVal)
                // lines.style.transform = "translate(-50%, -50%) rotate(" + Math.random()*360 + "deg)";
                lines.style.transformOrigin = "center center";

                // lines.style.transform = "translate(-50%, -50%) rotate(" + Math.floor(Math.random() * 360) + "deg)";
                // lines.style.transform = "translate(-50%, -50%) rotate(" + Math.random()*360 + "deg)";               

                // MAPPING height starts here
                let ShadowMinVal = 0;  // minimum value of the original range
                let ShadowMaxVal = 100;  // maximum value of the original range
                let ShadowNewMinVal = 0;  // minimum value of the new range
                let ShadowNewMaxVal = 80;  // maximum value of the new range
 
                // Map the eVal value to the new range
                let ShadowMappedVal = ((pVal - ShadowMinVal) * (ShadowNewMaxVal - ShadowNewMinVal)) / (ShadowMaxVal - ShadowMinVal) + ShadowNewMinVal;

                // lines.style.boxShadow = "0px 0px 30px 0px rgba(255, 255, 255, " + pVal + ")";
                // lines.style.boxShadow = "0px 0px 20px " + ShadowMappedVal + "px rgba(255, 255, 255, 0.5)";
                lines.style.boxShadow = "0px 0px 30px " + ShadowMappedVal + "px rgba(255, 255, 255, " + ShadowMappedVal + ")";


                // MAPPING height starts here
                let minHeightVal = 0;  // minimum value of the original range
                let maxHeightVal = 100;  // maximum value of the original range
                let newHeightMinVal = -30;  // minimum value of the new range
                let newHeightMaxVal = 104;  // maximum value of the new range

                // Map the eVal value to the new range
                let mappedHeightVal = ((eVal - minHeightVal) * (newHeightMaxVal - newHeightMinVal)) / (maxHeightVal - minHeightVal) + newHeightMinVal;

                // Set the height of the lines element to the mapped value
                lines.style.height = mappedHeightVal + '%';
                

                // let gradient = "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 90%, rgba(255,255,255,1) 100%)";
                let gradient = "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 90%, rgba(255,255,255,0.5) 100%)";
                // let gradient = "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 90%, rgba(0,0,0,1) 100%)";
                lines.style.backgroundImage = gradient;


                // MAPPING animation starts here
                let maxBPM = 240; // Replace this value with the maximum BPM in your data
                let minBPM = 60; // Replace this value with the minimum BPM in your data
                let speedFactor = 2; // Increase or decrease this value to adjust the speed difference between the fastest and slowest lines
                
                let mappedBPM = (bVal - minBPM) / (maxBPM - minBPM); // Map the BPM value to a range between 0 and 1
                let animationDuration = ((60 / bVal) * speedFactor) + "s"; // Calculate the animation duration based on the BPM value and the speedFactor
                let animationDelay = Math.random() + "s"; // Generate a random delay for each line
                
                lines.style.animation = "grow " + animationDuration + " ease-in-out " + animationDelay + " infinite alternate";
                lines.style.animationTimingFunction = "cubic-bezier(" + mappedBPM + ", 0.25, 0.75, " + (1 - mappedBPM) + ")"; // Use a cubic-bezier function to adjust the animation speed based on the BPM value
                
                

                // Choose a random color from the five options for each lines
                let randomColor = Math.floor(Math.random() * 5) + 1;
                if (randomColor === 1) {
                    lines.style.backgroundColor = linesColors;
                } else if (randomColor === 2) {
                    lines.style.backgroundColor = linesColors1;
                } else if (randomColor === 3) {
                    lines.style.backgroundColor = linesColors2;
                } else if (randomColor === 4) {
                    lines.style.backgroundColor = linesColors3;
                } else {
                    lines.style.backgroundColor = linesColors4;
                }


                circle.appendChild(lines);
                // circle.style.backgroundColor = bgVal;
                
            }
            // console.log(linesColors);

        }


                    
    })
    .catch(function (err) {
        console.log("Something went wrong!", err);
    });
