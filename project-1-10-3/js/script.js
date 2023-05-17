
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
  var screenWidth = window.innerWidth;

  // Check if the cursor is within the specified range of screen width (500px to 1000px)
  if (event.clientX <= screenWidth / 2) {
      
      robot.style.top = "0px";
      document.getElementById("robot-down").style.display = "none";
      // element.style.animationName = 'rise';
      
  } else {
      
      robot.style.top = "750px";
      document.getElementById("robot-down").style.display = "block";
      // document.getElementById("robot-down").style.rotate = "90deg";

      // element.style.animationName = '';
  }
});


window.addEventListener("mousemove", function(event) {
        // Calculate the screen width
  var screenWidth = window.innerWidth;

  var rangeStart = screenWidth / 2;
  var rangeEnd = screenWidth;

  if (event.clientX >= rangeStart && event.clientX <= rangeEnd) {
      
      human.style.top = "0px";
      document.getElementById("human-down").style.display = "none";
      // element.style.animationName = 'rise';
      
  } else {
      
      human.style.top = "750px";
      document.getElementById("human-down").style.display = "block";
      // element.style.animationName = '';
  }
});

const canvasWidth = canvas.offsetWidth;
const windowWidth = window.innerWidth;
const borderLeftSize = (windowWidth - canvasWidth) / 2;
const borderRightSize = borderLeftSize;

const canvasHeight = canvas.offsetHeight;
const windowHeight = window.innerHeight;
const borderTopSize = (windowHeight - canvasHeight) / 2;
const borderBottomSize  = borderTopSize;

border.style.borderLeft = `${borderLeftSize}px solid white`;
border.style.borderRight = `${borderRightSize}px solid white`;
border.style.borderTop = `${borderTopSize + 10}px solid white`;
border.style.borderBottom = `${borderBottomSize + 100}px solid white`;



console.log(borderLeftSize);
console.log(borderRightSize);
console.log(borderTopSize);
console.log(borderBottomSize);