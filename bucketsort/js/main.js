// sorting vars
const fps = 30;
const elementsPerFrame = 10_000;
let interval = null;
let isPaused = false;
let isPreview = true;

// elements prop vars
const pixelFractions = 32;
const elementsCount = 10_000_000;
let maxIntSize = Math.ceil(
  (window.innerHeight * window.innerWidth) / pixelFractions
);

// elements vars
let elements = [];
let sortedElements = [];

window.addEventListener("load", () => {
  renderPreview();
});

function pauseSort() {
  isPaused = !isPaused;
}

function setCounter() {
  const counter = document.getElementById("el-left");
  counter.innerText = elements.length;
}

function reset() {
  isPaused = false;
  renderPreview();
}

function renderPreview() {
  isPreview = true;
  getRandomElements(100000);
  sort();
  drawFrame(sortedElements.flat(Infinity), isPreview);
  setCounter();
}

function renderMotion() {
  isPaused = false;
  isPreview = false;
  getRandomElements();
  drawFrame(sortedElements.flat(Infinity));

  if (interval) clearInterval(interval);

  interval = setInterval(() => {
    if (!isPaused && elements.length !== 0) {
      sortNext(elementsPerFrame);
      drawFrame(sortedElements.flat(Infinity));
      setCounter();
    }
  }, 1000 / fps);
}
