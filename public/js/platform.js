//
//===========SPRITES=============
//

function Hero(game, x, y) {
  Phaser.Sprite.call(this, game, x, y, 'hero');
  this.anchor.set(0.5, 0.5);
  this.game.physics.enable(this); //physics
  this.body.collideWorldBounds = true;
  this.animations.add('stop', [0]);
  this.animations.add('run', [1, 2, 3], 6, true);

};
Hero.prototype = Object.create(Phaser.Sprite.prototype); //inherit
Hero.prototype.constructor = Hero;

Hero.prototype.move = function (direction) {
  const SPEED = 200;
  this.body.velocity.x = direction * SPEED;
  if (this.body.velocity.x < 0) {
    this.scale.x = -1;
  } else if (this.body.velocity.x > 0) {
    this.scale.x = 1;
  }
};

Hero.prototype.jump = function () {
  const JUMP_SPEED = 600;
  let canJump = this.body.touching.down; // can only jump if touching down on a platform
  if (canJump) {
    this.body.velocity.y = -JUMP_SPEED;
  }
  return canJump;
};

Hero.prototype._getAnimationName = function() {
  let name = 'stop';
  if (this.body.velocity.x !==0 && this.body.touching.down){
    name = 'run';
  }
  return name;
};

Hero.prototype.bounce = function () {
    const BOUNCE_SPEED = 200;
    this.body.velocity.y = -BOUNCE_SPEED;
};
Hero.prototype.update = function () {
    let animationName = this._getAnimationName();
    if (this.animations.name !== animationName) {
        this.animations.play(animationName);
    }
};

function Spider(game, x, y) {
  Phaser.Sprite.call(this, game, x, y, 'spider')
  this.anchor.set(0.5);
  this.animations.add('crawl', [0, 1, 2, 3], 8, true);
  this.animations.add('die', [1, 2, 3, 2, 4, 4, 5, 5, 6, 6, 7, 7], 12);
  this.animations.play('crawl');
  this.game.physics.enable(this);
  this.body.collideWorldBounds = true;
  this.body.velocity.x = Spider.SPEED;
}
Spider.SPEED = 100;

Spider.prototype = Object.create(Phaser.Sprite.prototype);

Spider.prototype.constructor = Spider;

Spider.prototype.die = function () {
  this.body.enable = false;
  this.animations.play('die').onComplete.addOnce(function () {
    this.kill();
  }, this);
};

//
//============PLAY STATE===============
//

PlayState = {};

PlayState.init = function () { // runs before preload
  this.game.renderer.renderSession.roundPixels = true;
  this.keys = this.game.input.keyboard.addKeys({
    left: Phaser.KeyCode.LEFT,
    right: Phaser.KeyCode.RIGHT,
    up: Phaser.KeyCode.UP,
  });
  this.keys.up.onDown.add(function () {
    let didJump = this.hero.jump();
  }, this);
};

PlayState.preload = function () { // loads images/sounds
  this.game.load.json('level:1', 'data/level01.json');
  this.game.load.image('background', 'images/background.png');
  this.game.load.image('ground', 'images/metalground.png');
  this.game.load.image('grass:8x1', 'images/metal_8x1.png');
  this.game.load.image('grass:6x1', 'images/metal_6x1.png');
  this.game.load.image('grass:4x1', 'images/metal_4x1.png');
  this.game.load.image('grass:2x1', 'images/metal_2x1.png');
  this.game.load.image('grass:1x1', 'images/metal_1x1.png');
  this.game.load.spritesheet('hero', 'images/hero.png', 55, 70);
  this.game.load.spritesheet('coin', 'images/coin.png', 55, 70);
  this.game.load.spritesheet('spider', 'images/red.png', 70, 70, 8);
  this.game.load.image('invisible-wall', 'images/invisible_wall.png')
};

PlayState.create = function () {
  this.game.add.image(0, 0, 'background');
  this._loadLevel(this.game.cache.getJSON('level:1'));
};

PlayState.update = function () { // runs 60 times a second 60fps
  this._handleCollisions();
  this._handleInput();
};

PlayState._handleCollisions = function () { // handles interation with platforms
  this.game.physics.arcade.collide(this.spiders, this.platforms);
  this.game.physics.arcade.collide(this.spiders, this.enemyWalls);
  this.game.physics.arcade.collide(this.hero, this.platforms);
  this.game.physics.arcade.overlap(this.hero, this.coins, this._onHeroVsCoin,
    null, this);
  this.game.physics.arcade.overlap(this.hero, this.spiders,
    this._onHeroVsEnemy, null, this);
};

PlayState._handleInput = function () {
  if (this.keys.left.isDown) {
    this.hero.move(-1); // to the left, to the left
  } else if (this.keys.right.isDown) {
    this.hero.move(1); // to the right
  } else {
    this.hero.move(0); // stahp
  }
};

PlayState._loadLevel = function (data) {
  this.platforms = this.game.add.group();
  this.coins = this.game.add.group();
  this.spiders = this.game.add.group();
  this.enemyWalls = this.game.add.group();
  this.enemyWalls.visible = false;
  data.platforms.forEach(this._spawnPlatform, this);
  this._spawnCharacters({
    hero: data.hero,
    spiders: data.spiders
  });
  data.coins.forEach(this._spawnCoin, this);
  const GRAVITY = 1200;
  this.game.physics.arcade.gravity.y = GRAVITY;
};

PlayState._spawnPlatform = function (platform) {
  let sprite = this.platforms.create(
    platform.x, platform.y, platform.image);
  this.game.physics.enable(sprite);
  sprite.body.allowGravity = false;
  sprite.body.immovable = true;
  this._spawnEnemyWall(platform.x, platform.y, 'left');
  this._spawnEnemyWall(platform.x + sprite.width, platform.y, 'right');
};

PlayState._spawnCharacters = function (data) {
  data.spiders.forEach(function (spider) {
    let sprite = new Spider(this.game, spider.x, spider.y);
    this.spiders.add(sprite);
  }, this);
  this.hero = new Hero(this.game, data.hero.x, data.hero.y); // spawn hero
  this.game.add.existing(this.hero);
};

PlayState._spawnCoin = function (coin) {
  let sprite = this.coins.create(coin.x, coin.y, 'coin');
  sprite.anchor.set(0.7, 0.7);
  //   make the lightsaber wobble
  this.game.physics.enable(sprite);
  sprite.body.allowGravity = false;
};

PlayState._onHeroVsCoin = function (hero, coin) {
  coin.kill();
};

PlayState._spawnEnemyWall = function (x, y, side) {
  let sprite = this.enemyWalls.create(x, y, 'invisible-wall');
  sprite.anchor.set(side === 'left' ? 1 : 0, 1);
  this.game.physics.enable(sprite);
  sprite.body.immovable = true;
  sprite.body.allowGravity = false;
};

Spider.prototype.update = function () {
  if (this.body.touching.right || this.body.blocked.right) {
    this.body.velocity.x = -Spider.SPEED; // turn left
  } else if (this.body.touching.left || this.body.blocked.left) {
    this.body.velocity.x = Spider.SPEED; // turn right
  }
};

PlayState._onHeroVsEnemy = function (hero, enemy) {
  if (hero.body.velocity.y > 0) { // kill enemies when hero is falling
    hero.bounce();
    enemy.die();
  } else { // game over -> restart the game
    this.game.state.restart();
  }
};

//
//============ENTRY POINT===============
//

window.onload = function () {
  let game = new Phaser.Game(960, 600, Phaser.AUTO, 'game'); // canvas area
  game.state.add('play', PlayState);
  game.state.start('play');
};
