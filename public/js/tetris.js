
canvas = document.getElementById('tetris');
context = canvas.getContext('2d');


let tetrisMusic = new Audio('audio/tetris-gameboy-02.mp3');
let landingSound = new Audio('audio/Gun-Silencer-SoundBible.com-193331132.mp3');
let scoreSound = new Audio('audio/Metroid_Door-Brandino480-995195341.mp3');
let fourLineSound = new Audio('audio/8d82b5_SM64_High_Score_Sound_Effect.mp3');
let loserSound = new Audio('audio/Pacman-death-sound.mp3');

context.scale(20, 20);
let rowArray = [];

function arenaSweep() {
  let rowCount = 1;
  outer: for (let y = arena.length - 1; y > 0; --y) {
    for(let x = 0; x < arena[y].length; ++x) {
      if (arena[y][x] === 0) {
        continue outer;
      }
    }

    const row = arena.splice(y, 1)[0].fill(0);
    arena.unshift(row);
    ++y;

    player.lines += rowCount;
    rowArray.push(rowCount);
    console.log(rowArray);
    console.log(player.lines)

    updateLevel();

    gameMessage = document.getElementById('row-clear-message');
    gameMessage.innerHTML = "GOOD JOB";
    gameMessage.style.display = 'block';
    setTimeout(clearMessage, 500)
    scoreSound.play();
  }

  if (rowArray.length === 1){
    player.score += 40*(player.level + 1)
  } else if (rowArray.length === 2) {
    player.score += 100*(player.level + 1)
  } else if (rowArray.length === 3) {
    player.score += 300*(player.level + 1)
  } else if (rowArray.length >= 4) {
    player.score += 1200*(player.level + 1)
    gameMessage = document.getElementById('row-clear-message');
    gameMessage.innerHTML = "AMAZING";
    gameMessage.style.display = 'block';
    setTimeout(clearMessage, 500)
    fourLineSound.play();
  }
  landingSound.play();
  rowArray = [];

}

function clearMessage() {
  gameMessage.style.display = 'none';
}

function collide(arena, player) {
  const [m, o] = [player.matrix, player.pos]
  for (let y = 0; y < m.length; ++y) {
    for (let x = 0; x < m[y].length; ++x) {
      if (m[y][x] !== 0 &&
          (arena[y + o.y] &&
          arena[y + o.y][x + o.x]) !== 0) {
            return true;
          }
    }
  }
  return false;
}

function createMatrix(width, height) {
  const matrix = [];
  while (height--) {
    matrix.push(new Array(width).fill(0))
  }
  return matrix;
}

function createPiece(type) {
  if (type === 'T') {
    return [
      [0, 0, 0],
      [1, 1, 1],
      [0, 1, 0],
    ];
  } else if (type === 'O'){
    return [
      [2, 2],
      [2, 2],
    ];
  } else if (type === 'L'){
    return [
      [0, 3, 0],
      [0, 3, 0],
      [0, 3, 3],
    ];
  } else if (type === 'J'){
    return [
      [0, 4, 0],
      [0, 4, 0],
      [4, 4, 0],
    ];
  } else if (type === 'I'){
    return [
      [0, 5, 0, 0],
      [0, 5, 0, 0],
      [0, 5, 0, 0],
      [0, 5, 0, 0],
    ];
  } else if (type === 'S'){
    return [
      [0, 6, 6],
      [6, 6, 0],
      [0, 0, 0],
    ];
  } else if (type === 'Z'){
    return [
      [7, 7, 0],
      [0, 7, 7],
      [0, 0, 0],
    ];
  }
}

function draw() {
  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);
  drawMatrix(arena, {x: 0, y: 0});
  drawMatrix(player.matrix, player.pos);
}

function drawMatrix(matrix, offset) {
  matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        context.fillStyle = colors[value];
        context.fillRect(x + offset.x,
                         y + offset.y,
                         1, 1);
      }
    });
  });
}

function merge(arena, player) {
  player.matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !==0) {
        arena[y + player.pos.y][x + player.pos.x] = value;
      }
    });
  });
}

function playerDrop () {
  player.pos.y++;
  if(collide(arena, player)) {
    player.pos.y--;
    merge(arena, player);
    playerReset();
    arenaSweep();
    updateScore();
  }
  dropCounter = 0;
}

function playerMove(dir) {
  player.pos.x += dir;
  if (collide(arena, player)) {
    player.pos.x -= dir;
  }
}

function playerReset() {
  const pieces = 'ILJOTSZ';
  player.matrix = createPiece(pieces[pieces.length*Math.random() | 0]);
  player.pos.y = 0;
  player.pos.x = (arena[0].length / 2 | 0) -
                 (player.matrix[0].length / 2 | 0);
  if (collide(arena, player)) {
    gameMessage = document.getElementById('loser-message');
    gameMessage.innerHTML = "GAME OVER";
    gameMessage.style.display = 'block';
    loserSound.play();
    setTimeout(clearBoard, 2000);
  }
}

function clearBoard(){
  arena.forEach(row => row.fill(0));
  player.score = 0;
  player.lines = 0;
  player.level = 0;
  updateScore();
  gameMessage.style.display = 'none';
}

function playerRotate(dir) {
  const pos = player.pos.x;
  let offset = 1;
  rotate(player.matrix, dir);
  while (collide(arena, player)) {
    player.pos.x += offset;
    offset = -(offset + (offset > 0 ? 1 : -1));
    if (offset > player.matrix[0].length) {
      rotate(player.matrix, -dir);
      player.pos.x = pos;
      return;
    }
  }
}

function rotate(matrix, dir) {
  for (let y = 0; y < matrix.length; ++y) {
    for (let x = 0; x < y; ++x) {
      [
        matrix[x][y],
        matrix[y][x],
      ] = [
        matrix[y][x],
        matrix[x][y],
      ];
    }
  }
  if (dir > 0) {
    matrix.forEach(row => row.reverse());
  } else {
    matrix.reverse();
  }
}

let dropCounter = 0;
let dropInterval = 1000;

let lastTime = 0;
function update(time = 0) {
  const deltaTime = time - lastTime;
  lastTime = time;

  dropCounter += deltaTime;
  if (dropCounter > dropInterval) {
    playerDrop();
  }

  draw();
  requestAnimationFrame(update);
}

function updateScore() {
  document.getElementById('score').innerText = player.score;
  document.getElementById('lines').innerText = player.lines;
  document.getElementById('levels').innerText = player.level;
}

function updateLevel() {
  if (player.level === 0){
    if (player.lines >= 10){//10
      player.level ++
      dropInterval -= 100;
    }
  } else if (player.level === 1) {
    if (player.lines >= 20){
      player.level ++;
      dropInterval -= 100;
      console.log(dropInterval)
    }
  } else if (player.level > 1){
    if (player.lines >= 10 * player.level + 10) {//10
      player.level ++;
      dropInterval -= 100;
      console.log(dropInterval)
    }
  }
}

const colors = [
  null,
  '#FF0D72',
  '#0DC2FF',
  '#0DFF72',
  '#F538FF',
  '#FF8E0D',
  '#FFE138',
  '#3877FF',
];

const arena = createMatrix(12, 20);

const player = {
  pos: {x: 5, y: 5},
  matrix: null,
  score: 0,
  lines: 0,
  level: 0,
}

document.addEventListener('keydown', event => {
  if (event.keyCode === 37) {
    playerMove(-1);
    // player.pos.x--;
  } else if (event.keyCode === 39) {
    playerMove(1);
  } else if (event.keyCode === 40) {
    playerDrop();
  } else if (event.keyCode === 38) {
    playerRotate(-1);
  } else if (event.keyCode === 16) {
    playerRotate(1);
  }
});

draw();

function startGame(){
  player.score = 0;
  player.lines = 0;
  player.level = 0;
  for(let i = 0; i < arena.length; i++){
    arena[i].fill(0);
  }
  tetrisMusic.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
  }, false);
  tetrisMusic.play();
  playerReset();
  updateScore();
  update();
}
