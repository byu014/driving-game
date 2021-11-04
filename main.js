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
  }
};
const moves = {
  x: {
    east: () => car.position.x + 1,
    west: () => car.position.x - 1
  },
  y: {
    north: () => car.position.y - 1,
    south: () => car.position.y + 1
  }
};

// setInterval();

window.addEventListener('keydown', function (event) {
  if (!(event.key in directions)) {
    return;
  }
  car.direction = directions[event.key];
  $img.style.transform = `rotate(${turns[car.direction]}turn)`;
  moveCar();
});

function moveCar() {
  $img.style[car.direction.style] = `${moves[car.direction.axis][car.direction.orientation]()}px`;
  car.position.x = $img.x;
  car.position.y = $img.y;
}
