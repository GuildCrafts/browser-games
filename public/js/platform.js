let ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 480;

let bgReady = false;
let bgImage = new Image()
bgImage.onload = function () {
  bgReady = true;
};

bgImage.src = "./img/pinkbackground.png";

let heroReady = false;
let heroImage = new Image();
heroImage.onload = function () {
  heroReady = true
};
heroImage.src = "./img/girl2_1.png";

let monsterReady = false;
let monsterImage = new Image();
monsterImage.onload = function () {
  monsterReady = true
};
monsterImage.src = "./img/idle_1.png";

let hero = {
  speed: 256,
  x: 0,
  y: 0
};

let monster = {
  x: 0,
  y: 0
};

let monstersCaught = 0;

let keysDown = {};

addEventListener("keydown", function (e) {
  keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
  delete keysDown[e.keyCode]
}, false)

let reset = function () {
  hero.x = canvas.width - 750
  hero.y = canvas.height - 100

  monster.x = 32 + (Math.random() * (canvas.width - 64))
  monster.y = 32 + (Math.random() * (canvas.height - 64))
};

let update = function (modifier) {
  if(38 in keysDown) {
    hero.y -= hero.speed * modifier
  }
  if(40 in keysDown) {
    hero.y += hero.speed * modifier
  }
  if(37 in keysDown) {
    hero.x -= hero.speed * modifier
  }
  if(39 in keysDown) {
    hero.x += hero.speed * modifier
  }

  if(
    hero.x <= (monster.x + 32)
    && monster.x <= (hero.x + 32)
    && hero.y <= (monster.y + 32)
    && monster.y <= (hero.y + 32)
  ) {
    ++monstersCaught;
    reset()
  }
};

let render = function () {
  if(bgReady) {
    ctx.drawImage(bgImage, 0, 0)
  }
  if(heroReady) {
    ctx.drawImage(heroImage, hero.x, hero.y)
  }

  if(monsterReady) {
    ctx.drawImage(monsterImage, monster.x, monster.y);
  }

  ctx.fillStyle = "#C99AFE"
  ctx.font = "24px Helvetica"
  ctx.textAlign = "left"
  ctx.textBaseline = "top"
  ctx.fillText("Cats caught: " + monstersCaught, 32, 32 )
};

let main = function () {
  let now = Date.now()
  let delta = now - then;

  update(delta / 1000)
  render();

  then = now;

  requestAnimationFrame(main);
};

let w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webknitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

let then = Date.now();
reset();
main();
