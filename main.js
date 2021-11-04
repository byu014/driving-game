const $img = document.querySelector('img');
const directions = {
  ArrowUp: {
    orientation: 'north',
    axis: 'y',
    style: 'top'
  },
  ArrowDown: {
    orientation: 'south',
    axis: 'y',
    style: 'top'

  },
  ArrowRight: {
    orientation: 'east',
    axis: 'x',
    style: 'left'

  },
  ArrowLeft: {
    orientation: 'west',
    axis: 'x',
    style: 'left'
  }
};

const turns = {
  east: 0.0,
  south: 0.25,
  west: 0.5,
  north: 0.75
};

const car = {
  direction: {
    orientation: 'east',
    axis: 'x',
    style: 'left'
  },
  position: {
    x: $img.x,
    y: $img.y
  },
  isStopped: false
};
const moves = {
  distancePX: 3,
  x: {
    east: () => car.position.x + moves.distancePX,
    west: () => car.position.x - moves.distancePX
  },
  y: {
    north: () => car.position.y - moves.distancePX,
    south: () => car.position.y + moves.distancePX
  }
};

let moveInterval = setInterval(moveCar, 16);

window.addEventListener('keydown', function (event) {
  if (event.code in directions) {
    car.direction = directions[event.code];
    $img.style.transform = `rotate(${turns[car.direction]}turn)`;
  } else if (event.code === 'Space') {
    car.isStopped = !car.isStopped;
  }
});

function moveCar() {
  if (car.isStopped) {
    return;
  }
  $img.style[car.direction.style] = `${moves[car.direction.axis][car.direction.orientation]()}px`;
  car.position.x = $img.x;
  car.position.y = $img.y;
}
