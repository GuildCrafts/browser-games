var state = [
  ['BR-Q', 'BB-Q', 'BK-Q', 'BQ', 'BK', 'BK-K', 'BB-K', 'BR-K'],
  ['BP-0', 'BP-1', 'BP-2', 'BP-3', 'BP-4', 'BP-5', 'BP-6', 'BP-7'],
  ['0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0'],
  ['WP-0', 'WP-1', 'WP-2', 'WP-3', 'WP-4', 'WP-5', 'WP-6', 'WP-7'],
  ['WR-K', 'WB-K', 'WK-K', 'WK', 'WQ', 'WK-Q', 'WB-Q', 'WR-Q']
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
    this.renderBoard()
  }
  renderBoard() {
    this.getCell(0,0).classList.add('WR-Q')
    this.getCell(1,0).classList.add('WB-Q')
    this.getCell(2,0).classList.add('WK-Q')
    this.getCell(3,0).classList.add('WQ')
    this.getCell(4,0).classList.add('WK')
    this.getCell(5,0).classList.add('WK-K')
    this.getCell(6,0).classList.add('WB-K')
    this.getCell(7,0).classList.add('WR-K')

    this.getCell(0,1).classList.add('WP')
    this.getCell(1,1).classList.add('WP')
    this.getCell(2,1).classList.add('WP')
    this.getCell(3,1).classList.add('WP')
    this.getCell(4,1).classList.add('WP')
    this.getCell(5,1).classList.add('WP')
    this.getCell(6,1).classList.add('WP')
    this.getCell(7,1).classList.add('WP')

    this.getCell(0,7).classList.add('BR-K')
    this.getCell(1,7).classList.add('BB-K')
    this.getCell(2,7).classList.add('BK-K')
    this.getCell(3,7).classList.add('BK')
    this.getCell(4,7).classList.add('BQ')
    this.getCell(5,7).classList.add('BK-Q')
    this.getCell(6,7).classList.add('BB-Q')
    this.getCell(7,7).classList.add('BR-Q')

    this.getCell(0,6).classList.add('BP')
    this.getCell(1,6).classList.add('BP')
    this.getCell(2,6).classList.add('BP')
    this.getCell(3,6).classList.add('BP')
    this.getCell(4,6).classList.add('BP')
    this.getCell(5,6).classList.add('BP')
    this.getCell(6,6).classList.add('BP')
    this.getCell(7,6).classList.add('BP')

  }
  getCell(x, y) {
    return document.querySelector('.chess-board-row:nth-child(' + (y + 1) + ') .chess-board-cell:nth-child(' + (x + 1) + ')')

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
  isEmpty(endCoordinate){ //debug
    return this.board[endCoordinate.y][endCoordinate.x] == 0
  }

  knightIsValidMove(startCoordinate, endCoordinate){
    var knightsMoveLShape = startCoordinate.x + 2 === endCoordinate.x && startCoordinate.y + 1 === endCoordinate.y
    return knightsMoveLShape && this.isEmpty(endCoordinate)
  }

  rookIsValidMove(startCoordinate, endCoordinate){
    var rooksMoveHorizontallyandVertically = startCoordinate.x === endCoordinate.x || startCoordinate.y === endCoordinate.y
    return rooksMoveHorizontallyandVertically && this.isEmpty(endCoordinate)
  }

  bishopIsValidMove(startCoordinate, endCoordinate){
    var differenceX = Math.abs(startCoordinate.x - endCoordinate.x)
    var differenceY = Math.abs(startCoordinate.y - endCoordinate.y)
    return differenceX === differenceY && this.isEmpty(endCoordinate)

  }

  queenIsValidMove(startCoordinate, endCoordinate){
    return this.rookIsValidMove(startCoordinate, endCoordinate) || this.bishopIsValidMove(startCoordinate, endCoordinate) && this.isEmpty(endCoordinate)
  }

  kingIsValidMove(startCoordinate, endCoordinate){
    var kingMovePositive = startCoordinate.x === endCoordinate.x + 1 || endCoordinate.y === endCoordinate.y + 1
    var kingMoveNegative = startCoordinate.x === endCoordinate.x - 1 || endCoordinate.y === endCoordinate.y - 1
    return kingMoveNegative && this.isEmpty(endCoordinate)|| kingMovePositive && this.isEmpty(endCoordinate)
  }

  pawnIsValidMove(startCoordinate, endCoordinate){
    var pawnsCanOnlyMoveTwoSteps = startCoordinate.x === endCoordinate.x && startCoordinate.y + 1 || startCoordinate.y + 2 === endCoordinate.y
    return pawnsCanOnlyMoveTwoSteps && this.isEmpty(endCoordinate)
   }

  checkIfMoveIsValid(startCoordinate, pieceType, endCoordinate){
    if(this[pieceType + 'IsValidMove'](startCoordinate, endCoordinate)){
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
  var container = $('#chess-board')
  var row = $('<div>').addClass('chess-board-row')


  Array(8).fill().forEach(function(){
    $('<div>').addClass('chess-board-cell').appendTo(row)
  })
  Array(8).fill().forEach(function(){
    row.clone().appendTo(container)
  })
  var chess = new ChessBoard()
})
