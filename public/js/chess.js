const board = new Board( 8, 8 )

$(document).ready( () => {
  $('#Stuff').text('Hi')
  board.map2d( appendSquare, appendCol )
})

const appendCol = ( col, x ) => {
  $('#board').append(`<div class="board-col" id=col-${x}></div>`)
}

const appendSquare = ( space, x, y ) => {
  x = parseInt(x)
  y = parseInt(y)
  let color = (x+y)%2 > 0 ? 'white-space' : 'black-space'
  $(`#col-${x}`).append(
    `<div class="board-square ${color} id=${x},${y}"></div>`)
}

const boardTest = ( space, x, y ) => {
  console.log(space);
}