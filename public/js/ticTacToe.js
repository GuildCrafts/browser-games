console.log("Just checking the connection!");

function startGame() {

  for(var i = 1; i <= 9; i++) {
    clearBox(i);
  }

  document.turn = "X";
  document.winner = null;
  setMessage(document.turn + " get's to start.")
}

function setMessage(msg) {
  document.getElementById("message").innerText = msg;
}

function nextMove(square) {
  if(document.winner != null) {
    setMessage(document.turn + " already won!")
  } else if(square.innerText == '') {
  square.innerText = document.turn;
  switchTurn();
} else {
  setMessage("Pick an empty square!")
}
}

function switchTurn() {
  if(checkForWinner(document.turn)) {
    setMessage("Congrats " + document.turn + ", you won!")
    document.winner = document.turn;
  } else if (document.turn = "X") {
    document.turn = "O";
  }
  if(document.turn == "X") {
    document.turn = "O";
  } else {
    document.turn = "X";
    setMessage("It's " + document.turn + "'s turn.")
  }
}

function checkForWinner(move) {
  var result = false;
  if(checkRow(1, 2, 3, move) ||
  if(checkRow(4, 5, 6, move) ||
  if(checkRow(7, 8, 9, move) ||
  if(checkRow(1, 4, 7, move) ||
  if(checkRow(2, 5, 8, move) ||
  if(checkRow(3, 6, 9, move) ||
  if(checkRow(1, 5, 9, move) ||
  if(checkRow(3, 5, 7, move)) {
    result = true;

  }
  return result;
}

function chechRow(a, b, c, move) {
  var result = false;
  if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
    result = true;
  }
  return result;
}

function getBox(number) {
  return document.getElementById("s" + number).innerText;
}

function clearBox(number) {
  document.getElementById("s" + number).innerText = "";
}
