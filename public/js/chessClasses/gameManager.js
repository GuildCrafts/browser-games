class GameManager {
  constructor() {
    this.selected = false
    this.legalSpaces = []
    this.turn = 1
    this.board = new Board( 8, 8 )
    this.board.setSquare( 'c2', new Piece())
    this.board.setSquare( 'e7', new Piece( KNIGHT, BLACK ) )
  }

  onClick( coord ) {
    const piece = this.board.getSquare( coord )

    if( !piece && !this.selected ){
      return
    } else if( !piece && this.selected ){
      this.movePiece( this.selected.coord , coord )
      this.selected = false
    } else if( piece ){
      this.selected = { coord: coord, piece: piece }
    }
  }

  getSelected() {
    return this.selected
  }

  determineLegalMoves( piece, coord ){

  }

  movePiece ( startCoord, endCoord ) {
    this.board.setSquare( endCoord, this.board.getSquare( startCoord ))
    this.board.setSquare( startCoord, false )
  }
}