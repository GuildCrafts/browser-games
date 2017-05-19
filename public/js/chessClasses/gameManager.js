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
    } else if( !clickedMyPiece && this.selected && this.legalSpaces.includes(coord)){
      this.movePiece( this.selected.coord , coord )
      if( this.selected.piece.type === PAWN && ( coord[1] === '1' || coord[1] === '8')){
        this.pawnPromotion( this.selected.piece )
      }
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
      king: () => this.kingMoves(piece, coord),
      queen: () => this.queenMoves(piece, coord),
      bishop: () => this.bishopMoves(piece, coord),
      rook: () => this.rookMoves(piece, coord),
      knight: () => this.knightMoves(piece, coord),
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
  //Replace these with FEN string readers.
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

  validSpace ( xy, color) {
    if( xy[0] > -1 && xy[0] < this.board.grid.length){
      let square = this.board.grid[xy[0]][xy[1]]
      if( !square || square.color !== color ){
        return true
      }
    }
    return false
  }

  //These are messy and could use some cleanup
  pawnMoves(piece, coord )  {
    let result = []
    let direction = piece.color === WHITE ? 1 : -1
    let [x,y] = this.board.letterToXY( coord )
    let searchSpace = [ [x, y+(1*direction)] ]
    if( y === 1 || y === 6){
      searchSpace.push( [x, y+(2*direction)] )
    }
    let attackSpace = [ [x+1,y+(1*direction)], [x-1,y+(1*direction)]]

    searchSpace.forEach( (xy) => {
      if( this.validSpace( xy, piece.color) && !this.board.grid[xy[0]][xy[1]] ){
        result.push( this.board.xyToLetter( xy[0], xy[1] ) )
      }
    })
    attackSpace.forEach( (xy) => {
      if( this.validSpace( xy, piece.color) && this.board.grid[xy[0]][xy[1]] ){
        result.push( this.board.xyToLetter( xy[0], xy[1] ) )
      }
    })
    return result
  }

  knightMoves( piece, coord )  {
    let result = []
    let [x,y] = this.board.letterToXY( coord )
    let searchSpace = [
      [x+2, y+1],
      [x+2, y-1],
      [x-2, y+1],
      [x-2, y-1],
      [x-1, y+2],
      [x+1, y+2],
      [x-1, y-2],
      [x+1, y-2]
    ]
    searchSpace.forEach( (xy) => {
      if( this.validSpace( xy, piece.color) ){
        result.push( this.board.xyToLetter( xy[0], xy[1] ) )
      }
    })
    return result
  }

  kingMoves( piece, coord )  {
    let result = []
    let [x,y] = this.board.letterToXY( coord )
    let searchSpace = [
      [x+1, y],
      [x+1, y+1],
      [x, y+1],
      [x-1, y+1],
      [x-1, y],
      [x-1, y-1],
      [x, y-1],
      [x+1, y-1]
    ]
    searchSpace.forEach( (xy) => {
      if( this.validSpace( xy, piece.color) ){
        result.push( this.board.xyToLetter( xy[0], xy[1] ) )
      }
    })
    return result
  }

  rookMoves( piece, coord )  {
    let result = []
    let [x,y] = this.board.letterToXY( coord )
    let directions = [
      [1,0],
      [-1,0],
      [0,1],
      [0,-1]
    ]
    directions.forEach( (direction) => {
      result = result.concat( this.iterateDirection( [x,y], direction, piece ))
    })
    return result
  }

  bishopMoves( piece, coord )  {
    let result = []
    let [x,y] = this.board.letterToXY( coord )
    let directions = [
      [1,1],
      [-1,-1],
      [-1,1],
      [1,-1]
    ]
    directions.forEach( (direction) => {
      result = result.concat( this.iterateDirection( [x,y], direction, piece ))
    })
    return result
  }

  queenMoves( piece, coord )  {
    let result = []
    let [x,y] = this.board.letterToXY( coord )
    let directions = [
      [1,0],
      [-1,0],
      [0,1],
      [0,-1],
      [1,1],
      [-1,-1],
      [-1,1],
      [1,-1]
    ]
    directions.forEach( (direction) => {
      result = result.concat( this.iterateDirection( [x,y], direction, piece ))
    })
    return result
  }

  iterateDirection( xy, direction, piece ){
    let result = []

    while( true ){
      //advance the square
      xy = [ xy[0]+(1*direction[0]), xy[1]+(1*direction[1]) ]
      //check out of bounds
      if( this.xyOutOfBounds( xy )){
        break
      }
      if( this.validSpace( xy, piece.color) ){
        result.push( this.board.xyToLetter( xy[0], xy[1] ) )
      }
      //we've hit another piece and must stop
      if( this.board.grid[xy[0]][xy[1]] ){
        break
      }
    }
    return result
  }

  xyOutOfBounds( xy ){
    return xy[0] < 0 || xy[0] > 7 || xy[1] < 0 || xy[1] > 7
  }

  pawnPromotion( piece ){
    let input = window.prompt('Promote Pawn!  Enter R, B, K, or Q')
    switch( input ){
      case 'r':
      case 'R':
        piece.type = ROOK
        break
      case 'b':
      case 'B':
        piece.type = BISHOP
        break
      case 'k':
      case 'K':
        piece.type = KNIGHT
        break
      default:
        piece.type = QUEEN
    }
  }

}