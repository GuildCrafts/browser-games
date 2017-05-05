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
{
  x: 490,
  y: 240,
  width: 70,
  height: 70,
  img: "./img/cake5.png"
}]

let platformReady = []
for(let i = 0; i <= 11; i++) {
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
  speed: 150,
  x: 0,
  y: 0,
  jumping: false,
  upwardVelocity: 0,
  width: 43,
  height: 50,
  grounded: false
},
gravity = 0.3,
friction = 1,
gravityDelta = 0.1;

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

  monster.x = (Math.random() * (canvas.width - 250))
  monster.y = (Math.random() * (canvas.height - 100))
};

let isColliding = hero => {
  let colliding = false

  for(let platformItem of platform) {
    colliding = colliding || (
      hero.x < platformItem.x + platformItem.width &&
      hero.x + hero.width > platformItem.x &&
      hero.y < platformItem.y + platformItem.height &&
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
      hero.upwardVelocity = 2
    }
  }

  if (hero.upwardVelocity > 0) hero.upwardVelocity -= gravityDelta
  if (hero.upwardVelocity < 0) hero.upwardVelocity = 0
  if (hero.jumpY - hero.y > 30) hero.upwardVelocity *= -.1
  if (hero.jumping) hero.y += gravity + gravityDelta - hero.upwardVelocity
  gravityDelta *= .1

  if( isColliding( hero )) {
    hero = lastHero
  }
  // console.log('FRAME', hero)

  let colliding = isColliding( hero )


  // if(hero.y >= canvas.height - hero.height) {
  //   hero.y = canvas.height -hero.height
  //   hero.jumping = false;
  //   gravityDelta = 0.1
  // }
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


function colCheck(shapeA, shapeB) {
  // get the vectors to check against
  var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
    vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2)),
    // add the half widths and half heights of the objects
    hWidths = (shapeA.width / 2) + (shapeB.width / 2),
    hHeights = (shapeA.height / 2) + (shapeB.height / 2),
    colDir = null;

  // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
  if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
    // figures out on which side we are colliding (top, bottom, left, or right)
    var oX = hWidths - Math.abs(vX),
      oY = hHeights - Math.abs(vY);
    if (oX >= oY) {
      if (vY > 0) {
        colDir = "t";
        shapeA.y += oY;
      } else {
        colDir = "b";
        shapeA.y -= oY;
      }
    } else {
      if (vX > 0) {
        colDir = "l";
        shapeA.x += oX;
      } else {
        colDir = "r";
        shapeA.x -= oX;
      }
    }
  }
  return colDir;
}


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

  for(let i = 0; i < 11; i++) {
    if(platformReady[i].value === true) {
      ctx.drawImage(platformReady[i].image, platform[i].x, platform[i].y)
    }
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
