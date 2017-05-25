$(document).ready( function(){

  const generateRow = () => {
    for(let i = 0; i < 8; i++) {
      $('.board').append('<div class="square '+ `column${i}` + ' "></div>')
    }
  }
  const generateBoard = () => {
    for( let i = 0; i < 8; i ++) {
      generateRow()
    }
  }
  generateBoard()



})
