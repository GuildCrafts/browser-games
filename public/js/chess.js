var state = [
  ['WR-Q', 'WB-Q', 'WK-Q', 'WK', 'WQ', 'WK-K', 'WB-K', 'WR-K'],
  ['WP-0', 'WP-1', 'WP-2', 'WP-3', 'WP-4', 'WP-5', 'WP-6', 'WP-7'],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ['BP-0', 'BP-1', 'BP-2', 'BP-3', 'BP-4', 'BP-5', 'BP-6', 'BP-7'],
  ['BR-K', 'BB-K', 'BK-K', 'BK', 'BQ', 'BK-Q', 'BB-Q', 'BR-Q']
]

class ChessBoard {
  constructor(rows, cells) {
    this.board = []
    this.rows = 8
    this.cells = 8
    this.alreadyClicked = false

    for (var i = 0; i < state.length; i++) {
      var row = []
      for (var j = 0; j < state[i].length; j++) {
        row.push(state[j][i])
      }
      this.board.push(row)
    }
    this.renderBoard()
  }

  renderBoard() {
    this.board.forEach((row, y) => {
      row.forEach((cellValue, x) => {
        if (cellValue){
          this.getCell(x, y).setAttribute('data-piece', cellValue)
        }else{
          this.getCell(x, y).removeAttribute('data-piece')
        }
      })
    })
  }

  getCell(x, y) {
    return document.querySelector('.chess-board-row:nth-child(' + (x + 1) + ') .chess-board-cell:nth-child(' + (y + 1) + ')')
  }


  getCoordinatesByPiece(piece) {
    for(let row of this.board) {
      for(let element of row) {
        if(element.piece === piece){
          return {
            row: element.x,
            cell: element.y
          }
        }
      }
    }
  }

  isEmpty(endCoordinate) {
    return this.board[endCoordinate.x][endCoordinate.y] == null
  }

  knightIsValidMove(startCoordinate, endCoordinate) {
    var knightsMoveLShape = startCoordinate.x + 2 === endCoordinate.x && startCoordinate.y + 1 === endCoordinate.y
    return knightsMoveLShape && this.isEmpty(endCoordinate)
  }

  rookIsValidMove(startCoordinate, endCoordinate) {
    var rooksMoveHorizontallyandVertically = startCoordinate.x === endCoordinate.x || startCoordinate.y === endCoordinate.y
    return rooksMoveHorizontallyandVertically && this.isEmpty(endCoordinate)
  }

  bishopIsValidMove(startCoordinate, endCoordinate) {
    var differenceX = Math.abs(startCoordinate.x - endCoordinate.x)
    var differenceY = Math.abs(startCoordinate.y - endCoordinate.y)
    return differenceX === differenceY && this.isEmpty(endCoordinate)

  }

  queenIsValidMove(startCoordinate, endCoordinate) {
    return this.rookIsValidMove(startCoordinate, endCoordinate) || this.bishopIsValidMove(startCoordinate, endCoordinate) && this.isEmpty(endCoordinate)
  }

  kingIsValidMove(startCoordinate, endCoordinate) {
    var kingMovePositive = startCoordinate.x === endCoordinate.x + 1 || endCoordinate.y === endCoordinate.y + 1
    var kingMoveNegative = startCoordinate.x === endCoordinate.x - 1 || endCoordinate.y === endCoordinate.y - 1
    return kingMoveNegative && this.isEmpty(endCoordinate)|| kingMovePositive && this.isEmpty(endCoordinate)
  }

  pawnIsValidMove(startCoordinate, endCoordinate) {
    var pawnsCanOnlyMoveTwoSteps = startCoordinate.x === endCoordinate.x
    && (Math.abs(startCoordinate.y - endCoordinate.y) <= 1)
    return (pawnsCanOnlyMoveTwoSteps && this.isEmpty(endCoordinate))
   }

  getNameFromCode(code) {
    if(code.length === 2) {
      return {
        'K': 'king',
        'Q': 'queen'
      }[code.substring(1,1)]
    } else if(code.length > 1) {
      return {
        'K': 'knight',
        'R': 'rook',
        'B': 'bishop',
        'P': 'pawn',
      }[code.substring(1,1)]
    }
    return null
  }

  moveIfMoveIsValid(startCoordinate, endCoordinate) {
    // debugger
    var coordinates = getCoordinatesByPiece(target.classList[1])
    var pieceType = this.getNameFromCode(this.board[startCoordinate.x][startCoordinate.y])

    if(this[pieceType + 'IsValidMove'](startCoordinate, endCoordinate)) {
      this.move(startCoordinate, endCoordinate)
    }
    else {
      alert('Invalid move')
    }
  }

  move(pieceCoordinate, destinationCoordinate) {
    var currentPiece = this.board[pieceCoordinate.x][pieceCoordinate.y]
    this.board[destinationCoordinate.x][destinationCoordinate.y] = currentPiece
    this.board[pieceCoordinate.x][pieceCoordinate.y] = "0"
    var originalDiv = this.getCell(pieceCoordinate.x, pieceCoordinate.y)
    var destinationDiv = this.getCell(destinationCoordinate.x, destinationCoordinate.y)

    var pieceName = originalDiv.classList[1]

    originalDiv.className = "chess-board-cell"
    destinationDiv.classList.add('chess-board-cell')
    destinationDiv.classList.add(pieceName)
  }
}

function resetGame() {
  return new ChessBoard()
}


$(document).ready(function() {
  var container = $('.chess-board')
  var row = $('<div>').addClass('chess-board-row')

  Array(8).fill().forEach(function() {
    $('<div>').addClass('chess-board-cell').appendTo(row)
  })
  Array(8).fill().forEach(function() {
    row.clone().appendTo(container)
  })
  var chess = new ChessBoard()
  $('.chess-board-cell').click(function(event){
    var startCoordinate
    if(chess.alreadyClicked === true) {
      var endCoordinate = event.target.classList.length < 2
      chess.moveIfMoveIsValid(startCoordinate, endCoordinate)
    } else {
      startCoordinate = chess.getCoordinatesByPiece(target.classList[1])
    }
    chess.alreadyClicked = !(chess.alreadyClicked)
  })
})
