import React from 'react';
import './tictactoe.css';

export default class TicTacToe extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      ttt_player1_name : '',
      ttt_player2_name : '',
      ttt_player_select : <img src={require('url-loader?limit=10000!./ttt_player1_green_koopa.png')} />,
      ttt_player_query : <Player1_query />,
    ttt_landing_display : 'block',
      ttt_gameBoard_display : 'none'
    }

    this.KoopaGameBoard = KoopaGameBoard.bind(this);
    this.KoopaLandingScreen = KoopaLandingScreen.bind(this);
  }

  render(){

    let ttt_landing_display = this.state.ttt_landing_display
    let ttt_gameBoard_display = this.state.ttt_gameBoard_display
    console.log('ttt_landing_display ==> ',ttt_landing_display)
    return(
      <div className="tictactoe">
        <div style={{display:ttt_landing_display}}>
          {this.KoopaLandingScreen()}
        </div>
        <div style={{display:ttt_gameBoard_display}}>
          {this.KoopaGameBoard()}
        </div>
      </div>
    )
  }

}


const KoopaLandingScreen = function(){
  let player_select = this.state.ttt_player_select;
  let player_query = this.state.ttt_player_query;
  return <div className="ttt_koopaBoard" >
    <h3 className="app_LoveYa_font ttt_Landing_welcome_text">Welcome to</h3>
  <h1 className="app_LoveYa_font ttt_landing_title_text">Koopa Tic Tac Toe</h1>
  <div className="ttt_player_select_div">
    {player_select}
  </div>
    {player_query}
  </div>
}

const Player1_query = () => {
  return <div className="ttt_player1_query">
        <input className="ttt_name1_input" placeholder="Player1, Type your name"/>
        <button className="ttt_player1_name_btn">Enter</button>
      </div>
}

const Player2_query = () => {
  return <div className="ttt_player2_query">
        <input className="ttt_name2_input" placeholder="Player2, Type your name"/>
        <button className="ttt_player2_name_btn">Enter</button>
      </div>
}

const KoopaGameBoard = function(){
  return <div className="Tictactoe_board_container">
      <div className="tictactoe_board">
        <div className="app_LoveYa_font ttt_title">TicTacToe</div>
      <div className="ttt_first_column_container">
        <div className="ttt_Square ttt_first_column_first_row">X</div>
        <div className="ttt_Square ttt_first_column_second_row">X</div>
        <div className="ttt_Square ttt_first_column_third_row">X</div>
      </div>
      <div className="ttt_second_column_container">
        <div className="ttt_Square ttt_second_column_first_row">X</div>
        <div className="ttt_Square ttt_second_column_second_row">X</div>
        <div className="ttt_Square ttt_second_column_third_row">X</div>
      </div>
      <div  className="ttt_third_column_container">
        <div className="ttt_Square ttt_third_column_first_row">X</div>
        <div className="ttt_Square ttt_third_column_second_row">X</div>
        <div className="ttt_Square ttt_third_column_third_row">X</div>
      </div>
    </div>

    <div className="tictactoe_controls">
      <button className="app_LoveYa_font ttt_reset">Reset</button>
      <div className="ttt_player_container">
        <div className="ttt_player1_scores">
          <div className="app_LoveYa_font ttt_player1_title">Player 1</div>
          <div className="ttt_player1_score"></div>
        </div>
        <div className="ttt_player2_scores">
          <div className="app_LoveYa_font ttt_player2_title">Player 2</div>
          <div className="ttt_player2_score"></div>
        </div>
      </div>
    </div>

  </div>
}
