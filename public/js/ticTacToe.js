var button = []
for(var i = 1; i < 10; i++) {
  button[i] = document.getElementById('canvas'+i)

}

var context = []
for(var i = 1; i < 10; i++){
  context[i] = button[i].getContext('2d')
}

var buttonDisabled = []
for(var i = 1; i < 10; i++) {
  buttonDisabled[i] = false
}

var isGameOver = false
var content = []
console.log(content)
function loop(x) {
  if(!buttonDisabled[x]) {
    buttonDisabled[x] = true
    button[x].style.opacity = 0.7
    content[x] = 'x'
    //
    button[x].style.Transform = 'rotateY(180deg)'
    button[x].style.webkitTransform = 'rotateY(180deg)'
    button[x].style.mozTransform = 'rotateY(180deg)'
    button[x].style.msTransform = 'rotateY(180deg)'
    button[x].style.oTransform = 'rotateY(180deg)'

    setTimeout(function(){
      context[x].lineWidth = 3
      context[x].beginPath()
      context[x].moveTo(10,10)
      context[x].lineTo(90,90)
      context[x].moveTo(90,10)
      context[x].lineTo(10,90)
      context[x].stroke()
      context[x].closePath()

      computerTurn()
    }, 300)

    checkWinner()
  }
}

function computerTurn() {

  var random = Math.random()

  if(random < 0.1 && !buttonDisabled[1]) {
    draw0Steps(1)
  } else if(random < 0.2 && !buttonDisabled[2]) {
    draw0Steps(2)
  } else if(random < 0.3 && !buttonDisabled[3]) {
    draw0Steps(3)
  } else if(random < 0.4 && !buttonDisabled[4]) {
      draw0Steps(4)
  } else if(random < 0.5 && !buttonDisabled[5]) {
      draw0Steps(5)
  } else if(random < 0.6 && !buttonDisabled[6]) {
      draw0Steps(6)
  } else if(random < 0.7 && !buttonDisabled[7]) {
      draw0Steps(7)
  } else if(random < 0.8 && !buttonDisabled[8]) {
      draw0Steps(8)
  } else if(random < 0.1 && !buttonDisabled[9]) {
      draw0Steps(9)
  } else {
    computerTurn()
  }
}

function draw0Steps(x) {
  buttonDisabled[x] = true
  button[x].style.opacity = 0.7
  content[x] = '0'
  button[x].style.webkitTransform = "rotateX(180deg)"

  setTimeout(function(){
    context[x].beginPath()
    context[x].lineWidth = 3
    context[x].arc(50,50,34,0,Math.PI*2,false)
    context[x].stroke()
    context[x].closePath()
  }, 300)

}

function checkWinner(){
  if(!isGameOver){
    if(content[1] == 'x' && content[2] == 'x' && content[3] == 'x'){
      showWinner()
    }
  }
}
function showWinner(){
  alert('You won!')
  isGameOver = true
}
