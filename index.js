const wall = document.querySelector(".wall");
const whitch = document.querySelector(".whitch");

wall.addEventListener("click", onClick);

function onClick(event) {
  const { clientHeight: wallHeight, clientWidth: wallWidth } = wall;

  const { clientHeight: whitchHeight, clientWidth: whitchWidth } = whitch;

  let coordsX = `${event.offsetX - whitchWidth / 2}px`;
  let coordsY = `${event.offsetY - whitchHeight / 2}px`;

  if (event.offsetX < whitchWidth / 2) {
    coordsX = 0;
  }

  if (event.offsetX > wallWidth - whitchWidth) {
    coordsX = `${wallWidth - whitchWidth}px`;
  }

  whitch.style.left = coordsX;
  whitch.style.top = coordsY;
}
