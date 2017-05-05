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
  constructor(rows, cells){
    this.board = []
    this.rows = 8
    this.cells = 8

    for (var i = 0; i < state.length; i++){
      var row = []
      for (var j = 0; j < state[i].length; j++){
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
  isEmpty(endCoordinate){
    return this.board[endCoordinate.y][endCoordinate.x] == 0
  }

  knightIsValidMove(startCoordinate, endCoordinate){
    var knightsMoveLShape = startCoordinate.x + 2 === endCoordinate.x && startCoordinate.y + 1 === endCoordinate.y
    if(knightsMoveLShape && this.isEmpty(endCoordinate)){
      return true
    }
  }

  pawnIsValidMove(startCoordinate, endCoordinate){
    var pawnsCanOnlyMoveTwoSteps = startCoordinate.x === endCoordinate.x && startCoordinate.y + 1 || startCoordinate.y + 2 === endCoordinate.y
    if(pawnsCanOnlyMoveTwoSteps && this.isEmpty(endCoordinate) ){
    return true
    }
   }

  checkIfMoveIsValid(startCoordinate, pieceType, endCoordinate){
    var rules = {
      pawn: {isValidMove: this.pawnIsValidMove(startCoordinate, endCoordinate)},
      knight: {isValidMove: this.knightIsValidMove(startCoordinate, endCoordinate)}
    }
    if(rules[pieceType].isValidMove){
      this.move(startCoordinate, endCoordinate)
    }
    else {
      alert('Invalid move')
    }
  }


  move(pieceCoordinate, destinationCoordinate){
  var currentPiece = this.board[pieceCoordinate.x][pieceCoordinate.y]
  this.board[destinationCoordinate.x][destinationCoordinate.y] = currentPiece
  this.board[pieceCoordinate.x][pieceCoordinate.y] = 0
  }
}

function resetGame(){
  return new ChessBoard()
}

$(document).ready(function(){
  var chess = new ChessBoard()
console.log(  chess.checkIfMoveIsValid({x: 0,y: 2}, "knight", {x:2, y: 3}))
  var container = $('#chess-board')
  var row = $('<div>').addClass('chess-board-row')


  Array(8).fill().forEach(function(){
    $('<div>').addClass('chess-board-cell').appendTo(row)
  })
  Array(8).fill().forEach(function(){
    row.clone().appendTo(container)
  })
})
