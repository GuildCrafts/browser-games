let board = []

for( let row = 0; row < 20; row++ ){
  board[row] = []
  for( let tile = 0; tile < 10; tile++ ){
    board[row][tile] = false
  }
}
 const canvas = document.getElementById('board')
 const ctx = canvas.getContext('2d')

 const width = 10
 const height = 20
 const tilesz = 24

canvas.width = width * tilesz
canvas.height = height * tilesz

function drawSquare(x, y){
  ctx.fillRect(x * tilesz, y * tilesz, tilesz, tilesz)
  ss = ctx.strokeStyle
  ctx.strokeStyle = '#555'
  ctx.strokeRect( x * tilesz, y * tilesz, tilesz, tilesz)
  ctx.strokeStyle = '#888'
  ctx.strokeRect( x * tilesz + 3*tilesz/8, y * tilesz + 3*tilesz/8, tilesz/4, tilesz/4)
  ctx.strokeStyle = ss
}

function drawBoard(){
  fs = ctx.fillStyle
  for( let y = 0; y < height; y++ ){
    for( let x = 0; x < width; x++ ){
      ctx.fillStyle = board[y][x] ? 'red' : 'white'
      drawSquare( x, y, tilesz, tilesz )
    }
  }
  ctx.fillStyle = fs
}

function Piece( patterns, color ){
  this.pattern = patterns[0]
  this.patterns = patterns
  this.patterni = 0
  this.color = color
  this.x = 0
  this.y = -2
}

// Piece.prototype.draw = function(){
//   fs = ctx.fillStyle
//   ctx.fillStyle = this.color
//   for( let ix = 0; ix < this.pattern.length; ix++ ){
//     for( let iy = 0; iy < this.pattern.length; iy++ ){
//       if( this.pattern[ix][iy] ){
//         drawSquare( this.x + ix, this.y + iy )
//       }
//     }
//   }
//   ctx.fillStyle = fs
// }

Piece.prototype.down = function(){
  if( !this._collides(0, 1, this.pattern) ){
    //locks piece
    let piece = newPiece()
  }else{
    this.undraw()
    this.y++
    this.draw()
  }
}

Piece.prototype.moveRight = function(){
  if( !this._collides(1, 0, this.pattern) ){
    this.undraw()
    this.x++
    this.draw()
  }
}

Piece.prototype.moveLeft = function(){
  if( !this._collides(-1, 0, this.pattern) ){
    this.undraw()
    this.x--
    this.draw()
  }
}

Piece.prototype.rotate = function(){
  let nextpat = this.patterns[ (this.patterni + 1) % this.patterns.length ]
  if(!this._collides(0,0, nextpat)){
    this.undraw()
    this.patterni = (this.patterni + 1 ) % this.patterns.length
    this.pattern = this.patterns[this.patterni]
    this.draw()
  }
}

Piece.prototype._fill = function( color ){
  fs = ctx.fillStyle
  ctx.fillStyle = color
  let x = this.x
  let y = this.y
  for( let ix = 0; ix < this.pattern.length; ix++ ){
    for( let iy = 0; iy < this.pattern.length; iy++ ){
      if( this.pattern[ix][iy]) {
        drawSquare(x + xi, y + yi)
      }
    }
  }
  ctx.fillStyle = fs
}

Piece.prototype.undraw = function( ctx ){
  this._fill('black')
}

Piece.prototype.draw = function( ctx ){
  this._fill( this.color )
}

Piece.prototype._collides = function(dx, dy, pat){
  for( let ix = 0; ix < pat.length; ix++ ){
    for( let iy = 0; iy < pat.length; iy++ ){
      if( !pat[ix][iy] ){
        continue
      }
      let x = this.x + ix + dx
      let y = this.y + iy + dy
      if( y >= height || x < 0 || x > width ){
        return true
      }
      if( y < 0 ){ //ignore negative space rows
        continue
      }
      if( board[y][x] ){
        return true
      }
    }
  }
  return false
}

const dropStart = Date.now()
document.body.addEventListener('keypress', function(event) {
  if( event.keyCode === 38 ){ //player pressed up
    piece.rotate()
    dropStart = Date.now()
  }
  if( event.keyCode === 40 ){ //player pressed down
    piece.down()
  }
  if( event.keyCode === 37 ){ //player pressed left
    piece.moveLeft()
    dropStart = Date.now()
  }
  if( event.keyCode === 39 ){ //player pressed right
    piece.moveRight()
    dropStart = Date.now()
  }
}, false)

let done = false
function main(){
  let piece = newPiece()
  let now = Date.now()
  let delta = now - dropStart

  if( delta > 1000 ){
    piece.down()
    dropStart = now
  }
  if( !done ){
    requestAnimationFrame( main )
  }
}

main()

let lines =0
Piece.prototype.lock = function(){
  for( let ix = 0; ix < this.pattern.length; ix++ ){
    for( let iy = 0; iy < this.pattern.length; iy++ ){
      if( !this.pattern[ix][iy] ){
        continue
      }
      if( this.y + iy < 0 ){
        alert( 'YOU SUCK' )
        done = true
        return
      }
      board[this.y + iy][this.x + ix] = true
    }
  }
}

let nlines = 0
for( let y = 0; y < height; y++ ){
  let line = true
  for( let x = 0; x < width; x++ ){
    line = line && !board[y][x]
  }
  if( line ){
    for( let y2 = y; y2 > 1; y2-- ){
      for( let x = 0; x < width; x++ ){
        board[y2][x] = board[y2-1][x]
      }
    }
    for( let x = 0; x < width; x++ ){
      board[0][x] = false
    }
    nlines++
  }
  if( nlines > 0 ){
    lines += nlines
    drawBoard()
    console.log(lines)
  }
}



function newPiece() {
  console.log( "(>'')>  " )
  const pieces = [
    [I, "cyan"],
    [J, "blue"],
    [L, "orange"],
    [O, "yellow"],
    [S, "green"],
    [T, "purple"],
    [Z, "red"]
  ]
  console.log( "=-=-=->   pieces",  pieces )
  let p = pieces[parseInt(Math.random() * pieces.length , 10)]
  return new Piece( p[0], p[1] )
}
