import React, { Component } from 'react'
import './css/tetris.css'
import {O,T,J,L,S,Z,I} from './shapes'

class Tetris extends Component {
  constructor(){
    super()
    this.state = {
      squares: this.initializeSquares(),
      tetrominoe: null,
      nextTetrominoe: this.randomShape(),
      location: null,
      rotation: 0,
      number: 0,
      play: false
    }
  }

  initializeSquares(){
    let squares = []
    for( let y = 1; y <= 24; y++ ){
      let row = []
      for( let x = 1; x <= 10; x++ ){
        row.push('Black')
      }
      squares.push(row)
    }
    return squares
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  randomShape(){
    let number = this.getRandomInt(1,8)
    if(number === 1){return new O}
    if(number === 2){return new T}
    if(number === 3){return new J}
    if(number === 4){return new L}
    if(number === 5){return new S}
    if(number === 6){return new Z}
    if(number === 7){return new I}
  }

  newShape(){
    this.setState(
      {
        tetrominoe: this.state.nextTetrominoe,
        nextTetrominoe: this.randomShape(),
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
    this.completeCheck()
    this.newShape()
  }

  completeCheck(){
    for(let i = 3; i < 24; i++){
      let complete = true
      this.state.squares[i].forEach( square => {
        if( square === 'Black' ){complete = false}
      })
      let currentState = this.state
      if( complete === true ){
        currentState.squares[i] = this.state.squares[i].map( square => square = 'Black')
        for( let j = i; j > 0; j--){
          currentState.squares[j] = JSON.parse(JSON.stringify(currentState.squares[j-1]))
        }
      }
      this.setState(currentState)
    }
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

  startGame(){
    this.setState({play: true})
    this.newShape()
    this.tick()
  }

  tick(){
    console.log('tick')
    this.down()
    setTimeout(() => this.tick,500)
  }

  render(){
    let squares = this.state.squares
    if( this.state.tetrominoe ){
      squares = this.displayTetrominoe( squares )
    }
    let squaresJSX = squares.map( (row, rowIndex ) => {
      if( rowIndex >= 4){
        let rowJSX = row.map( square => {
          let color = square
          if( square === 'Shape' ){
            color = this.state.tetrominoe.color
          }
          return <div className={`Square + ${color}`}/>
        })
        return <div className='Row'>{rowJSX}</div>
      }
    })


    return(
      <div onKeyPress={this.handleKeyPress.bind(this)}>
        {squaresJSX}
        <button onClick={this.startGame.bind(this)}>Start Game</button>
      </div>
    )
  }
}

export {Tetris}
