function drawShape(){
  canvas  = document.getElementById("mycanvas");
  if (canvas.getContext){
  ctx = canvas.getContext('2d');
     ctx.beginPath();
     //horizontal lines
     ctx.moveTo(0, 133)
     ctx.lineTo(400, 133)
     ctx.moveTo(0, 266)
     ctx.lineTo(400, 266)
     //vertical lines
     ctx.moveTo(133, 0)
     ctx.lineTo(133, 400)
     ctx.moveTo(266, 0)
     ctx.lineTo(266, 400)

     ctx.stroke();
  }
  else {
     alert('Whoops!');
  }
}

let moves = [];

let x = new Image();
let o = new Image();
x.src = '../public/img/x.png';
o.src = '../public/img/o.png';
let turn = 1;

window.onclick = function(e) {
  if(e.pageX < 400 && e.pageY < 400) {
    let cX = Math.floor(e.pageX/(400/3));
    let cY = Math.floor(e.pageY/(400/3));
    console.log(cX, cY);
    let alreadyClicked = false;

    for(i in moves) {
      if(moves[i][0] == cX && moves[i][1] == cY) {
        alreadyClicked = true;
      }
    }
    if(alreadyClicked == false) {
      moves[(moves.length)] = [cX, cY, turn]
      turn = turn*-1
      draw();
    }
  }
}

function draw() {
  for(i in moves){
    if(moves[i][2] == 1){
      ctx.drawImage(x, Math.floor(moves[i][0]*(400/3)), Math.floor(moves[i][1]*(400/3)));
    } else {
      ctx.drawImage(o, Math.floor(moves[i][0]*(400/3)), Math.floor(moves[i][1]*(400/3)));
    }

  }
}
