var game = {
  count: 0,
  possibilities: ['#green', '#blue', '#red', '#yellow'],
  currentGame: [],
  player: [],
  sound: {
    blue: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
    red: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
    yellow: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
    green: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
    }
  }

function newGame() {
  clearGame();
  console.log("New Game");
}

function clearGame() {
  game.currentGame = [];
  game.count = 0;
  addCount();
  console.log("Game Clear");
}

function addCount() {
  game.count++;
  $('#clickNumber').addClass('animated fadeOutDown');

  setTimeout(function(){
    $('#clickNumber').removeClass('fadeOutDown').html(game.count).addClass('fadeInDown');
  }, 2000);

  generateMove();
  console.log("Move Generated");
}

function generateMove(){
  game.currentGame.push(game.possibilities[(Math.floor(Math.random()*4))]);
  showMoves();
  console.log("Move Shown");
}

function sound() {
  let colorSound = document.querySelector('.gamebutton').id;
  console.log('Make A Sound');
  game.sound[colorSound].play()
  setTimeout( game.sound[colorSound].pause(), 1000 )
}

function showMoves() {
  var i = 0;
  var moves = setInterval(function(){
    playGame(game.currentGame[i]);
    i++;
    if (i >= game.currentGame.length) {
      clearInterval(moves);
    }
    let colorGlow = document.querySelector('.gamebutton').id;
    game.showMoves[colorGlow].pulsate(), 1000
  }, 2000)

  clearPlayer();
  console.log("Already Done");
}

function playGame(field) {
  $(field).addClass('hover');
  // game.sound(field);
  setTimeout(function(){
    $(field).removeClass('hover');
  }, 3000);
  console.log("Play Dammit");
}

function clearPlayer() {
  game.player = [];
  console.log("Player Clear");
}

function nextLevel() {
  if (game.player.length === game.currentGame.length) {
    generateMove(game.currentGame.length + 1);
  }
}

function addToPlayer(id) {
  var field = "#" + id
  console.log(field);
  game.player.push(field);
  playerTurn(field);
  console.log("Player Added");
}

function playerTurn(x) {
  if (game.player[game.player.length - 1] !== game.currentGame[game.player.length - 1]) {
    if(game.strict){
      alert('Try again! ...From scratch!');
      newGame();
    } else {
      console.log('Good Move!');
      sound(x);
      var check = game.player.length === game.currentGame.length;
      if (check) {
        alert('You won! Congrats.');
      } else {
        alert('Next round!');
        nextLevel();
        console.log("Let's Keep It Going");
      }
    }
  }
}
