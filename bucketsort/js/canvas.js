const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let pixelSize = getPixelSize();

const heatmapColors = [
  "blue",
  "cyan",
  "lime",
  "yellow",
  "orange",
  "orangered",
  "red",
  "darkred",
];
const previewHeatmapColors = [
  "#000000",
  "#333333",
  "#666666",
  "#999999",
  "#CCCCCC",
  "#FFFFFF",
];

setCanvasSize();

// RESIZE EVENTS
window.addEventListener("resize", setCanvasSize);
window.addEventListener("resize", () => {
  pixelSize = getPixelSize();
});
window.addEventListener("resize", () => {
  if (sortedElements.length > 0) {
    drawFrame(sortedElements.flat(Infinity), isPreview);
  }
});

function setCanvasSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function clearCanvas() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
}

function getColor(element, isPreview) {
  let colors = heatmapColors;

  if (isPreview) colors = previewHeatmapColors;

  const colorIndex = Math.floor(
    ((colors.length - 1) / (maxOccurance - minOccurance)) *
      (element.amount - minOccurance)
  );

  return colors[colorIndex];
}

function getPosition(element) {
  const basePos = element.key - 1;
  const x = (basePos * pixelSize) % window.innerWidth;
  const y = Math.floor(basePos / (window.innerWidth / pixelSize));

  return { x: x, y: y * pixelSize };
}

function getPixelSize() {
  return window.innerWidth / pixelFractions;
}

function drawPixel(position, color) {
  ctx.fillStyle = color;
  ctx.fillRect(position.x, position.y, pixelSize, pixelSize);
}

function drawFrame(elementsToDraw, isPreview = false) {
  clearCanvas();
  elementsToDraw.forEach((element) => {
    const position = getPosition(element);
    const color = getColor(element, isPreview);
    drawPixel(position, color);
  });
}
