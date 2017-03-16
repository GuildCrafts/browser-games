var tiles = document.getElementsByClassName("tile");
var state = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var game = true;
var visible = false;
var HUMAN = false;
var COMPUTER = true;
var HUMVAL = -1;
var COMVAL = 1;
var currentPlayer = HUMAN;
var winMatrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function reset() {
    for (var x = 0; x < 9; x++) {
        tiles[x].style.background = "#fff";
        tiles[x].innerHTML = "";
        state[x] = 0;
    }
    game = true;
}

function toggle() {
    for (var x = 0; x < 9; x++)
        tiles[x].style.fontSize = visible ? "0px" : "1.5vh";
    document.getElementById("toggle").innerHTML = visible ? "Show Values" : "Hide Values";
    visible = !visible;
}

function claim(clicked) {
    if (!game)
        return;
    for (var x = 0; x < 9; x++) {
        if (tiles[x] == clicked && state[x] == 0) {
            set(x, currentPlayer);
        }
    }
}

function set(index, player) {
    if (!game)
        return;
    if (state[index] == 0) {
        tiles[index].style.background = player == HUMAN ? "#BBDEFB": "#1976D2";
        state[index] = player == HUMAN ? HUMVAL : COMVAL;
        currentPlayer = !currentPlayer;
        aiTurn(state, 0, currentPlayer, false);
        if (checkWin(state, player) || checkFull(state)) {
            for (var x = 0; x < 9; x++)
                tiles[x].innerHTML = "";
            game = false;
        }
    }
}

function checkWin(board, player) {
    var value = player == HUMAN ? HUMVAL : COMVAL;
    for (var x = 0; x < 8; x++) {
        var win = true;
        for (var y = 0; y < 3; y++) {
            if (board[winMatrix[x][y]] != value) {
                win = false;
                break;
            }
        }
        if (win)
            return true;
    }
    return false;
}

function checkFull(board) {
    for (var x = 0; x < 9; x++)
        if (board[x] == 0)
            return false;
    return true;
}

function aiTurn(board, depth, player, turn) {
    if (checkWin(board, !player))
        return -10 + depth;
    if (checkFull(board))
        return 0;
    var value = player == HUMAN ? HUMVAL : COMVAL;
    var max = -Infinity;
    var index = 0;
    for (var x = 0; x < 9; x++) {
        if (depth == 0)
            tiles[x].innerHTML = "";
        if (board[x] == 0) {
            var newboard = board.slice();
            newboard[x] = value;
            var moveval = -aiTurn(newboard, depth + 1, !player, false);
            if (depth == 0)
                tiles[x].innerHTML = moveval;
            if (moveval > max) {
                max = moveval;
                index = x;
            }
        }
    }
    if (turn)
        set(index, player)
    return max;
}
