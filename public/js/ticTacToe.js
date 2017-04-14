let player1 = '',
  player2 = '',
  currentPlayer = '',
  player1Count = 0,
  player2Count = 0,
  boxes = {},
  start = false

function Users() {
  start = true
  playerValue = prompt("Would you like to play X or O?").toLowerCase();
  if(playerValue != "" || playerValue != " ") {
    if(playerValue === 'x') {
      player1 = 'X',
      currentPlayer = player1,
      player2 = 'O'
      document.getElementById('player1').innerHTML = 'Player 1: ' + player1
      document.getElementById('player2').innerHTML = 'Player 2: ' + player2
    } else if(playerValue === 'o') {
      player1 = 'O',
      currentPlayer = player1,
      player2 = 'X',
      game = true;

      document.getElementById('player1').innerHTML = 'Player 1: ' + player1
      document.getElementById('player2').innerHTML = 'Player 2: ' + player2
    }
  } else {
    start = false
  }
}

function playerTurn(selected) {
  if(start) {
    if(boxes[selected]) {
      alert('This box is already selected!')
    } else {
      if(player1Count === player2Count) {
        currentPlayer = player1
        document.getElementById(selected).innerHTML = currentPlayer;
        boxes[selected] = currentPlayer
        player1Count++
        if(player1Count >= 3 && currentPlayer === "O") {
          determineWinForO()
        } else if(player1Count >= 3 && currentPlayer === "X") {
          determineWinForX()
        }
      } else if(player1Count > player2Count) {
        currentPlayer = player2
        document.getElementById(selected).innerHTML = currentPlayer;
        boxes[selected] = currentPlayer
        player2Count++
      }
    }
  } else {
    Users()
  }
}

function determineWinForO() {
  if(boxes[3] === "O" && boxes[6] === "O" && boxes[9] === "O") {
    alert('congratulations, O, is the winner!')
    let elements = document.getElementsByClassName('square');
    for ( i = 0; i < elements.length; i++) {
      elements[i].innerHTML = "";
    }

    boxes = {},
    start = false,
    player1 = '',
    player2 = '',
    currentPlayer = '',
    player1Count = 0,
    player2Count = 0

  } else if(boxes[2] === "O" && boxes[5] === "O" && boxes[8] === "O") {
    alert('congratulations, O, is the winner!')
    let elements = document.getElementsByClassName('square');
    for ( i = 0; i < elements.length; i++) {
      elements[i].innerHTML = "";
    }

    boxes = {},
    start = false,
    player1 = '',
    player2 = '',
    currentPlayer = '',
    player1Count = 0,
    player2Count = 0

  } else if(boxes[1] === "O" && boxes[4] === "O" && boxes[7] === "O") {
    alert('congratulations, O, is the winner!')
    let elements = document.getElementsByClassName('square');
    for ( i = 0; i < elements.length; i++) {
      elements[i].innerHTML = "";
    }

    boxes = {},
    start = false,
    player1 = '',
    player2 = '',
    currentPlayer = '',
    player1Count = 0,
    player2Count = 0

  } else if(boxes[1] === "O" && boxes[2] === "O" && boxes[3] === "O") {
    alert('congratulations, O, is the winner!')
    let elements = document.getElementsByClassName('square');
    for ( i = 0; i < elements.length; i++) {
      elements[i].innerHTML = "";
    }

    boxes = {},
    start = false,
    player1 = '',
    player2 = '',
    currentPlayer = '',
    player1Count = 0,
    player2Count = 0

  } else if(boxes[4] === "O" && boxes[5] === "O" && boxes[6] === "O") {
    alert('congratulations, O, is the winner!')
    let elements = document.getElementsByClassName('square');
    for ( i = 0; i < elements.length; i++) {
      elements[i].innerHTML = "";
    }

    boxes = {},
    start = false,
    player1 = '',
    player2 = '',
    currentPlayer = '',
    player1Count = 0,
    player2Count = 0

  } else if(boxes[7] === "O" && boxes[8] === "O" && boxes[9] === "O") {
    alert('congratulations, O, is the winner!')
    let elements = document.getElementsByClassName('square');
    for ( i = 0; i < elements.length; i++) {
      elements[i].innerHTML = "";
    }

    boxes = {},
    start = false,
    player1 = '',
    player2 = '',
    currentPlayer = '',
    player1Count = 0,
    player2Count = 0

  } else if(boxes[3] === "O" && boxes[5] === "O" && boxes[7] === "O") {
    alert('congratulations, O, is the winner!')
    let elements = document.getElementsByClassName('square');
    for ( i = 0; i < elements.length; i++) {
      elements[i].innerHTML = "";
    }

    boxes = {},
    start = false,
    player1 = '',
    player2 = '',
    currentPlayer = '',
    player1Count = 0,
    player2Count = 0
  } else if(boxes[1] === "O" && boxes[5] === "O" && boxes[9] === "O") {
    alert('congratulations, O, is the winner!')
    let elements = document.getElementsByClassName('square');
    for ( i = 0; i < elements.length; i++) {
      elements[i].innerHTML = "";
    }

    boxes = {},
    start = false,
    player1 = '',
    player2 = '',
    currentPlayer = '',
    player1Count = 0,
    player2Count = 0
  }
}

function determineWinForX() {
  if(boxes[3] === "X" && boxes[6] === "X" && boxes[9] === "X") {
    alert('congratulations, X, is the winner!')
    let elements = document.getElementsByClassName('square');
    for ( i = 0; i < elements.length; i++) {
      elements[i].innerHTML = "";
    }

    boxes = {},
    start = false,
    player1 = '',
    player2 = '',
    currentPlayer = '',
    player1Count = 0,
    player2Count = 0

  } else if(boxes[2] === "X" && boxes[5] === "X" && boxes[8] === "X") {
    alert('congratulations, X, is the winner!')
    let elements = document.getElementsByClassName('square');
    for ( i = 0; i < elements.length; i++) {
      elements[i].innerHTML = "";
    }

    boxes = {},
    start = false,
    player1 = '',
    player2 = '',
    currentPlayer = '',
    player1Count = 0,
    player2Count = 0

  } else if(boxes[1] === "X" && boxes[4] === "X" && boxes[7] === "X") {
    alert('congratulations, X, is the winner!')
    let elements = document.getElementsByClassName('square');
    for ( i = 0; i < elements.length; i++) {
      elements[i].innerHTML = "";
    }

    boxes = {},
    start = false,
    player1 = '',
    player2 = '',
    currentPlayer = '',
    player1Count = 0,
    player2Count = 0

  } else if(boxes[1] === "X" && boxes[2] === "X" && boxes[3] === "X") {
    alert('congratulations, X, is the winner!')
    let elements = document.getElementsByClassName('square');
    for ( i = 0; i < elements.length; i++) {
      elements[i].innerHTML = "";
    }

    boxes = {},
    start = false,
    player1 = '',
    player2 = '',
    currentPlayer = '',
    player1Count = 0,
    player2Count = 0

  } else if(boxes[4] === "X" && boxes[5] === "X" && boxes[6] === "X") {
    alert('congratulations, X, is the winner!')
    let elements = document.getElementsByClassName('square');
    for ( i = 0; i < elements.length; i++) {
      elements[i].innerHTML = "";
    }

    boxes = {},
    start = false,
    player1 = '',
    player2 = '',
    currentPlayer = '',
    player1Count = 0,
    player2Count = 0

  } else if(boxes[7] === "X" && boxes[8] === "X" && boxes[9] === "X") {
    alert('congratulations, X, is the winner!')
    let elements = document.getElementsByClassName('square');
    for ( i = 0; i < elements.length; i++) {
      elements[i].innerHTML = "";
    }

    boxes = {},
    start = false,
    player1 = '',
    player2 = '',
    currentPlayer = '',
    player1Count = 0,
    player2Count = 0

  } else if(boxes[3] === "X" && boxes[5] === "X" && boxes[7] === "X") {
    alert('congratulations, X, is the winner!')
    let elements = document.getElementsByClassName('square');
    for ( i = 0; i < elements.length; i++) {
      elements[i].innerHTML = "";
    }

    boxes = {},
    start = false,
    player1 = '',
    player2 = '',
    currentPlayer = '',
    player1Count = 0,
    player2Count = 0

  } else if(boxes[1] === "X" && boxes[5] === "X" && boxes[9] === "X") {
    alert('congratulations, X, is the winner!')
    let elements = document.getElementsByClassName('square');
    for ( i = 0; i < elements.length; i++) {
      elements[i].innerHTML = "";
    }

    boxes = {},
    start = false,
    player1 = '',
    player2 = '',
    currentPlayer = '',
    player1Count = 0,
    player2Count = 0

  }
}
