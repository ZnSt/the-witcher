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

const date = new Date();
console.log("Date: ", date);

// Возвращает день месяца от 1 до 31
console.log("getUTCDate(): ", date.getUTCDate());

// Возвращает день недели от 0 до 6
console.log("getUTCDay(): ", date.getUTCDay());

// Возвращает месяц от 0 до 11
console.log("getUTCMonth(): ", date.getUTCMonth());

// Возвращает год из 4 цифр
console.log("getUTCFullYear(): ", date.getUTCFullYear());

// Возвращает час
console.log("getUTCHours(): ", date.getUTCHours());

// Возвращает минуты
console.log("getUTCMinutes(): ", date.getUTCMinutes());

// Возвращает секунды
console.log("getUTCSeconds(): ", date.getUTCSeconds());

// Возвращает миллисекунды
console.log("getUTCMilliseconds(): ", date.getUTCMilliseconds());
