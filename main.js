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

// const turns = {
//   east: 0.0,
//   south: 0.25,
//   west: 0.5,
//   north: 0.75
// };

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
  rotation: 0.0,
  isStopped: false
};
const moves = {
  distancePX: 5,
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
    turn(directions[event.code].orientation);
    car.direction = directions[event.code];
    $img.style.transform = `rotate(${car.rotation}turn)`;
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

function turn(finalOrientation) {
  const neighbors = {
    east: {
      north: -0.25,
      south: 0.25,
      west: 0.5,
      east: 0
    },
    south: {
      west: 0.25,
      east: -0.25,
      north: 0.5,
      south: 0
    },
    west: {
      north: 0.25,
      south: -0.25,
      east: 0.5,
      west: 0
    },
    north: {
      south: 0.5,
      east: 0.25,
      west: -0.25,
      north: 0
    }
  };
  car.rotation += neighbors[car.direction.orientation][finalOrientation];
}
