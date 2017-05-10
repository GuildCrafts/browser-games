const startGame = () => {
    document.turn = 'X'
    setMessage(document.turn + ' ready, set, GO!')
}

const setMessage = (msg) => {
    document.getElementByID('message').innerText = (msg)
}

const nextMove = (square) => {
    if(square.innerText === '') {
        square.innerText = document.turn
        switchTurn()
    } else {
        setMessage('Um, you see me here already! Pick another square foo.')
    }
}

const switchTurn = () => {
    if(document.turn == 'X') {
        document.turn = '0'
    } else {
        document.turn = 'X'
      }
    setMessage('')
}
