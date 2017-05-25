$(document).ready( function(){

  const generateBoard = () => {
    for(let i = 0; i < 8; i++) {
      for(let j = 0; j < 8; j++) {
        let columnPattern;
        if(i % 2 === 0 ){
          columnPattern = 'white'
        } else {
          columnPattern = 'black'
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

  generateBoard()

})
