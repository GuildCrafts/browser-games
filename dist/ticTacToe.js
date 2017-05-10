"use strict";

var startGame = function startGame() {
    document.turn = "X";
};

var nextMove = function nextMove(Square) {
    square.innerText = document.turn;
    switchTurn();
};

var switchTurn = function switchTurn() {
    if (document.turn == "X") {
        document.turn = "0";
    } else {
        document.turn = "X";
    }
};