
let border = document.getElementById('border');
let canvas = document.getElementById('canvas');
let leftCircle = document.getElementById('left-illustration');
let rightCircle = document.getElementById('right-illustration');
let circle = leftCircle;

const onMouseMove = (e) => {
  if (e.pageX > window.innerWidth / 2) {
    leftCircle.style.display = 'none'; // hide left circle
    rightCircle.style.display = 'block'; // show right circle
    circle = rightCircle;
  } else {
    rightCircle.style.display = 'none'; // hide right circle
    leftCircle.style.display = 'block'; // show left circle
    circle = leftCircle;
  }
  
  // Add delay using setTimeout
  setTimeout(() => {
    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';
  }, 230);
}

document.addEventListener('mousemove', onMouseMove);


// SEECONDD

window.addEventListener("mousemove", function(event) {
        
  // Check if the cursor is within the specified range of screen width (500px to 1000px)
  if (event.clientX >= 360 && event.clientX <= 720) {
      
      // If the cursor is within the range, change the background color of the element to red
      // robot.style.backgroundColor = "red";
      robot.style.top = "0px";
      document.getElementById("robot-down").style.display = "none";
      // element.style.animationName = 'rise';
      
  } else {
      
      // If the cursor is outside the range, change the background color of the element to white
      // robot.style.top = "800px";
      robot.style.top = "750px";
      document.getElementById("robot-down").style.display = "block";
      // document.getElementById("robot-down").style.rotate = "90deg";

      // element.style.animationName = '';
  }
});


window.addEventListener("mousemove", function(event) {
        
  // Check if the cursor is within the specified range of screen width (500px to 1000px)
  if (event.clientX >= 700 && event.clientX <= 1055) {
      
      // If the cursor is within the range, change the background color of the element to red
      human.style.top = "0px";
      document.getElementById("human-down").style.display = "none";
      // element.style.animationName = 'rise';
      
  } else {
      
      // If the cursor is outside the range, change the background color of the element to white
      human.style.top = "750px";
      document.getElementById("human-down").style.display = "block";
      // element.style.animationName = '';
  }
});

// Calculate the initial sizes of border-left, border-right, border-top, and border-bottom
const canvasWidth = canvas.offsetWidth;
const windowWidth = window.innerWidth;
const borderLeftSize = (windowWidth - canvasWidth) / 2;
const borderRightSize = borderLeftSize;

const canvasHeight = canvas.offsetHeight;
const windowHeight = window.innerHeight;
const borderTopSize = (windowHeight - canvasHeight) / 2;
const borderBottomSize  = borderTopSize;


// Set the initial border styles
border.style.borderLeft = `${borderLeftSize}px solid white`;
border.style.borderRight = `${borderRightSize}px solid white`;
border.style.borderTop = `${borderTopSize + 10}px solid white`;
border.style.borderBottom = `${borderBottomSize + 100}px solid white`;


// Set the height of the border element to 100vh
// border.style.height = '100vh';

console.log(borderLeftSize);
console.log(borderRightSize);
console.log(borderTopSize);
console.log(borderBottomSize);