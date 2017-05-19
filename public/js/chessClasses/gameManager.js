class GameManager {
  constructor() {
    this.selected = false
    this.legalSpaces = []
    this.turn = WHITE
    this.board = new Board( 8, 8 )
    this.placeStartingPositions()
  }

  onClick( coord ) {
    const piece = this.board.getSquare( coord )
    const clickedMyPiece = this.clickedMyPiece( piece )

    if( !clickedMyPiece && !this.selected ){
      return
    } else if( !clickedMyPiece && this.selected ){
      this.movePiece( this.selected.coord , coord )
      this.selected = false
      this.legalSpaces = []
      this.swapTurn()
    } else if( clickedMyPiece ){
      this.selected = { piece: piece, coord: coord }
      this.legalSpaces = this.legalMoves( piece, coord)
    }
  }

  clickedMyPiece ( piece ) {
    if ( piece ){
      if( piece.color === this.turn ){
        return true
      }
    }
    return false
  }

  swapTurn() {
    if (this.turn === WHITE ){
      this.turn = BLACK
    } else {
      this.turn = WHITE
    }
  }

  getSelected() {
    return this.selected
  }

  legalMoves( piece, coord ){
    let moves = {
      king: () => this.kingMoves,
      queen: () => this.queenMoves,
      bishop: () => this.bishopMoves,
      rook: () => this.rookMoves,
      knight: () => this.knightMoves,
      pawn: () => this.pawnMoves(piece, coord),
    }
    return moves[piece.type]()
  }

  movePiece ( startCoord, endCoord ) {
    this.board.setSquare( endCoord, this.board.getSquare( startCoord ))
    this.board.setSquare( startCoord, false )
  }

  newGrid( grid ){
    this.board.grid = grid
  }

  placeStartingPositions () {
    for( let i = 0; i < this.board.grid.length; i++){
      this.board.grid[i][1] = new Piece( PAWN, WHITE )
      this.board.grid[i][6] = new Piece( PAWN, BLACK )
    }

    this.board.setSquare( 'a1', new Piece( ROOK, WHITE ) )
    this.board.setSquare( 'b1', new Piece( KNIGHT, WHITE ) )
    this.board.setSquare( 'c1', new Piece( BISHOP, WHITE ) )
    this.board.setSquare( 'd1', new Piece( QUEEN, WHITE ) )
    this.board.setSquare( 'e1', new Piece( KING, WHITE ) )
    this.board.setSquare( 'f1', new Piece( BISHOP, WHITE ) )
    this.board.setSquare( 'g1', new Piece( KNIGHT, WHITE ) )
    this.board.setSquare( 'h1', new Piece( ROOK, WHITE ) )

    this.board.setSquare( 'a8', new Piece( ROOK, BLACK ) )
    this.board.setSquare( 'b8', new Piece( KNIGHT, BLACK ) )
    this.board.setSquare( 'c8', new Piece( BISHOP, BLACK ) )
    this.board.setSquare( 'd8', new Piece( QUEEN, BLACK ) )
    this.board.setSquare( 'e8', new Piece( KING, BLACK ) )
    this.board.setSquare( 'f8', new Piece( BISHOP, BLACK ) )
    this.board.setSquare( 'g8', new Piece( KNIGHT, BLACK ) )
    this.board.setSquare( 'h8', new Piece( ROOK, BLACK ) )
  }

  placeScattered () {
    this.board.setSquare( 'e7', new Piece( KNIGHT, BLACK ) )
  }

  validSpace ( square, color) {
    if( !square || square.color !== color ){
      return true
    }
    return false
  }

  pawnMoves(piece, coord )  {
    let result = []
    let direction = piece.color === WHITE ? 1 : -1
    let [x,y] = this.board.letterToXY( coord )

    if( this.validSpace(this.board.grid[x][y+direction], piece.color) ){
      result.push( this.board.xyToLetter( x, y+1 ) )
    }
    if( this.validSpace(this.board.grid[x][y+(direction*2)], piece.color) ){
      result.push( this.board.xyToLetter( x, y+2 ) )
    }
    return result
  }

  knightMoves( piece, coord )  {
    let result = []

    return result
  }

  rookMoves( piece, coord )  {
    let result = []

    return result
  }

  bishopMoves( piece, coord )  {
    let result = []

    return result
  }

  queenMoves( piece, coord )  {
    let result = []

    return result
  }

  kingMoves( piece, coord )  {
    let result = []

    return result
  }

}