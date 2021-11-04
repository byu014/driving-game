const directions = {
  ArrowUp: 'north',
  ArrowDown: 'south',
  ArrowRight: 'east',
  ArrowLeft: 'west'
};

const turns = {
  east: 0.0,
  south: 0.25,
  west: 0.5,
  north: 0.75
};
const car = {
  direction: 'east'
};

let turn = 0.0;

const $img = document.querySelector('img');

window.addEventListener('keydown', function (event) {
  car.direction = directions[event.key];
  $img.style.transform = `rotate(${turns[car.direction]}turn)`;
});
