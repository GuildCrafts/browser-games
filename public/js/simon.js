function fetchBoard() {
    "use strict";
    var board;
    board = ['', '', '', '', '', '', '', '', ''];
    $("#tictac td").each(function(index) {
        board[index] = $(this).text();
    });
    return board;
}

// returns 1 if all three parameters are the string 'X', -1 if all
// are 'O', and 0 otherwise.
function checkRow(a, b, c) {
    "use strict";
    if (a === 'X' && b === 'X' && c === 'X') {
        return 1;
    } else if (a === 'O' && b === 'O' && c === 'O') {
        return -1;
    } else {
        return 0;
    }
}

// returns a positive number if board has 'X' winning, a negative number
// if board has 'O' winning, and 0 otherwise
function checkWin(board) {
    "use strict";
    return checkRow(board[0], board[1], board[2]) // rows
        +
        checkRow(board[3], board[4], board[5]) +
        checkRow(board[6], board[7], board[8]) +
        checkRow(board[0], board[3], board[6]) // columns
        +
        checkRow(board[1], board[4], board[7]) +
        checkRow(board[2], board[5], board[8]) +
        checkRow(board[0], board[4], board[8]) // main diagonal
        +
        checkRow(board[2], board[4], board[6]); // reverse diagonal
}

// returns a randomly selected empty square, or -1 if all squares are full
function selectMove(board) {
    "use strict";
    var i, options;
    options = [];
    for (i = 0; i < 9; i += 1) {
        if (board[i] === '') {
            options.push(i);
        }
    }

    if (options.length === 0) {
        return -1;
    } else {
        return options[Math.floor(Math.random() * options.length)];
    }
}

function showGameOver(result) {
    "use strict";
    var target;
    target = $("#result");
    if (result > 0) {
        target.css('color', '#800');
        target.text("You win!");
    } else if (result < 0) {
        target.css('color', '#008');
        target.text("I win!");
    } else {
        target.css('color', '#505');
        target.text("Tie game.");
    }
}

function resetGame() {
    "use strict";
    var target;

    $("#tictac td").text('');
    target = $("#result");
    target.css('color', '#000');
    target.text('Click a square');
}

function moveAt() {
    "use strict";
    var xCell, board, result, oLocation, oCell;

    xCell = $(this);

    // return if square is already full or if game is over
    if (xCell.text() !== '' || checkWin(fetchBoard()) !== 0) {
        return;
    }

    // place 'X' at selected location
    xCell.css('color', '#800');
    xCell.text('X');

    // if game is over, display message
    board = fetchBoard();
    result = checkWin(board);
    if (result !== 0) {
        showGameOver(result);
        return;
    }

    // find where to place the 'O'
    oLocation = selectMove(board);
    if (oLocation < 0) {
        // if there is no valid place, it is tie game
        showGameOver(0);
        return;
    }

    // place 'O' at location
    board[oLocation] = 'O';
    oCell = $("#cell" + oLocation);
    oCell.css('color', '#008');
    oCell.text('O');

    // if game is over, display that
    result = checkWin(board);
    if (result !== 0) {
        showGameOver(result);
        return;
    }
}

$(document).ready(function() {
    "use strict";

    $("#tictac td").click(moveAt);
    $("#tictacreset").click(resetGame);
    resetGame();
});