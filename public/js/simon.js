// function startGame() {
//
//   for(var i = 1; i <= 4; i++) {
//     clearBox(i);
//   }
//   setMessage("Let's Begin!")
// }
//
// function setMessage(msg) {
//   document.getElementById("message").innerText = msg;
// }

var game = {
  count: 0,
  possibilities: ['#green', '#blue', '#red', '#yellow'],
  currentGame: [],
  player: [],
  sound: {},
  strict: false,
}

function newGame() {
  clearGame();
}

function clearGame() {
  game.currentGame = [];
  game.count = 0;
  addCount();
}

function addCount() {
  game.count++;
  $('#clickNumber').addClass('animated fadeOutDown');

  setTimeout(function(){
    $('#clickNumber').removeClass('fadeOutDown').html(game.count).addClass('fadeInDown');
  }, 200);

  generateMove();
}

function generateMove(){
  game.currentGame.push(game.possibilities[(Math.floor(Math.random()*4))]);
  showMoves();
}

function showMoves() {
  var 1 = 0;
  var moves = setInterval(function(){
    playGame(game.currentGame[i]);
    i++;
    if (i >= game.currentGame.length) {
      clearInterval(moves);
    }
  }, 600)

  clearPlayer();
}

function playGame(field) {
  $(field).addClass('hover');
  sound(field);
  setTimeout(function(){
    $(field).removeClass('hover');
  }, 300);
}

function clearPlayer() {
  game.player = [];
}

function addToPlayer(id) {
  var field = "#" + id
  console.log(field);
  game.player.push(field);
  playerTurn(field);
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
      }
    }
  }
}
