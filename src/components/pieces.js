class Pawn{
  constructor( color ){
    this.color = color
    this.name = 'Pawn'
    this.moves = 0
  }

  legalMove(x,y,x2,y2){
    if( x === x2 && this.color === 'White'){
      if( this.moves === 0 ){
        if( y - y2 === 1 || y - y2 === 2 ){
          return true
        }
      }else if( y - y2 === 1 ){
        return true
      }
    }
    if( x === x2 && this.color === 'Black'){
      if( this.moves === 0 ){
        if( y - y2 === -1 || y - y2 === -2 ){
          return true
      }
      }else if( y - y2 === -1 ){
        return true
      }
    }
  }
}

class Bishop{
  constructor( color ){
    this.color = color
    this.name = 'Bishop'
    this.moves = 0
  }

  legalMove(x,y,x2,y2){
    if( Math.abs( x2 - x) === Math.abs( y2 - y )){
      return true
    }
  }
}

class Rook{
  constructor( color ){
    this.color = color
    this.name = 'Rook'
    this.moves = 0
  }

  legalMove(x,y,x2,y2){
    if( y2 === y || x2 === x){
      return true
    }
  }
}

class Queen{
  constructor( color ){
    this.color = color
    this.name = 'Queen'
    this.moves = 0
  }

  legalMove(x,y,x2,y2){
    if( y2 === y || x2 === x || Math.abs( x2 - x) === Math.abs( y2 - y )){
      return true
    }
  }
}

class King{
  constructor( color ){
    this.color = color
    this.name = 'King'
    this.moves = 0
  }

  legalMove(x,y,x2,y2){
    if( y2 === y || x2 === x || Math.abs( x2 - x) === Math.abs( y2 - y )){
      if( Math.abs( x2 - x ) <= 1 && Math.abs( y2 - y ) <= 1 ){
        return true
      }
    }
  }
}

class Knight{
  constructor( color ){
    this.color = color
    this.name = 'Knight'
    this.moves = 0
  }

  legalMove(x,y,x2,y2){
    if( Math.abs( x2 - x ) === 2 || Math.abs( y2 - y ) === 2 ){
      if( Math.abs( x2 - x ) + Math.abs( y2 - y ) === 3){
        return true
      }
    }
  }
}

export{Pawn, Bishop, Rook, Queen, King, Knight}
