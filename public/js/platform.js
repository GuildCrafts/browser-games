// Constants:
const GRAVITY_DELTA = 0.1
const GRAVITY_CONST = 0.4
const GRAVITY_DELTA_DELTA = 1.1

let canvas = document.createElement('canvas');
let ctx = canvas.getContext("2d");
canvas.width = 560;
canvas.height = 380;
document.body.appendChild(canvas);

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
heroImage.src = "./img/girl2_2.png";

let monsterReady = false;
let monsterImage = new Image();
monsterImage.onload = function () {
  monsterReady = true
};
monsterImage.src = "./img/idle_2.png";

let platform = [{ // 0
  x: 0,
  y: 310,
  width: 70,
  height: 70,
  img: "./img/cake.png"
},
{ // 1
  x: 70,
  y: 310,
  width: 70,
  height: 70,
  img: "./img/cake1.png"
},
{ // 2
  x: 140,
  y: 310,
  width: 70,
  height: 70,
  img: "./img/cake2.png"
},
{ // 3
  x: 210,
  y: 310,
  width: 70,
  height: 70,
  img: "./img/cake3.png"
},
{ // 4
  x: 280,
  y: 310,
  width: 70,
  height: 70,
  img: "./img/cakeCenter.png"
},
{ // 5
  x: 280,
  y: 240,
  width: 70,
  height: 70,
  img: "./img/cake6.png"
},
{ //6
  x: 350,
  y: 310,
  width: 70,
  height: 70,
  img: "./img/cakeCenter.png"
},
{ //7
  x: 420,
  y: 310,
  width: 70,
  height: 70,
  img: "./img/cakeCenter1.png"
},
{//8
  x: 490,
  y: 310,
  width: 70,
  height: 70,
  img: "./img/cakeCenter2.png"
},
{ //9
  x: 420,
  y: 240,
  width: 70,
  height: 70,
  img: "./img/cake3.png"
},
{//10
  x: 350,
  y: 240,
  width: 70,
  height: 70,
  img: "./img/cake4.png"
},
{//11
  x: 490,
  y: 240,
  width: 70,
  height: 70,
  img: "./img/cake5.png"
},
{
  x: 30,
  y: 160,
  width: 70,
  height: 5,
  img: "./img/cakeHalfAltLeft1.png"
},
{
  x: 100,
  y: 160,
  width: 70,
  height: 5,
  img: "./img/cakeHalfAltMid1.png"
},
{
  x: 170,
  y: 160,
  width: 100,
  height: 5,
  img: "./img/cakeHalfAltRight1.png"
},
{
  x: 280,
  y: 90,
  width: 70,
  height: 5,
  img: "./img/cakeHalfAltLeft1.png"
},
{
  x: 350,
  y: 90,
  width: 70,
  height: 5,
  img: "./img/cakeHalfAltMid1.png"
},
{
  x: 420,
  y: 90,
  width: 70,
  heigth: 5,
  img: "./img/cakeHalfAltRight2.png"
}]

let platformReady = []
for(let i = 0; i <= 17; i++) {
  platformReady[i] = {
    value: false,
    image: new Image()
  }
  platformReady[i].image.onload = function() {
    platformReady[i].value = true
  }

  platformReady[i].image.src = platform[i].img
}

let hero = {
  speed: 110,
  x: 0,
  y: 0,
  jumping: false,
  upwardVelocity: 0,
  width: 43,
  height: 50,
  grounded: false,
  gravityDelta: GRAVITY_DELTA
},
gravity = GRAVITY_CONST;

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
  hero.x = canvas.width - 500
  hero.y = canvas.height - 120

  let monsterPositionX = [260, 360, 430, 510]
  let monsterPositionX2 = [10, 80, 140, 210]
  let monsterPositionX3 = [400, 330, 300, 270]
  let monsterPositionY = [200, 123, 50]
  let number = Math.floor(Math.random() * (monsterPositionY.length))
  let number2 = Math.floor(Math.random() * (monsterPositionX.length))
  let number3 = Math.floor(Math.random() * (monsterPositionX2.length))
  let number4 = Math.floor(Math.random() * (monsterPositionX3.length))


  monster.y = monsterPositionY[number]

  if(monster.y === 200) {
    monster.x = monsterPositionX[number2]
  } else if (monster.y === 123) {
    monster.x = monsterPositionX2[number3]
  } else if(monster.y === 50) {
    monster.x = monsterPositionX3[number4]
  }
};

let isColliding = hero => {
  let colliding = false

  for(let platformItem of platform) {
    colliding = colliding || (
      hero.x < platformItem.x + platformItem.width / 2 &&
      hero.x + hero.width > platformItem.x &&
      hero.y < platformItem.y + platformItem.height /2 &&
      hero.height + hero.y > platformItem.y
    )
  }

  return colliding
}


let update = function (modifier) {
  let lastHero = Object.assign( {}, hero )

  if(32 in keysDown) {
    hero.jumping = true
    hero.jumpY = hero.y

    if(hero.upwardVelocity === 0) {
      hero.upwardVelocity = 7.5
    }
  }

  if (hero.upwardVelocity > 0) hero.upwardVelocity -= hero.gravityDelta
  if (hero.upwardVelocity < 0) hero.upwardVelocity = 0
  if (hero.jumpY - hero.y > 70) hero.upwardVelocity *= -.2
  if (hero.jumping) {
    hero.y += gravity + hero.gravityDelta - hero.upwardVelocity
    if(hero.y > canvas.height) hero.y = canvas.height
    hero.gravityDelta *= GRAVITY_DELTA_DELTA
  }

  if( isColliding( hero )) {
    hero = lastHero
    hero.gravityDelta = GRAVITY_DELTA
  }

  let colliding = isColliding( hero )

  if( ! colliding ) {
    const delta = hero.speed * modifier

    if(37 in keysDown) {
      hero.x -= delta
    }
    if(39 in keysDown) {
      hero.x += delta
    }
  }

  if( isColliding( hero )) {
    hero = lastHero
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

  for(let i = 0; i <= 17; i++) {
    if(platformReady[i].value === true) {
      ctx.drawImage(platformReady[i].image, platform[i].x, platform[i].y)
    }
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
