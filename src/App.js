import React, { Component } from 'react'
import './css/tetris.css'
import {T} from './classes'

class Game extends Component {
  constructor(){
    super()
    this.state = {
      squares: this.initializeSquares(),
      tetrominoe: null,
      location: null,
      rotation: 0,
      number: 0
    }
  }

  initializeSquares(){
    let squares = []
    for( let y = 1; y <= 20; y++ ){
      let row = []
      for( let x = 1; x <= 10; x++ ){
        row.push('Black')
      }
      squares.push(row)
    }
    return squares
  }

  newShape(){
    this.setState(
      {
        tetrominoe: new T,
        location:[0,4],
        rotation:0
      }
    )
  }

  displayTetrominoe( squares ){
    this.state.tetrominoe.shape[this.state.rotation].forEach( (row, rowIndex) => {
      row.forEach( (square, squareIndex) => {
        if( square ){
          squares[this.state.location[0]+rowIndex][this.state.location[1]+squareIndex] = 'Shape'
        }
      })
    })
    return squares
  }

  undisplayTetrominoe( squares ){
    this.state.tetrominoe.shape[this.state.rotation].forEach( (row, rowIndex) => {
      row.forEach( (square, squareIndex) => {
        if( square ){
          squares[this.state.location[0]+rowIndex][this.state.location[1]+squareIndex] = 'Black'
        }
      })
    })
    return squares
  }

  rotate(){
    this.setState(
      {
        rotation: (this.state.rotation + 1) % 4,
        squares: this.undisplayTetrominoe( this.state.squares )
      }
    )
  }

  move( direction ){
    this.setState(
      {
        location: [(this.state.location[0]),this.state.location[1] + direction],
        squares: this.undisplayTetrominoe( this.state.squares )
      }
    )
  }

  down(){
    this.setState(
      {
        location: [(this.state.location[0] + 1),this.state.location[1]],
        squares: this.undisplayTetrominoe( this.state.squares )
      }
    )
  }

  collisionLeft(){
    let collision = false
    this.state.tetrominoe.shape[this.state.rotation].forEach( (row, rowIndex) => {
      row.forEach( (square, squareIndex) => {
        if( square ){
          let squareToLeft = this.state.squares[this.state.location[0]+rowIndex][this.state.location[1]+squareIndex-1]
          if( squareToLeft !== 'Shape' ){
            if( !squareToLeft || squareToLeft !== 'Black' ){
              collision = true
            }
          }
        }
      })
    })
    return collision
  }

  collisionRight(){
    let collision = false
    this.state.tetrominoe.shape[this.state.rotation].forEach( (row, rowIndex) => {
      row.forEach( (square, squareIndex) => {
        if( square ){
          let squareToRight = this.state.squares[this.state.location[0]+rowIndex][this.state.location[1]+squareIndex+1]
          if( squareToRight !== 'Shape' ){
            if( !squareToRight || squareToRight !== 'Black' ){
              collision = true
            }
          }
        }
      })
    })
    return collision
  }

  collisionDown(){
    let collision = false
    this.state.tetrominoe.shape[this.state.rotation].forEach( (row, rowIndex) => {
      row.forEach( (square, squareIndex) => {
        if( square ){
          if( !this.state.squares[this.state.location[0]+rowIndex+1] ){
            collision = true
          }else{
            let squareBellow = this.state.squares[this.state.location[0]+rowIndex+1][this.state.location[1]+squareIndex]
            if( squareBellow !== 'Shape' ){
              if( !squareBellow || squareBellow !== 'Black' ){
                collision = true
              }
            }
          }
        }
      })
    })
    if( collision ){
      this.setTetrominoe()
    }
    return collision
  }

  collisionRotate(){
    let collision = false
    this.state.tetrominoe.shape[(this.state.rotation + 1)%4].forEach( (row, rowIndex) => {
      row.forEach( (square, squareIndex) => {
        if( square ){
          if( !this.state.squares[this.state.location[0]+rowIndex] ){
            collision = true
          }else if( !this.state.squares[this.state.location[0]+rowIndex][this.state.location[1]+squareIndex] ){
            collision = true
          }else if( this.state.squares[this.state.location[0]+rowIndex][this.state.location[1]+squareIndex] !== 'Black' ){
            if( this.state.squares[this.state.location[0]+rowIndex][this.state.location[1]+squareIndex] !== 'Shape'){
              collision = true
            }
          }
        }
      })
    })
    return collision
  }

  setTetrominoe(){
    let currentState = this.state
    currentState.tetrominoe.shape[currentState.rotation].forEach( (row, rowIndex) => {
      row.forEach( (square, squareIndex) => {
        if( square ){
          currentState.squares[currentState.location[0]+rowIndex][currentState.location[1]+squareIndex] = currentState.tetrominoe.color
        }
      })
    })
    currentState.rotation = 0
    currentState.location = null
    currentState.tetrominoe = null
    this.setState( currentState )
    this.newShape()
  }

  handleKeyPress(event){
    if(event.key === 'w' && !this.collisionRotate()){
      this.rotate()
    }
    if(event.key === 'a' && !this.collisionLeft()){
      this.move( -1 )
    }
    if(event.key === 'd' && !this.collisionRight()){
      this.move( 1 )
    }
    if(event.key === 's' && !this.collisionDown()){
      this.down()
    }
  }

  render(){
    let squares = this.state.squares
    if( this.state.tetrominoe ){
      squares = this.displayTetrominoe( squares )
    }
    let squaresJSX = squares.map( row => {
      let rowJSX = row.map( square => {
        let color = square
        if( square === 'Shape' ){
          color = this.state.tetrominoe.color
        }
        return <div className={`Square + ${color}`}/>
      })
      return <div className='Row'>{rowJSX}</div>
    })


    return(
      <div onKeyPress={this.handleKeyPress.bind(this)}>
        {squaresJSX}
        <button onClick={this.newShape.bind(this)}>Start Game</button>
      </div>

    )
  }
}

export default Game
