import React, { Component } from 'react'
import {Pawn, Bishop, Rook, Queen, King, Knight} from './classes/pieces'
import './css/board.css'


class Square{
  constructor(x,y){
    this.x = x
    this.y = y
    this.piece = 'Blank'
  }
}

class Game extends Component {
  constructor(){
    super()
    this.state = {
      board: this.initializeBoard(),
      selected: null,
      legalMoves: null,
      nextPlayer: 'White'
    }
    this.initializePieces()
  }

  initializeBoard(){
    let board = {}
    for( let y = 1; y <= 8; y++ ){
      board[y] = {}
      for( let x = 1; x <= 8; x++ ){
        board[y][x] = new Square(x,y)
      }
    }
    return board
  }

  initializePieces(){
    let board = this.state.board
    Object.values(board[7]).forEach( square => square.piece = new Pawn('White'))
    Object.values(board[2]).forEach( square => square.piece = new Pawn('Black'))
    board[1][3].piece = new Bishop('Black')
    board[1][6].piece = new Bishop('Black')
    board[8][3].piece = new Bishop('White')
    board[8][6].piece = new Bishop('White')
    board[1][2].piece = new Knight('Black')
    board[1][7].piece = new Knight('Black')
    board[8][2].piece = new Knight('White')
    board[8][7].piece = new Knight('White')
    board[1][1].piece = new Rook('Black')
    board[1][8].piece = new Rook('Black')
    board[8][1].piece = new Rook('White')
    board[8][8].piece = new Rook('White')
    board[1][5].piece = new Queen('Black')
    board[8][5].piece = new Queen('White')
    board[1][4].piece = new King('Black')
    board[8][4].piece = new King('White')
  }

  click(x,y){
    let board = this.state.board
    let square = board[y][x]
    if( this.state.selected && x === this.state.selected.x && y === this.state.selected.y){
      this.setState({selected: null})
      return
    }
    let piece = board[y][x].piece
    if( piece.color === this.state.nextPlayer){
      this.setState({selected: {x:x,y:y}, legalMoves: board[y][x].piece.legalMoves(x,y,board)})
      console.log('state.legalMoves',this.state.legalMoves)
      return
    }
    if(this.selectedSquare() && this.state.legalMoves.includes(square)){
      this.movePiece(x,y)
    }
    else if(piece !== 'Blank' && piece.color === this.state.nextPlayer){
      this.setState({selected: {x:x,y:y}, legalMoves: board[y][x].piece.legalMoves(x,y,board)})
      console.log('state.legalMoves',this.state.legalMoves)
    }
  }

  movePiece(x,y){
    this.selectedSquare().piece.moves++
    let currentState = this.state
    currentState.nextPlayer === "White" ? currentState.nextPlayer = "Black" : currentState.nextPlayer = "White"
    currentState.board[y][x].piece = this.selectedSquare().piece
    this.setState(currentState)
    this.selectedSquare().piece = 'Blank'
    this.setState({selected: null})
  }

  getLegalMoves(){
    let selected = this.state.selected
    return this.selectedSquare().piece.legalMoves(selected.x,selected.y,this.state.board)
  }

  selectedSquare(){
    if(this.state.selected){
      let board = this.state.board
      let selected = this.state.selected
      return board[selected.y][selected.x]
    }
    return null
  }


  render(){
    let boardRender = Object.values(this.state.board).reverse().map( (row, index) => {
      let rowJSX = Object.values(row).map( square => {
        let classesArray = []
        classesArray.push(square.piece.name)
        ;(square.x + square.y) % 2 === 1 ? classesArray.push('WhiteSquare') : classesArray.push('BlackSquare')
        if( this.selectedSquare() === square){ classesArray.push('Highlight')}
        if( this.state.selected && this.state.legalMoves.includes(square)){ classesArray.push('Highlight')}
        if( square.piece ){ classesArray.push( square.piece.color )}
        let classes = classesArray.join(' ')

        return (<div key={square.x+square.y}>
                  <button onClick={() => this.click(square.x,square.y)} className={`Square + ${classes}`}>
                  </button>
                </div>
                )
      })
      return <div className="Row" key={index}>{rowJSX}</div>
    })

    return(
      <div className="Board">
        {boardRender}
      </div>
    )
  }
}

export default Game
