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

    if(sessionStorage.getItem('gameboard')){
      this.board = JSON.parse(sessionStorage.getItem('gameboard'))
    } else {
      for (var i = 0; i < state.length; i++) {
        var row = []
        for (var j = 0; j < state[i].length; j++) {
          row.push(state[j][i])
        }
        this.board.push(row)
      }
    }
    this.renderBoard()
  }

  renderBoard() {
    this.board.forEach((row, x) => {
      row.forEach((cellValue, y) => {
        if (cellValue){
          this.getCell(x, y).setAttribute('data-piece', cellValue)
        }else{
          this.getCell(x, y).removeAttribute('data-piece')
        }
      })
    })
  }

  saveGameBoard() {
    sessionStorage.setItem('gameboard', JSON.stringify(this.board))
  }

  getCell(y, x) {
    x = parseInt(x)
    y = parseInt(y)
    return document.querySelector('.chess-board-row:nth-child(' + (x + 1) + ') .chess-board-cell:nth-child(' + (y + 1) + ')')
  }

  getCellNodeByPieceName(pieceName) {
    return document.querySelector(`[data-piece='${pieceName}']`)
  }

  getDestinationCell(coordinates) {
    return document.querySelector(`.chess-board-row:nth-child(${coordinates.x}) .chess-board-cell:nth-child(${coordinates.y})`)
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
    if(Math.abs(endCoordinate.x - startCoordinate.x) === 2 || Math.abs(endCoordinate.y - startCoordinate.y) === 2){
      if( Math.abs(endCoordinate.x - startCoordinate.x) + Math.abs( endCoordinate.y - startCoordinate.y) === 3) {
        return true
      }
    }
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
      }[code.substring(1)]
    } else if(code.length > 1) {
      return {
        'K': 'knight',
        'R': 'rook',
        'B': 'bishop',
        'P': 'pawn',
      }[code.substring(1,2)]
    }
    return null
  }

  moveIfMoveIsValid(startCoordinate, endCoordinate) {
    var pieceName = this.board[startCoordinate.x][startCoordinate.y]
    var pieceType = this.getNameFromCode(pieceName)
    console.log( "isValid???:", this[pieceType + 'IsValidMove'](startCoordinate, endCoordinate) )
    if(this[pieceType + 'IsValidMove'](startCoordinate, endCoordinate)) {
      this.move(startCoordinate, endCoordinate, pieceName)
    }
    else {
      alert('Invalid move')
      $('.highlight').removeClass('highlight')
    }
  }

  move(pieceCoordinate, destinationCoordinate) {
    var currentPiece = this.board[pieceCoordinate.x][pieceCoordinate.y]
    // console.log( "currentPiece:", this.board[] )
    this.board[destinationCoordinate.x][destinationCoordinate.y] = currentPiece
    var originalDiv = this.getCellNodeByPieceName(currentPiece)
    var destinationDiv = this.getCell(destinationCoordinate.x, destinationCoordinate.y)
    var pieceName = originalDiv.dataset.piece
    this.board[pieceCoordinate.x][pieceCoordinate.y] = null


    originalDiv.className = "chess-board-cell"
    destinationDiv.classList.add('chess-board-cell')
    destinationDiv.dataset.piece = currentPiece
    delete originalDiv.dataset.piece
    this.saveGameBoard()
  }
}

function resetGame() {
  return new ChessBoard()
}


$(document).ready(function() {
  var container = $('.chess-board')
  var row = $('<div>').addClass('chess-board-row')

  Array(8).fill().forEach(function(_, x) {
    $('<div>')
      .addClass('chess-board-cell')
      .attr('data-x', x)
      .appendTo(row)
  })

  Array(8).fill().forEach(function(_, y) {
    const thisRow = row.clone()
    thisRow.find('> *').attr('data-y', y)
    thisRow.appendTo(container)
  })

  var chessBoard = new ChessBoard()
  var startingPositionX, startingPositionY, startingCoordinates,
    endingPositionX, endingPositionY, endingCoordinates

  $('.chess-board-cell').click(function(event){
    var highlights = document.querySelector('.highlight')
    if ( highlights !== null ) {
      if(chessBoard.alreadyClicked === true){
        endingPositionX= event.target.dataset.x
        endingPositionY= event.target.dataset.y
        endingCoordinates = { x: endingPositionX, y: endingPositionY }
        chessBoard.moveIfMoveIsValid(startingCoordinates, endingCoordinates)
        $(highlights).removeClass('.highlight')
        chessBoard.alreadyClicked = false
      }
    }
    else {
      startingPositionX= event.target.dataset.x
      startingPositionY= event.target.dataset.y
      startingCoordinates= {x: startingPositionX, y: startingPositionY}
      chessBoard.alreadyClicked = true
      $(event.target).addClass('highlight')
    }
  })
})
