//initialize phaser framework and create board
var flappy = new Phaser.Game(400, 499)
//creates the main state for the game
var mainState = {
  preload: function() {
    flappy.load.image('bird', 'img/bird.png')
    flappy.load.image('pipe', 'img/pipe.png')
    flappy.load.audio('jump', 'sounds/jump.wav')
  },
  create: function() {
    flappy.stage.backgroundColor = '#B22222'
    //start arcade physics
    flappy.physics.startSystem(Phaser.Physics.Arcade)
    //adds physics to all game objects
    flappy.world.enableBody = true
    //sets game physics
    flappy.physics.startSystem(Phaser.Physics.ARCADE)
    //displays the bird at x/y starting points
    this.bird = flappy.add.sprite(100, 245, 'bird')
    //add movement to bird
    flappy.physics.arcade.enable(this.bird)
    //create empty group
    this.pipes = flappy.add.group()
    this.bird.body.gravity.y = 1000
    //makes bird able to fall
    var spaceBar = flappy.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
    spaceBar.onDown.add(this.jump, this)
    this.timer = flappy.time.events.loop(1500, this.addRowOfPipes, this)
    this.score = 0
    this.labelScore = flappy.add.text(20, 20, '0', {
      font: '30px Arial', fill: '#FFD700'
    })
    //move anchor left and downward
    this.bird.anchor.setTo(-0.2, 0.5)
    this.jumpSound = flappy.add.audio('jump')
  },
  addOnePipe: function(x,y) {
    //create pipe
    var pipe = flappy.add.sprite(x,y, 'pipe')
    //add pipe to group
    this.pipes.add(pipe)
    flappy.physics.arcade.enable(pipe)
    pipe.body.velocity.x = -200
    pipe.checkWorldBounds = true
    pipe.outOfBoundsKill = true
  },
  addRowOfPipes: function() {
    var hole = Math.floor(Math.random() * 6) + 1
    for (var i = 0; i < 8; i++)
      if(i != hole && i != hole + 1)
        this.addOnePipe(400, i * 60 + 1)
    //increase score when pass pipes
    this.score += 1
    this.labelScore.text = this.score
  },
  hitPipe: function() {
    //bird hit pipe do nithing
    if (this.bird.alive == false)
      return;
    this.bird.alive = false
    flappy.time.events.remove(this.timer)
    this.pipes.forEach(function(p){
      p.body.velocity.x = 0
    }, this)
  },
  update: function() {
    //when the bird goes off the screen the game will reset
    if(this.bird.y < 0 || this.bird.y > 490)
      this.restartGame()
    //restart game on collision
    flappy.physics.arcade.overlap(this.bird, this.pipes, this.hitPipe, null, this)
    //rotates bird
    if (this.bird.angle < 20)
      this.bird.angle += 1
  },
  jump: function() {
    var animation = flappy.add.tween(this.bird).to({angle: -20}, 100).start
    //stops dead bird from jumping
    if (this.bird.alive === false)
      return;
    //adds vertical velocity to bird
    this.bird.body.velocity.y = -350
    this.jumpSound.play()
  },
  restartGame: function() {
    //start game over
    flappy.state.start('main')
  }
}
//add the mainState and call it
flappy.state.add('main', mainState)
//makes mainState start the game
flappy.state.start('main')
