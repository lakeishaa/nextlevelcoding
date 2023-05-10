let viewGalleryBtn = document.getElementById("viewGalleryBtn");
let gallery = document.getElementById("gallery");
let webcamContainer = document.getElementById("webcam-container");
let galleryImage = document.querySelectorAll(".galleryImage");
let viewDrawBtn = document.getElementById("viewDrawBtn");

navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    const videoElement = document.getElementById("video");
    videoElement.srcObject = stream;
  })
  .catch(error => {
    console.log(`Error accessing camera: ${error}`);
  });

function initCanvas() {
  const canvas = document.getElementById("canvas");
  canvas.width = 500;
  canvas.height = 700;

  const ctx = canvas.getContext("2d");
  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;
  let currentEmoji = "\u{1F5FD}"; // default emoji is the laughing face

  let fontSizeSlider = document.getElementById("fontSizeSlider");
  fontSizeSlider.addEventListener("input", (e) => {
    let fontSize = e.target.value;
    ctx.font = fontSize + "px Arial";
  });

  canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    lastX = e.clientX - canvas.offsetLeft;
    lastY = e.clientY - canvas.offsetTop;
  });

  canvas.addEventListener("mousemove", (e) => {
    if (isDrawing) {
      const x = e.clientX - canvas.offsetLeft;
      const y = e.clientY - canvas.offsetTop;
      ctx.fillStyle = "black";
      ctx.globalAlpha = 1;
      ctx.fillText(currentEmoji, x-15, y+15);
      lastX = x;
      lastY = y;
    }
  });

  canvas.addEventListener("mouseup", () => {
    isDrawing = false;
  });

  canvas.addEventListener("mouseout", () => {
    isDrawing = false;
  });

  let clearBtn = document.querySelector(".clear");
  clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

  let savedImageCounter = 0;

  let saveBtn = document.querySelector(".save");
  saveBtn.addEventListener("click", () => {
    let imgSrc = `mySketch${savedImageCounter}.jpg`;
    let data = canvas.toDataURL("image/png");
    let a = document.createElement("a");
    a.href = data;
    a.download = `mySketch${savedImageCounter}.jpg`;
    a.click();
    savedImageCounter++;

    let newGalleryImage = document.createElement("IMG");
    newGalleryImage.classList.add("galleryImage")
    newGalleryImage.src = `./saved-sketches/${imgSrc}`;
    gallery.appendChild(newGalleryImage);
  });

  let emoji1 = document.getElementById("emoji-1");
  emoji1.addEventListener("click", () => {
    currentEmoji = "\u{1F5FD}";
  });

  let emoji2 = document.getElementById("emoji-2");
  emoji2.addEventListener("click", () => {
      currentEmoji = "\u{1F6B2}";
  });

  let emoji3 = document.getElementById("emoji-3");
  emoji3.addEventListener("click", () => {
      currentEmoji = "\u{1F695}";
  });

  let emoji4 = document.getElementById("emoji-4");
    emoji4.addEventListener("click", () => {
        currentEmoji = "\u{1F687}";
    });

    let emoji5 = document.getElementById("emoji-5");
    emoji5.addEventListener("click", () => {
        currentEmoji = "\u{1F6CD}";
    });

    let emoji6 = document.getElementById("emoji-6");
    emoji6.addEventListener("click", () => {
        currentEmoji = "\u{1F32D}";
    });

    let emoji7 = document.getElementById("emoji-7");
    emoji7.addEventListener("click", () => {
        currentEmoji = "\u{1F4DA}";
    });

    let emoji8 = document.getElementById("emoji-8");
    emoji8.addEventListener("click", () => {
        currentEmoji = "\u{1F4C8}";
    });

    let emoji9 = document.getElementById("emoji-9");
    emoji9.addEventListener("click", () => {
        currentEmoji = "\u{1F4B8}";
    });

    let emoji10 = document.getElementById("emoji-10");
    emoji10.addEventListener("click", () => {
        currentEmoji = "\u{1F483}";
    });

    let emoji11 = document.getElementById("emoji-11");
    emoji11.addEventListener("click", () => {
        currentEmoji = "\u{1F460}";
    });

    let emoji12 = document.getElementById("emoji-12");
    emoji12.addEventListener("click", () => {
        currentEmoji = "\u{1F400}";
    });

    let emoji13 = document.getElementById("emoji-13");
    emoji13.addEventListener("click", () => {
        currentEmoji = "\u{1F3B8}";
    });

    let emoji14 = document.getElementById("emoji-14");
    emoji14.addEventListener("click", () => {
        currentEmoji = "\u{1F3AD}";
    });

    let emoji15 = document.getElementById("emoji-15");
    emoji15.addEventListener("click", () => {
        currentEmoji = "\u{1F3AC}";
    });

    let emoji16 = document.getElementById("emoji-16");
    emoji16.addEventListener("click", () => {
        currentEmoji = "\u{1F3A8}";
    });

    let emoji17 = document.getElementById("emoji-17");
    emoji17.addEventListener("click", () => {
        currentEmoji = "\u{1F399}";
    });

    let emoji18 = document.getElementById("emoji-18");
    emoji18.addEventListener("click", () => {
        currentEmoji = "\u{1F3C0}";
    });

    let emoji19 = document.getElementById("emoji-19");
    emoji19.addEventListener("click", () => {
        currentEmoji = "\u{1F37B}";
    });

    let emoji20 = document.getElementById("emoji-20");
    emoji20.addEventListener("click", () => {
        currentEmoji = "\u{1F355}";
    });

    let emoji21 = document.getElementById("emoji-21");
    emoji21.addEventListener("click", () => {
        currentEmoji = "\u{1F308}";
    });

    let emoji22 = document.getElementById("emoji-22");
    emoji22.addEventListener("click", () => {
        currentEmoji = "\u{1F303}";
    });


}

window.addEventListener("load", initCanvas);

viewGalleryBtn.addEventListener("click", function(){
  gallery.style.display = "block";
  gallery.style.display = "grid";
  gallery.style.gridTemplateColumns = "auto auto auto auto";
  gallery.style.marginLeft = "auto";
  gallery.style.marginRight = "auto";
  gallery.style.marginBottom = "auto";
  gallery.style.position = "absolute";


  // viewDrawBtn.style.marginLeft ="-100px";
  webcamContainer.style.display = "none";
  viewDrawBtn.style.display = "block";
  viewDrawBtn.style.position = "fixed";
  viewDrawBtn.style.marginTop = "-786px"
  viewDrawBtn.style.marginLeft="44px"
  viewDrawBtn.style.overflow="hidden"
  viewDrawBtn.style.zIndex = "10";
  viewDrawBtn.style.zIndex = "10";
  galleryImage.forEach((image) => {
    image.style.margin = "45px";

  });

});

viewDrawBtn.addEventListener("click", function() {
  viewDrawBtn.style.display = "none";
  // viewDrawBtn.style.marginTop = "9px";
  gallery.style.display = "none";
  webcamContainer.style.display = "block";
});
