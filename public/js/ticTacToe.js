var button = []
for(var i = 1; i < 10; i++) {
  button[i] = document.getElementById('canvas'+i)

}

var canvasContext = []
for(var i = 1; i < 10; i++){
  canvasContext[i] = button[i].getContext('2d')
}

var buttonDisabled = []
for(var i = 1; i < 10; i++) {
  buttonDisabled[i] = false
}

var isGameOver = false
var content = []
var isComputerTurn = false


function loop(x) {
  if (isGameOver || isComputerTurn) return
  if(!buttonDisabled[x]) {
    buttonDisabled[x] = true
    button[x].style.opacity = 0.7
    content[x] = 'x'

    button[x].style.Transform = 'rotateY(180deg)'
    button[x].style.webkitTransform = 'rotateY(180deg)'
    button[x].style.mozTransform = 'rotateY(180deg)'
    button[x].style.msTransform = 'rotateY(180deg)'
    button[x].style.oTransform = 'rotateY(180deg)'

    isComputerTurn = true
    checkWinner()

    setTimeout(function(){
      canvasContext[x].lineWidth = 3
      canvasContext[x].beginPath()
      canvasContext[x].moveTo(10,10)
      canvasContext[x].lineTo(90,90)
      canvasContext[x].moveTo(90,10)
      canvasContext[x].lineTo(10,90)
      canvasContext[x].stroke()
      canvasContext[x].closePath()

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
  content[x] = '0'
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
    if(content[1] == 'x' && content[2] == 'x' && content[3] == 'x') showWinner('You won!')
    else if(content[4] == 'x' && content[5] == 'x' && content[6] == 'x') showWinner('You won!')
    else if(content[7] == 'x' && content[8] == 'x' && content[9] == 'x') showWinner('You won!')
    else if(content[1] == 'x' && content[4] == 'x' && content[7] == 'x') showWinner('You won!')
    else if(content[2] == 'x' && content[5] == 'x' && content[8] == 'x') showWinner('You won!')
    else if(content[3] == 'x' && content[6] == 'x' && content[9] == 'x') showWinner('You won!')
    else if(content[1] == 'x' && content[5] == 'x' && content[9] == 'x') showWinner('You won!')
    else if(content[3] == 'x' && content[5] == 'x' && content[7] == 'x') showWinner('You won!')

    else if(content[1] == '0' && content[2] == '0' && content[3] == '0') showWinner('You lost!')
    else if(content[4] == '0' && content[5] == '0' && content[6] == '0') showWinner('You lost!')
    else if(content[7] == '0' && content[8] == '0' && content[9] == '0') showWinner('You lost!')
    else if(content[1] == '0' && content[4] == '0' && content[7] == '0') showWinner('You lost!')
    else if(content[2] == '0' && content[5] == '0' && content[8] == '0') showWinner('You lost!')
    else if(content[3] == '0' && content[6] == '0' && content[9] == '0') showWinner('You lost!')
    else if(content[1] == '0' && content[5] == '0' && content[9] == '0') showWinner('You lost!')
    else if(content[3] == '0' && content[5] == '0' && content[7] == '0') showWinner('You lost!')

    else if(
      (content[1] == 'x' || content[1] == '0') &&
      (content[2] == 'x' || content[2] == '0') &&
      (content[3] == 'x' || content[3] == '0') &&
      (content[4] == 'x' || content[4] == '0') &&
      (content[5] == 'x' || content[5] == '0') &&
      (content[6] == 'x' || content[6] == '0') &&
      (content[7] == 'x' || content[7] == '0') &&
      (content[8] == 'x' || content[8] == '0') &&
      (content[9] == 'x' || content[9] == '0')

    ) showWinner("It's a draw. Play again!")
  }
}

function showWinner(message){
  isGameOver = true
  setTimeout(function() {
    alert(message)
  }, 1000)
}
