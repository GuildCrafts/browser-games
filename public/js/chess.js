$(document).ready(function(){
  const canvas = document.getElementById('board')
  const ctx = canvas.getContext("2d")
  const whiteKnight = '\u2658'
  let board = []
  let board_width = 8
  let board_height = 8
  let tileDiameter = 45
  canvas.width = board_width * tileDiameter
  canvas.height = board_height * tileDiameter

  for(let y = 0; y < board_height; y++){
    board[y] = []
    for(let x = 0; x < board_width; x++){
      board[y][x] = ''
    }
  }

const drawSquare = (x,y) => {
  ctx.fillRect(x * tileDiameter, y * tileDiameter, tileDiameter, tileDiameter);
  let ss = ctx.strokeStyle;
  ctx.strokeStyle = "#555";
  ctx.strokeRect(x * tileDiameter, y * tileDiameter, tileDiameter, tileDiameter);
  ctx.strokeStyle = ss;
}
console.log( "(>'')>  ", String.fromCharCode('&#9816') )

const drawBoard = () => {
  let color = '#ecdab5'
  for (let y = 0; y < board_height; y++) {
    for (let x = 0; x < board_width; x++) {
      if(y % 2 === 1 && x % 2 === 0) {
        color ='#ad8a64'
      } else if(y % 2 === 0 && x % 2 === 1) {
        color ='#ad8a64'
      }

      ctx.fillStyle = color
      drawSquare(x, y, tileDiameter, tileDiameter)
      color = '#ecdab5'
    }
  }
}
drawBoard()
board.map(x =>{
})

console.log( "=-=-=-> board[1]", board )


let p = $('.knight')
let k = document.createTextNode('&#9816')

k = p.append(whiteKnight)
console.log(k)

function drawPiece () {
  ctx.fillStyle = 'black'
  ctx.fillText( whiteKnight ,15,150)
}
drawPiece()
//draw knight (location x, y )
})
