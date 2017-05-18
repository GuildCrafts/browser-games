const manager = new GameManager()

$(document).ready( () => {
  renderBoard( manager.board )
  $('#board').click( checkMove )
})

const checkMove = ( event ) => {
  const clickCoord = event.target.id ?
    event.target.id :
    event.target.parentNode.id

  manager.onClick( clickCoord )
  renderBoard( manager.board )
}

const appendCol = ( col, x ) => {
  $('#board').append(`<div class="board-col" id=col-${x}></div>`)
}

const appendSquare = ( space, x, y, grid ) => {
  x = parseInt(x)
  y = parseInt(y)
  let color = (x+y)%2 > 0 ? 'white-space' : 'black-space'
  let coordString = manager.board.xyToLetter( x, y )

  let imgTag = grid[x][y] ?
    `<img class="piece" src=${grid[x][y].renderString()}`:
    ''

  $(`#col-${x}`).append(
    `<div class="board-square ${color}" id=${coordString}>
      ${imgTag}
    </div>`)
}

const renderBoard = ( aBoard ) => {
  $('#board').empty()
  aBoard.map2d( appendSquare, appendCol )
}

const boardTest = ( space, x, y ) => {
  console.log(space);
}