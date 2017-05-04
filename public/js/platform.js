let canvas = document.createElement('canvas');
let ctx = canvas.getContext("2d");
canvas.width = 600;
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

let platformReady = false;
let platformImage = new Image();
platformImage.onload = function () {
  platformReady = true
}
platformImage.src = "./img/cake.png"

let platformReady1 = false;
let platformImage1 = new Image()
 platformImage1.onload = function () {
   platformReady1 = true
 }
 platformImage1.src = "./img/cake1.png"

 let platformReady2 = false;
 let platformImage2 = new Image()
 platformImage2.onload = function () {
   platformReady2 = true
 }
 platformImage2.src = "./img/cake2.png"

 let platformReady3 = false;
 let platformImage3 = new Image()
 platformImage3.onload = function () {
   platformReady3 = true
 }
 platformImage3.src = "./img/cake3.png"

let platformReady4 = false
let platformImage4 = new Image()
platformImage4.onload = function () {
  platformReady4 = true
}
platformImage4.src = "./img/cakeCenter.png"

let platformReady5 = false
let platformImage5 = new Image()
platformImage5.onload = function () {
  platformReady5 = true
}
platformImage5.src = "./img/cakeHillLeft1.png"



let hero = {
  speed: 150,
  x: 0,
  y: 0,
  jumping: false,
  upwardVelocity: 0,
  width: 120,
  height: 120
},
gravity = 0.2,
friction = 1,
gravityDelta = 0.1;

let monster = {
  x: 0,
  y: 0
};

let platform = {
  x: 70,
  y: 310
}

let monstersCaught = 0;

let keysDown = {};

addEventListener("keydown", function (e) {
  keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
  delete keysDown[e.keyCode]
}, false)

let reset = function () {
  hero.x = canvas.width - 600
  hero.y = canvas.height - 105

  monster.x = (Math.random() * (canvas.width - 250))
  monster.y = (Math.random() * (canvas.height - 100))
};

let update = function (modifier) {
  if(32 in keysDown) {
    if(hero.upwardVelocity === 0) {
      hero.upwardVelocity = 5
    }
  }
  if (hero.upwardVelocity > 0) hero.upwardVelocity -= gravityDelta
  if (hero.upwardVelocity < 0) hero.upwardVelocity = 0
  hero.y += gravity + gravityDelta - hero.upwardVelocity
  gravityDelta *= 1.10

  console.log('FRAME', hero)

  if(hero.x >= canvas.width-hero.width) {
    hero.x = canvas.width-hero.width
  } else if(hero.x <= 0) {
    hero.y = 380
  }

  if(hero.y >= canvas.height- hero.height ) {
    hero.y = canvas.height -hero.height
    hero.jumping = false;
    gravityDelta = 0.1
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

  if(platformReady) {
  ctx.drawImage(platformImage, 0, 310)
  }

  if(platformReady1) {
    ctx.drawImage(platformImage1, platform.x, platform.y)
  }

  if(platformReady2) {
    ctx.drawImage(platformImage2, 140, 310)
  }

  if(platformReady3) {
    ctx.drawImage(platformImage3, 210, 310)
  }

  if(platformReady4) {
    ctx.drawImage(platformImage4, 280, 310)
  }

  if(platformReady5) {
    ctx.drawImage(platformImage5, 261, 240)
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
