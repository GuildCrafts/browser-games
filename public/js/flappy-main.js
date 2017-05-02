//creates the main state for the game
const mainState = {
  preload: function() {
    flappy.load.image('bird', 'public/bird.png')

  },
  create: function() {
    flappy.stage.backgroundColor = '#20B2AA'
    //sets game physics
    game.physics.startSystem(phaser.Physics.ARCADE)
    //displays the bird at x/y starting points
    this.bird = flappy.add.sprite(100, 245, 'bird')
    //add movement to bird
    game.physics.arcade.enable(this.bird)
    //makes bird able to fall
    const spaceBar = flappy.input.keyboard.addKey(PHASER.Keyboard.SPACEBAR)
    spaceBar.onDown.add(this.jump, this)


  },
  update: function() {
    //when the bird goes off the screen the game will reset
    if(this.bird.y < 0 || this.bird.y > 490)
    this.restartGame()
  },
  jump: function() {
    //adds vertical velocity to bird
    this.bird.body.velocity.y = -350
  },
  restartGame: function() {
    //start game over
    flappy.state.start('main')
  }
}

//initialize phaser framework and create board
const flappy = new Phaser.Flappy(400, 499)
//add the mainState and call it main
flappy.state.add('main', mainState)
//makes mainState start the game
flappy.state.start('main')
