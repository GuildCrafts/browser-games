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
  }

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
