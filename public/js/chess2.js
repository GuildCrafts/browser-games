$(document).ready( function(){

  const generateBoard = () => {
    for(let i = 1; i < 9; i++) {
      for(let j = 1; j < 9; j++) {
        let columnPattern;
        if(i % 2 === 1 ){
          columnPattern = 'blackFirst'
        } else {
          columnPattern = 'whiteFirst'
        }
        const square = `<div class=square
          data-pattern=${columnPattern}
          data-column=${i}
          data-row=${j}>
        </div>`
        $('.board').append(square)
      }
    }
  }

  const drawPawn = (color, row, column) => {
    if(color === 'white'){
      $(`div[data-row=${row}][data-column=${column}]`).text('\u2659')
    }else{
      $(`div[data-row=${row}][data-column=${column}]`).text('\u265F')
    }
  }

  const drawKnight = (color, row, column) => {
    if(color === 'white'){
      $(`div[data-row=${row}][data-column=${column}]`).text('\u2658')
    }else{
      $(`div[data-row=${row}][data-column=${column}]`).text('\u265E')
    }
  }

  const drawBishop = (color, row, column) => {
    if(color === 'white'){
      $(`div[data-row=${row}][data-column=${column}]`).text('\u2657')
    }else{
      $(`div[data-row=${row}][data-column=${column}]`).text('\u265D')
    }
  }

  const drawRook = (color, row, column) => {
    if(color === 'white'){
      $(`div[data-row=${row}][data-column=${column}]`).text('\u2656')
    }else{
      $(`div[data-row=${row}][data-column=${column}]`).text('\u265C')
    }
  }

  const drawQueen = (color, row, column) => {
    if(color === 'white'){
      $(`div[data-row=${row}][data-column=${column}]`).text('\u2655')
    }else{
      $(`div[data-row=${row}][data-column=${column}]`).text('\u265B')
    }
  }

  const drawKing = (color, row, column) => {
    if(color === 'white'){
      $(`div[data-row=${row}][data-column=${column}]`).text('\u2654')
    }else{
      $(`div[data-row=${row}][data-column=${column}]`).text('\u265A')
    }
  }

  const setUpNewGame = () => {
    generateBoard()

    drawRook('black',1,1)
    drawKnight('black',2,1)
    drawBishop('black',3,1)
    drawQueen('black',4,1)
    drawKing('black',5,1)
    drawBishop('black',6,1)
    drawKnight('black',7,1)
    drawRook('black',8,1)
    drawPawn('black',1,2)
    drawPawn('black',2,2)
    drawPawn('black',3,2)
    drawPawn('black',4,2)
    drawPawn('black',5,2)
    drawPawn('black',6,2)
    drawPawn('black',7,2)
    drawPawn('black',8,2)

    drawRook('white',1,8)
    drawKnight('white',2,8)
    drawBishop('white',3,8)
    drawQueen('white',4,8)
    drawKing('white',5,8)
    drawBishop('white',6,8)
    drawKnight('white',7,8)
    drawRook('white',8,8)
    drawPawn('white',1,7)
    drawPawn('white',2,7)
    drawPawn('white',3,7)
    drawPawn('white',4,7)
    drawPawn('white',5,7)
    drawPawn('white',6,7)
    drawPawn('white',7,7)
    drawPawn('white',8,7)
  }

  $('div').on('click',function(event) {
    const target = event.target

    if($('target').text() === '') {
      console.log( "=-=-=-> target", target )
      console.log($('target'))
    }
  })
  setUpNewGame()

})
