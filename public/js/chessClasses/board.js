class Board {
  constructor( x, y ) {
    this.grid = []
    for( let i = 0; i < x; i++ ){
      this.grid[i] = []
      for( let j = 0; j < y; j++){
        this.grid[i][j] = 'x'
      }
    }
  }

  getSpace( coord ){
    let [x,y] = this.translateCoordinate( coord )
    return this.grid[x][y]
  }

  setSpace( coord, val ){
    let [x,y] = this.translateCoordinate( coord )

    this.grid[x][y] = val
  }

  translateCoordinate( coord ){
    const x = coord[0].charCodeAt() - 97
    const y = coord[1] - 1

    return [x,y]
  }

   map2d( fxnSquare, fxnRow ) {
    for( let i in this.grid ){
      if( fxnRow ){
        fxnRow( this.grid[i], i, this.grid )
      }
      for( let j in this.grid[i] ){
        fxnSquare( this.grid[i][j], i, j, this.grid )
      }
    }
  }
}