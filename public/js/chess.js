let manager = new GameManager()
if( sessionStorage.getItem('savedBoard')){
  manager.newGrid( JSON.parse( sessionStorage.getItem('savedBoard')).grid)
  manager.board.map2d( ( space, x, y ) => {
    if(space){
      manager.board.grid[x][y] = new Piece( type = space.type, color = space.color)
    }
  })
}

$(document).ready( () => {
  renderBoard( manager.board )
  $('#board').click( checkMove )
  sessionStorage.setItem( 'savedBoard', JSON.stringify(manager.board) )
})

const checkMove = ( event ) => {
  const clickCoord = event.target.id ?
    event.target.id :
    event.target.parentNode.id

  manager.onClick( clickCoord )
  renderBoard( manager.board )
  if( manager.selected ){
    $(`#${manager.selected.coord}`).addClass('selected')
  }
  sessionStorage.setItem( 'savedBoard', JSON.stringify(manager.board) )
  console.log('SPACES', manager.legalSpaces);
  manager.legalSpaces.map( (coord) => {
    $(`#${coord}`).addClass('legal-move')
  } )
}

const reset = () => {
  manager = new GameManager()
  renderBoard( manager.board )
  sessionStorage.setItem( 'savedBoard', JSON.stringify(manager.board) )

}

//Rendering Functions
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