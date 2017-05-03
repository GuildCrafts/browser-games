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
      ttt_landing_display : 'none',
      ttt_gameBoard_display : 'block',
      ttt_winner : '',
      ttt_player_turn : 'player 1',
      ttt_board : ['','','','','','','','',''],
      ttt_player1_score : 0,
      ttt_player2_score : 0
    }

    this.KoopaGameBoard = KoopaGameBoard.bind(this);
    this.KoopaLandingScreen = KoopaLandingScreen.bind(this);
    this.tttUpdateBoard = this.tttUpdateBoard.bind(this);
    this.tttCheckForSolutions = this.tttCheckForSolutions.bind(this);
  }

  tttCheckForSolutions(){
    // e.preventDefault();
    let ttt_board = this.state.ttt_board;
    let player = this.state.ttt_player_turn;
    let ttt_player1_score = this.state.ttt_player1_score;
    let ttt_player2_score = this.state.ttt_player2_score;
    console.log('ttt_board: ',ttt_board)
    if(ttt_board[0] !== '' && ttt_board[0] === ttt_board[1] && ttt_board[0] === ttt_board[2]){
      console.log('winner: ', ttt_board[0])
      player === 'player 1' ? ttt_player1_score++ : ttt_player2_score++;
      this.setState({
        ttt_winner : ttt_board[0],
        ttt_board : ['','','','','','','','',''],
        ttt_player1_score : ttt_player1_score,
        ttt_player2_score : ttt_player2_score
      })
      if(ttt_player1_score >= 5 || ttt_player2_score >= 5){
        console.log('GAME OVER')
        console.log('winner: ',player)
      }
      return;
    } else if (ttt_board[0] !== '' && ttt_board[0] === ttt_board[3] && ttt_board[0] === ttt_board[6]){
      console.log('winner: ', ttt_board[0])
      player === 'player 1' ? ttt_player1_score++ : ttt_player2_score++;
      this.setState({
        ttt_winner : ttt_board[0],
        ttt_board : ['','','','','','','','',''],
        ttt_player1_score : ttt_player1_score,
        ttt_player2_score : ttt_player2_score
      })
      if(ttt_player1_score >= 5 || ttt_player2_score >= 5){
        console.log('GAME OVER')
        console.log('winner: ',player)
      }
      return;
    } else if (ttt_board[0] !== '' && ttt_board[0] === ttt_board[4] && ttt_board[0] === ttt_board[8]){
      console.log('winner: ', ttt_board[0])
      player === 'player 1' ? ttt_player1_score++ : ttt_player2_score++;
      this.setState({
        ttt_winner : ttt_board[0],
        ttt_board : ['','','','','','','','',''],
        ttt_player1_score : ttt_player1_score,
        ttt_player2_score : ttt_player2_score
      })
      if(ttt_player1_score >= 5 || ttt_player2_score >= 5){
        console.log('GAME OVER')
        console.log('winner: ',player)
      }
      return;
    }  else if (ttt_board[4] !== '' && ttt_board[4] === ttt_board[1] && ttt_board[4] === ttt_board[7]){
      console.log('winner: ', ttt_board[4])
      player === 'player 1' ? ttt_player1_score++ : ttt_player2_score++;
      this.setState({
        ttt_winner : ttt_board[0],
        ttt_board : ['','','','','','','','',''],
        ttt_player1_score : ttt_player1_score,
        ttt_player2_score : ttt_player2_score
      })
      if(ttt_player1_score >= 5 || ttt_player2_score >= 5){
        console.log('GAME OVER')
        console.log('winner: ',player)
      }
      return;
    } else if (ttt_board[4] !== '' && ttt_board[4] === ttt_board[3] && ttt_board[4] === ttt_board[5]){
      console.log('winner: ', ttt_board[4])
      player === 'player 1' ? ttt_player1_score++ : ttt_player2_score++;
      this.setState({
        ttt_winner : ttt_board[0],
        ttt_board : ['','','','','','','','',''],
        ttt_player1_score : ttt_player1_score,
        ttt_player2_score : ttt_player2_score
      })
      if(ttt_player1_score >= 5 || ttt_player2_score >= 5){
        console.log('GAME OVER')
        console.log('winner: ',player)
      }
      return;
    } else if (ttt_board[4] !== '' && ttt_board[4] === ttt_board[2] && ttt_board[4] === ttt_board[6]){
      console.log('winner: ', ttt_board[4])
      player === 'player 1' ? ttt_player1_score++ : ttt_player2_score++;
      this.setState({
        ttt_winner : ttt_board[0],
        ttt_board : ['','','','','','','','',''],
        ttt_player1_score : ttt_player1_score,
        ttt_player2_score : ttt_player2_score
      })
      if(ttt_player1_score >= 5 || ttt_player2_score >= 5){
        console.log('GAME OVER')
        console.log('winner: ',player)
      }
      return;
    } else if (ttt_board[8] !== '' && ttt_board[8] === ttt_board[5] && ttt_board[8] === ttt_board[2]){
      console.log('winner: ', ttt_board[8])
      player === 'player 1' ? ttt_player1_score++ : ttt_player2_score++;
      this.setState({
        ttt_winner : ttt_board[0],
        ttt_board : ['','','','','','','','',''],
        ttt_player1_score : ttt_player1_score,
        ttt_player2_score : ttt_player2_score
      })
      if(ttt_player1_score >= 5 || ttt_player2_score >= 5){
        console.log('GAME OVER')
        console.log('winner: ',player)
      }
      return;
    } else if (ttt_board[8] !== '' && ttt_board[8] === ttt_board[6] && ttt_board[8] === ttt_board[7]){``
      console.log('winner: ', ttt_board[8])
      player === 'player 1' ? ttt_player1_score++ : ttt_player2_score++;
      this.setState({
        ttt_winner : ttt_board[0],
        ttt_board : ['','','','','','','','',''],
        ttt_player1_score : ttt_player1_score,
        ttt_player2_score : ttt_player2_score
      })
      if(ttt_player1_score >= 5 || ttt_player2_score >= 5){
        console.log('GAME OVER')
        console.log('winner: ',player)
      }
      return;
    }
    console.log('ttt_player1_score ======> ', ttt_player1_score)
    console.log('ttt_player2_score ======> ', ttt_player2_score)
  }

  tttUpdateBoard( boardPosition ){
    console.log('this.state.ttt_player_turn => ', this.state.ttt_player_turn)
    let ttt_board = this.state.ttt_board
    if( ttt_board.includes(boardPosition) ){
      console.log('pick a different square')
      return;
    }

    let player = this.state.ttt_player_turn;

    ttt_board[ boardPosition ] = player;

    player === 'player 1' ? player = 'player 2' : player = 'player 1';
    this.setState({
      ttt_player_turn : player
    })
    console.log('this.state.ttt_board => ', this.state.ttt_board)
    this.tttCheckForSolutions();

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
        <input className="app_LoveYa_font ttt_name1_input" placeholder="Player1, Type your name"/>
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
        <div onClick={() => this.tttUpdateBoard(0)} className="ttt_Square ttt_first_row_first_column ttt_pos_zero">0</div>
      <div onClick={() => this.tttUpdateBoard(1)} className="ttt_Square ttt_first_row_second_column ttt_pos_one">1</div>
    <div onClick={() => this.tttUpdateBoard(2)} className="ttt_Square ttt_first_row_third_column ttt_pos_two">2</div>
      </div>
      <div className="ttt_second_column_container">
        <div onClick={() => this.tttUpdateBoard(3)} className="ttt_Square ttt_second_row_first_column ttt_pos_three">3</div>
      <div onClick={() => this.tttUpdateBoard(4)} className="ttt_Square ttt_second_row_second_column ttt_pos_four">4</div>
    <div onClick={() => this.tttUpdateBoard(5)} className="ttt_Square ttt_second_row_third_column ttt_pos_five">5</div>
      </div>
      <div  className="ttt_third_column_container">
        <div onClick={() => this.tttUpdateBoard(6)} className="ttt_Square ttt_third_row_first_column ttt_pos_six">6</div>
      <div onClick={() => this.tttUpdateBoard(7)} className="ttt_Square ttt_third_row_second_column ttt_pos_seven">7</div>
    <div onClick={() => this.tttUpdateBoard(8)} className="ttt_Square ttt_third_row_third_column ttt_pos_eight">8</div>
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
