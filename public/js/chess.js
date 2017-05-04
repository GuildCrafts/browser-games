var state = [
  ['BR-Q', 'BB-Q', 'BK-Q', 'BQ', 'BK', 'BK-K', 'BB-K', 'BR-K'],
  ['BP-0', 'BP-1', 'BP-2', 'BP-3', 'BP-4', 'BP-5', 'BP-6', 'BP-7'],
  ['0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0'],
  ['WP-0', 'WP-1', 'WP-2', 'WP-3', 'WP-4', 'WP-5', 'WP-6', 'WP-7'],
  ['WR-K', 'WB-K', 'WK-K', 'WK', 'WQ', 'WQ-Q', 'WB-Q', 'WR-Q']
]

class ChessBoard {
  constructor(rows, cells) {
    this.board = []
    this.rows = 8
    this.cells = 8

    for (var i = 0; i < state.length; i++) {
      var row = []
      for (var j = 0; j < state[i].length; j++) {
        row.push(state[i][j])
      }
      this.board.push(row)
    }
  }
  getPieceByCoordinates(row, cell){
    return this.board.filter(function(element){
      return element.row === row && element.cell === cell ? element.piece : null
    })
  }
  getCoordinatesByPiece(piece){
    var returnValue = null
    var sample = this.board.forEach(function(element){
      if(element.piece === piece){
        returnValue = {
          row: element.row,
          cell: element.cell
        }
      }
    })
    return returnValue
  }

  pawnIsValidMove(startCoordinate, endCoordinate) {
    // if pawn is at the begining position, it can move 2
    //implement isEmpty function
    var pawnsCanOnlyMoveTwoSteps = startCoordinate.x + 1 === endCoordinate.x && startCoordinate.y === endCoordinate.y
    if(pawnsCanOnlyMoveTwoSteps || startCoordinate.x + 2 == endCoordinate.x){
    this.move(startCoordinate, endCoordinate)
  }
    else {
    console.log(`invalid move:: Cant move ${startCoordinate} to ${endCoordinate}`)
    }
    // if the pawn is not at the begining position it can only move 1
    // if the pawn is blocked by another piece, it cannot move.
   }


  checkIfMoveIsValid(startCoordinate, pieceType, endCoordinate) {
    var rules = {
      pawn: {isValidMove: this.pawnIsValidMove(startCoordinate, endCoordinate)}
    }
    return rules[pieceType].isValidMove
  }

  move(pieceCoordinate, destinationCoordinate) {
  var currentPiece = this.board[pieceCoordinate.x][pieceCoordinate.y]
  console.log('=================',currentPiece, destinationCoordinate);
  this.board[destinationCoordinate.x][destinationCoordinate.y] = currentPiece
  this.board[pieceCoordinate.x][pieceCoordinate.y] = 0
  }
}

$(document).ready(function(){
  var chess = new ChessBoard()
console.log(  chess.checkIfMoveIsValid({x: 1,y: 0},"pawn", {x:3, y: 0}))
  var squareCount = 8*8;
  var container = $('#chess-board')
  var row = $('<div>').addClass('chess-board-row')


  Array(8).fill().forEach(function(){
    $('<div>').addClass('chess-board-cell').appendTo(row)
  })
  Array(8).fill().forEach(function(){
    row.clone().appendTo(container)
  })
})
