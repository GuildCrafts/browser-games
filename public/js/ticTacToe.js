var button = []
for(var i = 1; i < 10; i++) {
  button[i] = document.getElementById('canvas'+ i)
}

var canvasContext = []
for(var i = 1; i < 10; i++) {
  canvasContext[i] = button[i].getContext('2d')
}

var buttonDisabled = []
for(var i = 1; i < 10; i++) {
  buttonDisabled[i] = false
}

var isGameOver = false
var btnContent = []
var isComputerTurn = false


function loop(currentButton) { //Need help giving this function a better name
  if (isGameOver || isComputerTurn) return
  if(!buttonDisabled[currentButton]) {
    buttonDisabled[currentButton] = true
    button[currentButton].style.opacity = 0.7
    btnContent[currentButton] = 'x'

    button[currentButton].style.Transform = 'rotateY(180deg)'
    button[currentButton].style.webkitTransform = 'rotateY(180deg)'
    button[currentButton].style.mozTransform = 'rotateY(180deg)'
    button[currentButton].style.msTransform = 'rotateY(180deg)'
    button[currentButton].style.oTransform = 'rotateY(180deg)'

    isComputerTurn = true
    checkWinner()

    setTimeout(function(){
      canvasContext[currentButton].lineWidth = 3
      canvasContext[currentButton].beginPath()
      canvasContext[currentButton].moveTo(10,10)
      canvasContext[currentButton].lineTo(90,90)
      canvasContext[currentButton].moveTo(90,10)
      canvasContext[currentButton].lineTo(10,90)
      canvasContext[currentButton].stroke()
      canvasContext[currentButton].closePath()

      computerTurn()
    }, 300)
  }
}

function computerTurn() {
  if(isGameOver) return
  var random = Math.random()

  if(random < 0.1 && !buttonDisabled[1]) {
    draw0(1)
  } else if(random < 0.2 && !buttonDisabled[2]) {
    draw0(2)
  } else if(random < 0.3 && !buttonDisabled[3]) {
    draw0(3)
  } else if(random < 0.4 && !buttonDisabled[4]) {
      draw0(4)
  } else if(random < 0.5 && !buttonDisabled[5]) {
      draw0(5)
  } else if(random < 0.6 && !buttonDisabled[6]) {
      draw0(6)
  } else if(random < 0.7 && !buttonDisabled[7]) {
      draw0(7)
  } else if(random < 0.8 && !buttonDisabled[8]) {
      draw0(8)
  } else if(random < 1 && !buttonDisabled[9]) {
      draw0(9)
  }
  checkWinner()
}

function draw0(x) {
  buttonDisabled[x] = true
  button[x].style.opacity = 0.7
  btnContent[x] = '0'
  button[x].style.webkitTransform = "rotateX(180deg)"

  setTimeout(function(){
    canvasContext[x].beginPath()
    canvasContext[x].lineWidth = 3
    canvasContext[x].arc(50,50,34,0,Math.PI*2,false)
    canvasContext[x].stroke()
    canvasContext[x].closePath()
    isComputerTurn = false
  }, 300)
}

function checkWinner(){
  if(!isGameOver){
    if(btnContent[1] == 'x' && btnContent[2] == 'x' && btnContent[3] == 'x') showWinner('You won!')
    else if(btnContent[4] == 'x' && btnContent[5] == 'x' && btnContent[6] == 'x') showWinner('You won!')
    else if(btnContent[7] == 'x' && btnContent[8] == 'x' && btnContent[9] == 'x') showWinner('You won!')
    else if(btnContent[1] == 'x' && btnContent[4] == 'x' && btnContent[7] == 'x') showWinner('You won!')
    else if(btnContent[2] == 'x' && btnContent[5] == 'x' && btnContent[8] == 'x') showWinner('You won!')
    else if(btnContent[3] == 'x' && btnContent[6] == 'x' && btnContent[9] == 'x') showWinner('You won!')
    else if(btnContent[1] == 'x' && btnContent[5] == 'x' && btnContent[9] == 'x') showWinner('You won!')
    else if(btnContent[3] == 'x' && btnContent[5] == 'x' && btnContent[7] == 'x') showWinner('You won!')

    else if(btnContent[1] == '0' && btnContent[2] == '0' && btnContent[3] == '0') showWinner('You lost!')
    else if(btnContent[4] == '0' && btnContent[5] == '0' && btnContent[6] == '0') showWinner('You lost!')
    else if(btnContent[7] == '0' && btnContent[8] == '0' && btnContent[9] == '0') showWinner('You lost!')
    else if(btnContent[1] == '0' && btnContent[4] == '0' && btnContent[7] == '0') showWinner('You lost!')
    else if(btnContent[2] == '0' && btnContent[5] == '0' && btnContent[8] == '0') showWinner('You lost!')
    else if(btnContent[3] == '0' && btnContent[6] == '0' && btnContent[9] == '0') showWinner('You lost!')
    else if(btnContent[1] == '0' && btnContent[5] == '0' && btnContent[9] == '0') showWinner('You lost!')
    else if(btnContent[3] == '0' && btnContent[5] == '0' && btnContent[7] == '0') showWinner('You lost!')

    else if(
      (btnContent[1] == 'x' || btnContent[1] == '0') &&
      (btnContent[2] == 'x' || btnContent[2] == '0') &&
      (btnContent[3] == 'x' || btnContent[3] == '0') &&
      (btnContent[4] == 'x' || btnContent[4] == '0') &&
      (btnContent[5] == 'x' || btnContent[5] == '0') &&
      (btnContent[6] == 'x' || btnContent[6] == '0') &&
      (btnContent[7] == 'x' || btnContent[7] == '0') &&
      (btnContent[8] == 'x' || btnContent[8] == '0') &&
      (btnContent[9] == 'x' || btnContent[9] == '0')
    )
      showWinner("It's a draw. Play again!")
  }
}

function showWinner(message){
  isGameOver = true
  setTimeout(function() {
    alert(message)
  }, 1000)
}
