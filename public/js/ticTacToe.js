const startGame = () => {
    for(let i = 1; i <= 9; i++) {
        clearBox(i)
    }

    document.turn = 'X'
    document.winner = null
    setMessage(document.turn + ' ready, set, GO!')
}

const setMessage = (msg) => {
    document.getElementById('message').innerText = (msg)
}

const nextMove = (square) => {
    if(document.winner != null) {
        setMessage(document.turn + ', you already won foo!')
    } else if(square.innerText == '') {
       square.innerText = document.turn
       switchTurn()
    }  else {
         setMessage('Um, you see me here already! Pick another square foo.')
       }
}

const switchTurn = () => {
    if(checkForWinner(document.turn)) {
        setMessage('Winner Winner Chicken Dinner! Congrats ' + document.turn)
        document.winner = document.turn
    } else if(document.turn == 'X') {
        document.turn = '0'
        setMessage("It\'s " + document.turn + "'s turn.")

    } else {
        document.turn = 'X'
        setMessage("It\'s " + document.turn + "'s turn.")
      }
}

const checkForWinner = (move) => {
    let result = false
    if(checkRow(1, 2, 3, move) ||
       checkRow(4, 5, 6, move) ||
       checkRow(7, 8, 9, move) ||
       checkRow(1, 4, 7, move) ||
       checkRow(2, 5, 8, move) ||
       checkRow(3, 6, 9, move) ||
       checkRow(1, 5, 9, move) ||
       checkRow(3, 5, 7, move)) {
        result = true
    }
    return result
}

const checkRow = (a, b, c, move) => {
    let result = false
    if(getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        result = true
    }
    return result
}

const getBox = (number) => {
    return document.getElementById('s' + number).innerText
}

const clearBox = (number) => {
    document.getElementById('s' + number).innerText = ''
}
