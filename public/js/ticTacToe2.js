var gameboardArray = ["#","#","#","#","#","#","#","#","#"];
var gameHasWinner = false;
var player = "";
var computer = "";

function hideText(){
  var display = document.getElementById('0').style.display;
  if(display == "block"){
    document.getElementById('0').style.display = "none";
  } else {
    document.getElementById('0').style.display = "block"
  }
}

function setPlayerXorO(){
  player = prompt("Would you like to be an X or and O");
  if(player === "X"){
    computer = "O";
  } else {
    computer = "X";
  }
}

function playerTurn(){

}

function computerTurn(){

}

function updateArray(){

}

function declareDraw(){

}

function checkWinner(winCondition){
  for(var i = 0; i < gameboardArray.length; i++){
    if(winCondition){
      gameHasWinner = true;
    } else {
      gamehasWinner = false;
    }
  }
}

function declareDraw(){
  
}

// Refactor into a winCondition function that takes the index values as possibilities and passes them in to check.
var winCondition1 = gameboardArray[0] && gameboardArray[1] && gameboardArray[2] === "X" || "O";
var winCondition2 = gameboardArray[3] && gameboardArray[4] && gameboardArray[5] === "X" || "O"
var winCondition3 = gameboardArray[6] && gameboardArray[7] && gameboardArray[8] === "X" || "O"
var winCondition4 = gameboardArray[0] && gameboardArray[3] && gameboardArray[6] === "X" || "O"
var winCondition5 = gameboardArray[1] && gameboardArray[4] && gameboardArray[7] === "X" || "O"
var winCondition6 = gameboardArray[2] && gameboardArray[5] && gameboardArray[8] === "X" || "O"
var winCondition7 = gameboardArray[0] && gameboardArray[4] && gameboardArray[8] === "X" || "O"
var winCondition8 = gameboardArray[2] && gameboardArray[4] && gameboardArray[6] === "X" || "O"
