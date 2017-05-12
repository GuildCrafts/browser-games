import Traverse from './traverseFunctions'
class Pawn{
  constructor( color ){
    this.color = color
    this.name = 'Pawn'
    this.moves = 0
  }

  legalMoves(x,y,board){
    let legal = []
    if( this.color === 'White'){
      if( this.moves === 0 && board[y - 2][x].piece === "Blank"){
        legal.push(board[y - 2][x])
      }
      if( board[y - 1][x].piece === "Blank" ){
        legal.push(board[y - 1][x])
      }
      if( board[y - 1][x - 1].piece !=="Blank" && board[y - 1][x - 1].piece.color !==this.color){
        legal.push(board[y - 1][x - 1])
      }
      if( board[y - 1][x + 1].piece !=="Blank" && board[y - 1][x - 1].piece.color !==this.color){
        legal.push(board[y - 1][x + 1])
      }
      return legal
    }


    if( this.color === 'Black'){
      if( this.moves === 0 && board[y + 2][x].piece === "Blank"){
        legal.push(board[y + 2][x])
      }
      if( board[y + 1][x].piece === "Blank" ){
        legal.push(board[y + 1][x])
      }
      if( board[y + 1][x - 1].piece !=="Blank" && board[y + 1][x - 1].piece.color !==this.color){
        legal.push(board[y + 1][x - 1])
      }
      if( board[y + 1][x + 1].piece !=="Blank" && board[y + 1][x - 1].piece.color !==this.color){
        legal.push(board[y + 1][x + 1])
      }
      return legal
    }
  }
}

class Bishop{
  constructor( color ){
    this.color = color
    this.name = 'Bishop'
    this.moves = 0
  }

  legalMoves(x,y,board){
    let legal = []
    legal = legal.concat(Traverse.diagonalUpLeft(x,y,board))
    legal = legal.concat(Traverse.diagonalUpRight(x,y,board))
    legal = legal.concat(Traverse.diagonalDownLeft(x,y,board))
    legal = legal.concat(Traverse.diagonalDownRight(x,y,board))
    return legal
  }
}

class Rook{
  constructor( color ){
    this.color = color
    this.name = 'Rook'
    this.moves = 0
  }

  legalMoves(x,y,board){
    let legal = []
    legal = legal.concat(Traverse.straightLeft(x,y,board))
    legal = legal.concat(Traverse.straightRight(x,y,board))
    legal = legal.concat(Traverse.straightDown(x,y,board))
    legal = legal.concat(Traverse.straightUp(x,y,board))
    console.log('legal',legal)
    return legal
  }
}

class Queen{
  constructor( color ){
    this.color = color
    this.name = 'Queen'
    this.moves = 0
  }

  legalMoves(x,y,board){
    let legal = []
    legal = legal.concat(Traverse.diagonalUpLeft(x,y,board))
    legal = legal.concat(Traverse.diagonalUpRight(x,y,board))
    legal = legal.concat(Traverse.diagonalDownLeft(x,y,board))
    legal = legal.concat(Traverse.diagonalDownRight(x,y,board))
    legal = legal.concat(Traverse.straightLeft(x,y,board))
    legal = legal.concat(Traverse.straightRight(x,y,board))
    legal = legal.concat(Traverse.straightDown(x,y,board))
    legal = legal.concat(Traverse.straightUp(x,y,board))
    return legal
  }
}

class King{
  constructor( color ){
    this.color = color
    this.name = 'King'
    this.moves = 0
  }

  legalMoves(x,y,board){
    let directions = [[[y],[x + 1]],[[y],[x - 1]],[[y + 1],[x]],[[y - 1],[x]],[[y + 1],[x + 1]],[[y + 1],[x - 1]],[[y - 1],[x + 1]],[[y - 1],[x - 1]]]
    let possible = []

    directions.forEach( direction => {
      if(board[direction[0]] && board[direction[0]][direction[1]]){
        possible.push(board[direction[0]][direction[1]])
      }
    })

    return possible.filter( square => square.piece === "Blank" || square.piece.color !==board[y][x].piece.color )
  }
}

class Knight{
  constructor( color ){
    this.color = color
    this.name = 'Knight'
    this.moves = 0
  }

  legalMoves(x,y,board){
    let directions = [[[y + 2],[x + 1]],[[y + 2],[x - 1]],[[y - 2],[x + 1]],[[y - 2],[x - 1]],[[y + 1],[x - 2]],[[y - 1],[x - 2]],[[y - 1],[x + 2]],[[y + 1],[x + 2]]]
    let possible = []

    directions.forEach( direction => {
      if(board[direction[0]] && board[direction[0]][direction[1]]){
        possible.push(board[direction[0]][direction[1]])
      }
    })

    return possible.filter( square => square.piece === "Blank" || square.piece.color !==board[y][x].piece.color )
  }
}

export{Pawn, Bishop, Rook, Queen, King, Knight}
