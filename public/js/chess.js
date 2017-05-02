var state = [
  ['BR-Q', 'BB-Q', 'BK-Q', 'BQ', 'BK', 'BK-K', 'BB-K', 'BR-K'],
  ['BR-0', 'BR-1', 'BR-2', 'BR-3', 'BR-4', 'BR-5', 'BR-6', 'BR-7'],
  ['0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0'],
  ['WR-0', 'WR-1', 'WR-2', 'WR-3', 'WR-4', 'WR-5', 'WR-6', 'WR-7'],
  ['WR-K', 'WB-K', 'WK-K', 'WK', 'WQ', 'WQ-Q', 'WB-Q', 'WR-Q']
]

class ChessBoard {
  state.map(function(){
    console.log(state)
  })
}



$(document).ready(function(){
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
