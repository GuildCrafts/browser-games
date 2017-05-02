import React from 'react';
import './tictactoe.css';

export default class TicTacToe extends React.Component{
  render(){
    return(
      <div className="tictactoe">

        <div className="tictactoe_board">
          <div className="ttt_title">TicTacToe</div>
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
          <button className="ttt_reset">Reset</button>
        <div className="ttt_player_container">
            <div className="ttt_player1_scores">
              <div className="ttt_player1_title">Player 1</div>
              <div className="ttt_player1_score"></div>
            </div>
            <div className="ttt_player2_scores">
              <div className="ttt_player2_title">Player 2</div>
              <div className="ttt_player2_score"></div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
