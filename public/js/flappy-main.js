//initialize phaser framework and create board
const flappy = new Phaser.Game(400, 499)
//creates the main state for the game
const mainState = {
  preload: function() {
    flappy.load.image('bird', 'img/bird.png')
    flappy.load.image('pipe', 'img/pipe.png')
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
    const spaceBar = flappy.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
    spaceBar.onDown.add(this.jump, this)
    // this.pipes = flappy.add.group()
    this.timer = flappy.time.events.loop(1500, this.addRowOfPipes, this)
    this.score = 0
    this.labelScore = flappy.add.text(20, 20, '0', {
      font: '30px Arial', fill: '#FFD700'
    })
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
    const hole = Math.floor(Math.random() * 5) + 1
    for (var i = 0; i < 8; i++)
      if(i != hole && i != hole + 1)
        this.addOnePipe(400, i * 60 + 1)
    //increase score when pass pipes
    this.score += 1
    this.labelScore.text = this.score
  },
  update: function() {
    //when the bird goes off the screen the game will reset
    if(this.bird.y < 0 || this.bird.y > 490)
      this.restartGame()
    //restart game on collision
    flappy.physics.arcade.overlap(this.bird, this.pipe, this.restartGame, null, this)
    //rotates bird
    if (this.bird.angle < 20)
      this.bird.angle += 1
  },
  jump: function() {
    const animation = flappy.add.tween(this.bird)
    //adds vertical velocity to bird
    this.bird.body.velocity.y = -350

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
