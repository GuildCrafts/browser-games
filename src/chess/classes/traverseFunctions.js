export default class Traverse{

  static pieceOnSquare(x,y,board){
    if( board[y] && board[y][x] && board[y][x].piece !== "Blank"){
      return board[y][x].piece
    }else{
      return false
    }
  }

  static straightUp(x,y,board){
    let valid = []
    for( let i = 1; i <= 8 - y; i++ ){
      if( !this.pieceOnSquare( x, y + i, board )){
        valid.push( board[y + i][x] )
      }else if( this.pieceOnSquare( x, y + i, board ).color === this.pieceOnSquare( x, y, board ).color ){
        return valid
      }else if( this.pieceOnSquare( x, y + i, board )){
        valid.push( board[y + i][x] )
        return valid
      }
    }
    return valid
  }

  static straightDown(x,y,board){
    let valid = []
    for( let i = 1; i <= y - 1; i++ ){
      if( !this.pieceOnSquare( x, y - i, board )){
        valid.push( board[y - i][x] )
      }else if( this.pieceOnSquare( x, y - i, board ).color === this.pieceOnSquare( x, y, board ).color){
        return valid
      }else if( this.pieceOnSquare( x, y - i, board )){
        valid.push( board[y - i][x] )
        return valid
      }
    }
    return valid
  }

  static straightLeft(x,y,board){
    let valid = []
    for( let i = 1; i <= x - 1; i++ ){
      if( !this.pieceOnSquare( x - i, y, board )){
        valid.push( board[y][x - i] )
      }else if( this.pieceOnSquare( x - i, y, board ).color === this.pieceOnSquare( x, y, board ).color){
        return valid
      }else if( this.pieceOnSquare( x - i, y, board )){
        valid.push( board[y][x - i] )
        return valid
      }
    }
    return valid
  }

  static straightRight(x,y,board){
    let valid = []
    for( let i = 1; i <= 8 - x; i++ ){
      if( !this.pieceOnSquare( x + i, y, board )){
        valid.push( board[y][x + i] )
      }else if( this.pieceOnSquare( x + i, y, board ).color === this.pieceOnSquare( x, y, board ).color){
        return valid
      }else if( this.pieceOnSquare( x + i, y, board )){
        valid.push( board[y][x + i] )
        return valid
      }
    }
    return valid
  }

  static diagonalUpLeft(x,y,board){
    let valid = []
    let wallDistance = (x - 1) < (8 - y) ? (x - 1) : (8 - y)
    for( let i = 1; i <= wallDistance; i++ ){
      if( !this.pieceOnSquare( x - i, y + i, board )){
        valid.push( board[y + i][x - i] )
      }else if( this.pieceOnSquare( x - i, y + i, board ).color === this.pieceOnSquare( x, y, board ).color){
        return valid
      }else if( this.pieceOnSquare( x - i, y + i, board )){
        valid.push( board[y + i][x - i] )
        return valid
      }
    }
    return valid
  }

  static diagonalUpRight(x,y,board){
    let valid = []
    let wallDistance = (8 - x) < (8 - y) ? (8 - x) : (8 - y)
    for( let i = 1; i <= wallDistance; i++ ){
      if( !this.pieceOnSquare( x + i, y + i, board )){
        valid.push( board[y + i][x + i] )
      }else if( this.pieceOnSquare( x + i, y + i, board ).color === this.pieceOnSquare( x, y, board ).color){
        return valid
      }else if( this.pieceOnSquare( x + i, y + i, board )){
        valid.push( board[y + i][x + i] )
        return valid
      }
    }
    return valid
  }

  static diagonalDownLeft(x,y,board){
    let valid = []
    let wallDistance = (x - 1) < (y - 1) ? (x - 1) : (y - 1)
    for( let i = 1; i <= wallDistance; i++ ){
      if( !this.pieceOnSquare( x - i, y - i, board )){
        valid.push( board[y - i][x - i] )
      }else if( this.pieceOnSquare( x - i, y - i, board ).color === this.pieceOnSquare( x, y, board ).color){
        return valid
      }else if( this.pieceOnSquare( x - i, y - i, board )){
        valid.push( board[y - i][x - i] )
        return valid
      }
    }
    return valid
  }

  static diagonalDownRight(x,y,board){
    let valid = []
    let wallDistance = (8 - x) < (y - 1) ? (8 - x) : (y - 1)
    for( let i = 1; i <= wallDistance; i++ ){
      if( !this.pieceOnSquare( x + i, y - i, board )){
        valid.push( board[y - i][x + i] )
      }else if( this.pieceOnSquare( x + i, y - i, board ).color === this.pieceOnSquare( x, y, board ).color){
        return valid
      }else if( this.pieceOnSquare( x + i, y - i, board )){
        valid.push( board[y - i][x + i] )
        return valid
      }
    }
    return valid
  }

}
