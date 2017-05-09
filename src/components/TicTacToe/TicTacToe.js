import React from 'react';
import './tictactoe.css';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';


export default class TicTacToe extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      ttt_player1_name : '',
      ttt_player2_name : '',
      ttt_player_query : <Player1_query />,
      ttt_landing_display : 'block',
      ttt_player2Select_display : 'none',
      ttt_gameBoard_display : 'none',
      ttt_gameover_display : 'none',
      ttt_player_turn : 'player 1',
      ttt_board : ['','','','','','','','',''],
      ttt_player1_score : 0,
      ttt_player2_score : 0,
      ttt_winner : '',
      ttt_insert_shell_at_position : ['','','','','','','',''],
      ttt_ingame_msg : "player 1's turn",
      ttt_display_none : 'none',
      ttt_input_val : ''
    }

    this.KoopaGameBoard = KoopaGameBoard.bind(this);
    this.KoopaLandingScreen = KoopaLandingScreen.bind(this);
    this.KoopaPlayer2SelectScreen = KoopaPlayer2SelectScreen.bind(this);
    this.KoopaGameOver = KoopaGameOver.bind(this);
    this.tttUpdateBoard = this.tttUpdateBoard.bind(this);
    this.tttCheckForSolutions = this.tttCheckForSolutions.bind(this);
    this.tttResetGame = this.tttResetGame.bind(this);
    this.tttQuitGame = this.tttQuitGame.bind(this);
    this.tttFill = this.tttFill.bind(this);
    this.tttWinnerWasFound = this.tttWinnerWasFound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.tttStorePlayerName = this.tttStorePlayerName.bind(this);
    this.Player1_query = Player1_query.bind(this);
    this.Player2_query = Player2_query.bind(this);
    this.tttSaveInput = this.tttSaveInput.bind(this);
  }

  tttFill( boardPos ){
    let piece;
    let player = this.state.ttt_player_turn;
    let winningColors = this.state.ttt_winningColors;
    let ttt_insert_shell_at_position = this.state.ttt_insert_shell_at_position;
    player === 'player 1' ? piece = <img src={require('url-loader?limit=10000!./images/x_green_koopa_shell.png')} /> : piece = <img src={require('url-loader?limit=10000!./images/y_red_koopa_shell.png')} />

   ttt_insert_shell_at_position[boardPos] = piece;

   let playerUpNext;
   player === 'player 1' ? playerUpNext = 'player 2' : playerUpNext = 'player 1';
   let message = playerUpNext+"'s turn";

   this.setState({
     ttt_insert_shell_at_position : ttt_insert_shell_at_position,
     ttt_ingame_msg : message
   })
  }

  tttWinnerWasFound(pos1, pos2, pos3){
    let ttt_insert_shell_at_position = this.state.ttt_insert_shell_at_position
    pos1 = parseInt(pos1)
    pos2 = parseInt(pos2)
    pos3 = parseInt(pos3)

    ttt_insert_shell_at_position[pos1] = <img src={require('url-loader?limit=10000!./images/x_green_koopa_shell.png')} /> ? ttt_insert_shell_at_position[pos1] = <img src={require('url-loader?limit=10000!./images/x_green_koopa_shell.png')} className="ttt_winning_colors" /> : ttt_insert_shell_at_position[pos1] = <img src={require('url-loader?limit=10000!./images/y_red_koopa_shell.png')} className="ttt_winning_colors" />

    ttt_insert_shell_at_position[pos2] === <img src={require('url-loader?limit=10000!./images/x_green_koopa_shell.png')} /> ? ttt_insert_shell_at_position[pos2] = <img src={require('url-loader?limit=10000!./images/x_green_koopa_shell.png')} className="ttt_winning_colors" /> : ttt_insert_shell_at_position[pos2] = <img src={require('url-loader?limit=10000!./images/y_red_koopa_shell.png')} className="ttt_winning_colors" />

    ttt_insert_shell_at_position[pos3] === <img src={require('url-loader?limit=10000!./images/x_green_koopa_shell.png')} /> ? ttt_insert_shell_at_position[pos3] = <img src={require('url-loader?limit=10000!./images/x_green_koopa_shell.png')} className="ttt_winning_colors" /> : ttt_insert_shell_at_position[pos3] = <img src={require('url-loader?limit=10000!./images/y_red_koopa_shell.png')} className="ttt_winning_colors" />

    this.setState({
      ttt_insert_shell_at_position : ttt_insert_shell_at_position
    })

    this.setState({ ttt_insert_shell_at_position : ['','','','','','','','']})

  }

  tttResetGame(){
    this.setState({
      ttt_landing_display : 'none',
      ttt_player2Select_display : 'none',
      ttt_gameBoard_display : 'block',
      ttt_gameover_display : 'none',
      ttt_player_turn : 'player 1',
      ttt_board : ['','','','','','','','',''],
      ttt_player1_score : 0,
      ttt_player2_score : 0,
      ttt_insert_shell_at_position : ['','','','','','','','']
    })
  }

  tttQuitGame(){
    this.setState({
      ttt_player1_name : '',
      ttt_player2_name : '',
      ttt_player_query : <Player1_query />,
      ttt_landing_display : 'block',
      ttt_player2Select_display : 'none',
      ttt_gameBoard_display : 'none',
      ttt_gameover_display : 'none',
      ttt_player_turn : 'player 1',
      ttt_board : ['','','','','','','','',''],
      ttt_player1_score : 0,
      ttt_player2_score : 0,
      ttt_insert_shell_at_position : ['','','','','','','','']
    })
  }

  tttCheckForSolutions(){
    let ttt_board = this.state.ttt_board;
    let player = this.state.ttt_player_turn;
    let ttt_player1_score = this.state.ttt_player1_score;
    let ttt_player2_score = this.state.ttt_player2_score;
    console.log('ttt_board: ',ttt_board)

    if(ttt_board[0] !== '' && ttt_board[0] === ttt_board[1] && ttt_board[0] === ttt_board[2]){
      console.log('winner: ', ttt_board[0])
      player === 'player 1' ? ttt_player1_score++ : ttt_player2_score++;

      this.tttWinnerWasFound(0,1,2);

      this.setState({
        ttt_board : ['','','','','','','','',''],
        ttt_insert_shell_at_position : ['','','','','','','',''],
        ttt_player1_score : ttt_player1_score,
        ttt_player2_score : ttt_player2_score
      })
    } else if (ttt_board[0] !== '' && ttt_board[0] === ttt_board[3] && ttt_board[0] === ttt_board[6]){
      console.log('winner: ', ttt_board[0])
      player === 'player 1' ? ttt_player1_score++ : ttt_player2_score++;

      this.tttWinnerWasFound(0,3,6);

      this.setState({
        ttt_board : ['','','','','','','','',''],
        ttt_insert_shell_at_position : ['','','','','','','',''],
        ttt_player1_score : ttt_player1_score,
        ttt_player2_score : ttt_player2_score
      })
    } else if (ttt_board[0] !== '' && ttt_board[0] === ttt_board[4] && ttt_board[0] === ttt_board[8]){
      console.log('winner: ', ttt_board[0])
      player === 'player 1' ? ttt_player1_score++ : ttt_player2_score++;

      this.tttWinnerWasFound(0,4,8);

      this.setState({
        ttt_board : ['','','','','','','','',''],
        ttt_insert_shell_at_position : ['','','','','','','',''],
        ttt_player1_score : ttt_player1_score,
        ttt_player2_score : ttt_player2_score
      })
    }  else if (ttt_board[4] !== '' && ttt_board[4] === ttt_board[1] && ttt_board[4] === ttt_board[7]){
      console.log('winner: ', ttt_board[4])
      player === 'player 1' ? ttt_player1_score++ : ttt_player2_score++;

      this.tttWinnerWasFound(4,1,7);

      this.setState({
        ttt_board : ['','','','','','','','',''],
        ttt_insert_shell_at_position : ['','','','','','','',''],
        ttt_player1_score : ttt_player1_score,
        ttt_player2_score : ttt_player2_score
      })
    } else if (ttt_board[4] !== '' && ttt_board[4] === ttt_board[3] && ttt_board[4] === ttt_board[5]){
      console.log('winner: ', ttt_board[4])
      player === 'player 1' ? ttt_player1_score++ : ttt_player2_score++;

      this.tttWinnerWasFound(4,3,5);

      this.setState({
        ttt_board : ['','','','','','','','',''],
        ttt_insert_shell_at_position : ['','','','','','','',''],
        ttt_player1_score : ttt_player1_score,
        ttt_player2_score : ttt_player2_score
      })
    } else if (ttt_board[4] !== '' && ttt_board[4] === ttt_board[2] && ttt_board[4] === ttt_board[6]){
      console.log('winner: ', ttt_board[4])
      player === 'player 1' ? ttt_player1_score++ : ttt_player2_score++;

      this.tttWinnerWasFound(4,2,6);

      this.setState({
        ttt_board : ['','','','','','','','',''],
        ttt_insert_shell_at_position : ['','','','','','','',''],
        ttt_player1_score : ttt_player1_score,
        ttt_player2_score : ttt_player2_score
      })
    } else if (ttt_board[8] !== '' && ttt_board[8] === ttt_board[5] && ttt_board[8] === ttt_board[2]){
      console.log('winner: ', ttt_board[8])
      player === 'player 1' ? ttt_player1_score++ : ttt_player2_score++;

      this.tttWinnerWasFound(8,5,2);

      this.setState({
        ttt_board : ['','','','','','','','',''],
        ttt_insert_shell_at_position : ['','','','','','','',''],
        ttt_player1_score : ttt_player1_score,
        ttt_player2_score : ttt_player2_score
      })
    } else if (ttt_board[8] !== '' && ttt_board[8] === ttt_board[6] && ttt_board[8] === ttt_board[7]){``
      console.log('winner: ', ttt_board[8])
      player === 'player 1' ? ttt_player1_score++ : ttt_player2_score++;

      this.tttWinnerWasFound(8,6,7);

      this.setState({
        ttt_board : ['','','','','','','','',''],
        ttt_insert_shell_at_position : ['','','','','','','',''],
        ttt_player1_score : ttt_player1_score,
        ttt_player2_score : ttt_player2_score
      })
    }

    console.log('ttt_player1_score ======> ', ttt_player1_score)
    console.log('ttt_player2_score ======> ', ttt_player2_score)

    if(ttt_player1_score >= 3 || ttt_player2_score >= 3){
      console.log('GAME OVER')
      console.log('winner: ',player)

      let game_winner;
      let player1_name = this.state.ttt_player1_name;
      let player2_name = this.state.ttt_player2_name;

      if (ttt_player1_score > ttt_player2_score){
        game_winner = player1_name;
      } else {
        game_winner = player2_name;
      }
      this.setState({
        ttt_landing_display : 'none',
        ttt_player2Select_display : 'none',
        ttt_gameBoard_display : 'none',
        ttt_gameover_display : 'block',
        ttt_winner : game_winner
      })
    }
    return;
  }

  tttUpdateBoard( boardPosition ){
    console.log('this.state.ttt_player_turn => ', this.state.ttt_player_turn)

    let ttt_board = this.state.ttt_board

    if(ttt_board[boardPosition] !== ''){
      console.log('pick another square')
      return
    }

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

    this.tttFill( boardPosition );
    this.tttCheckForSolutions();

  }

  handleKeyPress(e){
    if(e.key == 'Enter'){
      this.tttStorePlayerName(e)
    }
  }

  tttStorePlayerName(e){

    e.preventDefault();

    if(this.state.ttt_player1_name === ''){
      this.refs.player1_name_input.value = '';
      let player1_name_input = this.state.ttt_input_val;
      this.setState({
        ttt_player1_name : player1_name_input,
        ttt_input_val : '',
        ttt_landing_display : 'none',
        ttt_player2Select_display : 'block'
      })
    }
    if(this.state.ttt_player1_name !== ''){
      this.refs.player2_name_input.value = '';
      let player2_name_input = this.state.ttt_input_val;
      this.setState({
        ttt_player2_name : player2_name_input,
        ttt_input_val : '',
        ttt_player2Select_display : 'none',
        ttt_gameBoard_display : 'block',
      })
    }

  }

  tttSaveInput(e){
    let targetValue = e.target.value
    this.setState({
      ttt_input_val : targetValue
    })
  }

  render(){

    let ttt_landing_display = this.state.ttt_landing_display;
    let ttt_player2Select_display = this.state.ttt_player2Select_display;
    let ttt_gameBoard_display = this.state.ttt_gameBoard_display;
    let ttt_gameover_display = this.state.ttt_gameover_display;

    return(
      <div>
        <Nav/>
          <div className="tictactoe">
            <div style={{display:ttt_landing_display}}>
              {this.KoopaLandingScreen()}
            </div>
            <div style={{display:ttt_player2Select_display}}>
              {this.KoopaPlayer2SelectScreen()}
            </div>
            <div style={{display:ttt_gameBoard_display}}>
              {this.KoopaGameBoard()}
            </div>
            <div style={{display:ttt_gameover_display}}>
              {this.KoopaGameOver()}
            </div>
          </div>
        <Footer/>
      </div>
    )
  }

}


const KoopaLandingScreen = function(){

  return <div className="ttt_koopaBoard" >
    <h3 className="app_LoveYa_font ttt_Landing_welcome_text">Welcome to</h3>
  <h1 className="app_LoveYa_font ttt_landing_title_text">Koopa Tic Tac Toe</h1>
  <div className="ttt_player_select_div">
    <img src={require('url-loader?limit=10000!./images/ttt_player1_green_koopa.png')} />
  </div>
    {this.Player1_query()}
  </div>
}

const KoopaPlayer2SelectScreen = function(){

  return <div className="ttt_koopaBoard" >
    <h3 className="app_LoveYa_font ttt_Landing_welcome_text">Welcome to</h3>
  <h1 className="app_LoveYa_font ttt_landing_title_text">Koopa Tic Tac Toe</h1>
  <div className="ttt_player_select_div">
    <img src={require('url-loader?limit=10000!./images/ttt_player2_red_koopa.png')} />
  </div>
    {this.Player2_query()}
  </div>
}

const Player1_query = function(){

  return <div className="ttt_player1_query">
      <input className="ttt_name1_input" placeholder="Player1, Type your name" onChange={this.tttSaveInput} onKeyPress={this.handleKeyPress} ref="player1_name_input"/>
      <button className="ttt_player1_name_btn" onClick={this.tttStorePlayerName}>Enter</button>
    </div>

}

const Player2_query = function(){

  return <div className="ttt_player2_query">
    <input className="ttt_name2_input" placeholder="Player2, Type your name" onChange={this.tttSaveInput} onKeyPress={this.handleKeyPress} ref="player2_name_input"/>
    <button className="ttt_player2_name_btn" onClick={this.tttStorePlayerName}>Enter</button>
  </div>

}

const KoopaGameBoard = function(){
  return <div className="tictactoe_board_container">
      <div className="tictactoe_board">
        <div className="app_LoveYa_font ttt_title">TicTacToe</div>
      <div className="ttt_first_column_container">
        <div onClick={() => this.tttUpdateBoard(0)} className="ttt_Square ttt_first_row_first_column ttt_pos_zero">{this.state.ttt_insert_shell_at_position[0]}</div>
      <div onClick={() => this.tttUpdateBoard(1)} className="ttt_Square ttt_first_row_second_column ttt_pos_one">{this.state.ttt_insert_shell_at_position[1]}</div>
    <div onClick={() => this.tttUpdateBoard(2)} className="ttt_Square ttt_first_row_third_column ttt_pos_two">{this.state.ttt_insert_shell_at_position[2]}</div>
      </div>
      <div className="ttt_second_column_container">
        <div onClick={() => this.tttUpdateBoard(3)} className="ttt_Square ttt_second_row_first_column ttt_pos_three">{this.state.ttt_insert_shell_at_position[3]}</div>
      <div onClick={() => this.tttUpdateBoard(4)} className="ttt_Square ttt_second_row_second_column ttt_pos_four">{this.state.ttt_insert_shell_at_position[4]}</div>
    <div onClick={() => this.tttUpdateBoard(5)} className="ttt_Square ttt_second_row_third_column ttt_pos_five">{this.state.ttt_insert_shell_at_position[5]}</div>
      </div>
      <div  className="ttt_third_column_container">
        <div onClick={() => this.tttUpdateBoard(6)} className="ttt_Square ttt_third_row_first_column ttt_pos_six">{this.state.ttt_insert_shell_at_position[6]}</div>
      <div onClick={() => this.tttUpdateBoard(7)} className="ttt_Square ttt_third_row_second_column ttt_pos_seven">{this.state.ttt_insert_shell_at_position[7]}</div>
    <div onClick={() => this.tttUpdateBoard(8)} className="ttt_Square ttt_third_row_third_column ttt_pos_eight">{this.state.ttt_insert_shell_at_position[8]}</div>
      </div>
    </div>

    <div className="tictactoe_controls">
      <button className="app_LoveYa_font ttt_reset" onClick={this.tttResetGame}>Reset</button>
    <button className="app_LoveYa_font ttt_quit" onClick={this.tttQuitGame}>Quit</button>
      <div className="ttt_ingame_message">{this.state.ttt_ingame_msg}</div>
      <div className="ttt_player_container">
        <div className="ttt_player1_scores">
          <div className="app_LoveYa_font ttt_player1_title">Player 1</div>
        <div className="app_LoveYa_font ttt_player1_score">{this.state.ttt_player1_score}</div>
        </div>
        <div className="ttt_player2_scores">
          <div className="app_LoveYa_font ttt_player2_title">Player 2</div>
        <div className="app_LoveYa_font ttt_player2_score">{this.state.ttt_player2_score}</div>
        </div>
      </div>
    </div>

  </div>
}

const KoopaGameOver = function(){
  let ttt_winner = this.state.ttt_winner;
  return <div className="ttt_gameover_container">
    <h1 className="ttt_gameover_title">Winner:</h1>
    <div className="ttt_gameover_winner">{ttt_winner}</div>
    <div>
      <button className="app_LoveYa_font ttt_gameover_reset" onClick={this.tttResetGame}>reset</button>
      <button className="app_LoveYa_font ttt_gameover_quit" onClick={this.tttQuitGame}>quit</button>
    </div>
  </div>
}
