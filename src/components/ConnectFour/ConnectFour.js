import React from 'react';
import './connectFour.css';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';

export default class ConnectFour extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      // connectFour_player1_name : '',
      // connectFour_player2_name : '',
      // connectFour_player_query : <Player1_query />,
      // connectFour_landing_display : 'block',
      // connectFour_player2Select_display : 'none',
      // connectFour_gameBoard_display : 'none',
      // connectFour_gameover_display : 'none',
      // connectFour_winner : '',
      // connectFour_display_none : 'none',
      // connectFour_input_val : '',
      connectFour_player : 'player 1',
      connectFour_board : [],
      connectFour_vertical_board : [],
      connectFour_insert_piece_at_position : [],
      connectFour_insert_piece_at_vertical_position : [],
      connectFour_player1_score : 0,
      connectFour_player2_score : 0,
      connectFour_ingame_msg : "player 1's turn",
      connectFour_coin_img : '',
      connectFour_angled_lr_board : [],
      connectFour_insert_piece_angled_lr : []
    }

    // this.connectFourGameBoard = connectFourGameBoard.bind(this);
    // this.connectFourLandingScreen = connectFourLandingScreen.bind(this);
    // this.connectFourPlayer2SelectScreen = connectFourPlayer2SelectScreen.bind(this);
    // this.connectFourGameOver = connectFourGameOver.bind(this);
    // this.connectFourResetGame = this.connectFourResetGame.bind(this);
    // this.connectFourQuitGame = this.connectFourQuitGame.bind(this);
    // this.connectFourWinnerWasFound = this.connectFourWinnerWasFound.bind(this);
    // this.handleKeyPress = this.handleKeyPress.bind(this);
    // this.connectFourStorePlayerName = this.connectFourStorePlayerName.bind(this);
    // this.Player1_query = Player1_query.bind(this);
    // this.Player2_query = Player2_query.bind(this);
    // this.connectFourSaveInput = this.connectFourSaveInput.bind(this);
    // this.connectFourUpdateBoard = this.connectFourUpdateBoard.bind(this);
    this.connectFourAddNewPiece = this.connectFourAddNewPiece.bind(this);
    this.connectFourConstructBoard.bind(this);
    this.connectFourFill = this.connectFourFill.bind(this);
    this.connectFourResetGame = this.connectFourResetGame.bind(this);
    this.connectFourQuitGame = this.connectFourQuitGame.bind(this);
  }

  componentWillMount() {
    console.log('mounted!')
    this.connectFourConstructBoard();
  }

  connectFourResetGame(){
    this.setState({
    })
  }

  connectFourQuitGame(){
    this.setState({
    })
  }

  connectFourConstructBoard(){

    let connectFour_board = this.state.connectFour_board;
    let connectFour_vertical_board = this.state.connectFour_vertical_board;
    let connectFour_insert_piece_at_position = this.state.connectFour_insert_piece_at_position;
    let connectFour_insert_piece_at_vertical_position = this.state.connectFour_insert_piece_at_vertical_position;
    let connectFour_insert_piece_angled_lr = this.state.connectFour_insert_piece_angled_lr;
    let connectFour_angled_lr_board = this.state.connectFour_angled_lr_board;
    let connectFour_angled_rl_board = this.state.connectFour_angled_rl_board;

    console.log('=> connectFour_board: ',this.state.connectFour_board)
    console.log('=> connectFour_vertical_board: ',this.state.connectFour_vertical_board)

    for(let i = 0; i < 6; i++){
      connectFour_board[i] = [];
      connectFour_insert_piece_at_position[i] = [];
      for(let x = 0; x < 7; x++){
        connectFour_board[i][x] = '';
        connectFour_insert_piece_at_position[i][x] = '';
      }
    }

    for(let i = 0; i < 7; i++){
      connectFour_vertical_board[i] = [];
      connectFour_insert_piece_at_vertical_position[i] = [];
      for(let x = 0; x < 6; x++){
        // console.log('connectFour_vertical_board: ',connectFour_vertical_board)
        connectFour_insert_piece_at_vertical_position[i][x] = '';
      }
    }

    // connectFour_angled_lr_board = [
    //   ['','','',''],
    //   ['','','','',''],
    //   ['','','','','',''],
    //   ['','','','','',''],
    //   ['','','','',''],
    //   ['','','','']
    // ]
    //
    // let origStartingPlace = 21;
    //
    // for(let i = 0; i < 6; i++){
    //   let startingPlace = origStartingPlace
    //   for(let x = 0; x < connectFour_angled_lr_board[i].length; x++){
    //     connectFour_angled_lr_board[i][x] = startingPlace;
    //     startingPlace -= 6;
    //   }
    //     if(i <= 3){
    //       startingPlace = origStartingPlace + 7;
    //     } else {
    //       startingPlace = origStartingPlace + 1;
    //     }
    // }
    //
    // connectFour_angled_rl_board = [
    //   ['','','',''],
    //   ['','','','',''],
    //   ['','','','','',''],
    //   ['','','','','',''],
    //   ['','','','',''],
    //   ['','','','']
    // ]


    this.setState({
      connectFour_board : connectFour_board,
      connectFour_vertical_board : connectFour_vertical_board,
      connectFour_insert_piece_at_position : connectFour_insert_piece_at_position,
      connectFour_insert_piece_at_vertical_position : connectFour_insert_piece_at_vertical_position,
      connectFour_angled_lr_board : connectFour_angled_lr_board
    })

  }

  connectFourAddNewPiece( outerArr, innerPos, numberedPos ){
    let connectFour_board = this.state.connectFour_board;
    let connectFour_vertical_board = this.state.connectFour_vertical_board;
    let player = this.state.connectFour_player;
    let currentPlayerCharacter;
    let connectFour_insert_piece_at_position = this.state.connectFour_insert_piece_at_position;
    let connectFour_insert_piece_at_vertical_position = this.state.connectFour_insert_piece_at_vertical_position;

    // console.log('#1 connectFour_board[outerArr][innerPos]: ',connectFour_board[outerArr][innerPos])
    if(connectFour_board[outerArr][innerPos] === 'player 1' || connectFour_board[outerArr][innerPos] === 'player 2' ){
      console.log('pick another square')
      return
    }

    connectFour_board[outerArr][innerPos] = player;
    connectFour_vertical_board[innerPos][outerArr] = player;

    this.connectFourFill( outerArr, innerPos );

    // below we check for winning combinations
    let numsInEveryWinningCombination = [17,3,10,14,15,16,18,19,20,24,31,38];
      // check across each array for combinations at exactly than 4



    // CHECK HORIZONTAL ARRAYS
    if(connectFour_board[outerArr].indexOf(player) >= 0){
      console.log('smokin')
      // check the array!
      let arrayToCheck = outerArr
      console.log('arrayToCheck: ',arrayToCheck)
      let firstOccurence = connectFour_board[arrayToCheck].indexOf(player); // this returns the first occurence of our x/y character
      console.log('player: ',player)
      console.log('firstOccurence: ',firstOccurence)
      let foundCount = 0;

      for(let i = 0; i < 5; i++){
        if(connectFour_board[arrayToCheck][firstOccurence+i] === player){
          foundCount += 1;
        }
      }


      if(foundCount === 4){
        let connectFour_player1_score = this.state.connectFour_player1_score;
        let connectFour_player2_score = this.state.connectFour_player2_score;
        console.log('foundCount: ',foundCount)
        console.log('========> we have a winner: ',player,' <=========')
        if(player === 'player 1'){
          connectFour_player1_score += 1
          this.setState({
            connectFour_player1_score : connectFour_player1_score
          })
        } else {
          connectFour_player2_score += 1
          this.setState({
            connectFour_player2_score : connectFour_player2_score
          })
        }
      }


    }



    // CHECK VERTICAL ARRAYS
    if(connectFour_vertical_board[innerPos].indexOf(player) >= 0){
      console.log('fire')
      // check the array!
      let arrayToCheck = innerPos
      console.log('arrayToCheck: ',arrayToCheck)
      let firstOccurence = connectFour_vertical_board[arrayToCheck].indexOf(player); // this returns the first occurence of our x/y character
      console.log('player: ',player)
      console.log('firstOccurence: ',firstOccurence)
      let foundCount = 0;

      for(let i = 0; i < 5; i++){
        if(connectFour_vertical_board[arrayToCheck][firstOccurence+i] === player){
          foundCount += 1;
        }
      }

      if(foundCount === 4){
        let connectFour_player1_score = this.state.connectFour_player1_score;
        let connectFour_player2_score = this.state.connectFour_player2_score;
        console.log('foundCount: ',foundCount)
        console.log('========> we have a winner: ',player,' <=========')
        if(player === 'player 1'){
          connectFour_player1_score += 1
          this.setState({
            connectFour_player1_score : connectFour_player1_score
          })
        } else {
          connectFour_player2_score += 1
          this.setState({
            connectFour_player2_score : connectFour_player2_score
          })
        }
      }
    }


    // CHECK ANGLED ARRAYS
    // if(connectFour_angled_lr_board[innerPos].indexOf(player) >= 0){}





      this.setState({
        connectFour_board : connectFour_board,
        connectFour_vertical_board : connectFour_vertical_board
      })

    player === 'player 1' ? player = 'player 2' : player = 'player 1';
    this.setState({
      connectFour_player : player
    })


  }

  connectFourFill( outerArr, innerPos ){
    let connectFour_board = this.state.connectFour_board;
    let piece;
    let player = this.state.connectFour_player;
    let connectFour_insert_piece_at_position = this.state.connectFour_insert_piece_at_position;
    let connectFour_insert_piece_at_vertical_position = this.state.connectFour_insert_piece_at_vertical_position;
    let connectFour_vertical_board = this.state.connectFour_vertical_board;

    player === 'player 1' ? piece = <img className="connectFour_red_mushroom" src={require('url-loader?limit=10000!./mushroom.png')} /> : piece = <img className="connectFour_yellow_coin" src={require('url-loader?limit=10000!./coin.ico')} />
    // console.log('piece: ',piece)
   connectFour_insert_piece_at_position[outerArr][innerPos] = piece;


   let playerUpNext;
   player === 'player 1' ? playerUpNext = 'player 2' : playerUpNext = 'player 1';
   let message = playerUpNext+"'s turn";

   connectFour_board[outerArr][innerPos] = player;
   connectFour_vertical_board[innerPos][outerArr] = player;
   this.setState({
     connectFour_board : connectFour_board,
     connectFour_vertical_board : connectFour_vertical_board,
     connectFour_insert_piece_at_position : connectFour_insert_piece_at_position,
     connectFour_ingame_msg : message
   })
  }




  render(){
    return(
      <div>
        <Nav />
        <div className="connectFour">
          <div className="connectFour_container">
            <div className="app_LoveYa_font connectFour_title">Connect Four</div>

            <div className="connectFour_interface">
              <div className="connectFour_nodes">
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(0,0,0)} >{this.state.connectFour_insert_piece_at_position[0][0]}</div>
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(0,1,1)} >{this.state.connectFour_insert_piece_at_position[0][1]}</div>
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(0,2,2)} >{this.state.connectFour_insert_piece_at_position[0][2]}</div>
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(0,3,3)} >{this.state.connectFour_insert_piece_at_position[0][3]}</div>
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(0,4,4)} >{this.state.connectFour_insert_piece_at_position[0][4]}</div>
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(0,5,5)} >{this.state.connectFour_insert_piece_at_position[0][5]}</div>
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(0,6,6)} >{this.state.connectFour_insert_piece_at_position[0][6]}</div>
              </div>
              <div className="connectFour_nodes">
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(1,0,7)} >{this.state.connectFour_insert_piece_at_position[1][0]}</div>
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(1,1,8)} >{this.state.connectFour_insert_piece_at_position[1][1]}</div>
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(1,2,9)} >{this.state.connectFour_insert_piece_at_position[1][2]}</div>
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(1,3,10)} >{this.state.connectFour_insert_piece_at_position[1][3]}</div>
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(1,4,11)} >{this.state.connectFour_insert_piece_at_position[1][4]}</div>
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(1,5,12)} >{this.state.connectFour_insert_piece_at_position[1][5]}</div>
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(1,6,13)} >{this.state.connectFour_insert_piece_at_position[1][6]}</div>
              </div>
              <div className="connectFour_nodes">
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(2,0,14)} >{this.state.connectFour_insert_piece_at_position[2][0]}</div>
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(2,1,15)} >{this.state.connectFour_insert_piece_at_position[2][1]}</div>
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(2,2,16)} >{this.state.connectFour_insert_piece_at_position[2][2]}</div>
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(2,3,17)} >{this.state.connectFour_insert_piece_at_position[2][3]}</div>
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(2,4,18)} >{this.state.connectFour_insert_piece_at_position[2][4]}</div>
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(2,5,19)} >{this.state.connectFour_insert_piece_at_position[2][5]}</div>
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(2,6,20)} >{this.state.connectFour_insert_piece_at_position[2][6]}</div>
              </div>
              <div className="connectFour_nodes">
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(3,0,21)} >{this.state.connectFour_insert_piece_at_position[3][0]}</div>
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(3,1,22)} >{this.state.connectFour_insert_piece_at_position[3][1]}</div>
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(3,2,23)} >{this.state.connectFour_insert_piece_at_position[3][2]}</div>
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(3,3,24)} >{this.state.connectFour_insert_piece_at_position[3][3]}</div>
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(3,4,25)} >{this.state.connectFour_insert_piece_at_position[3][4]}</div>
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(3,5,26)} >{this.state.connectFour_insert_piece_at_position[3][5]}</div>
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(3,6,27)} >{this.state.connectFour_insert_piece_at_position[3][6]}</div>
              </div>
              <div className="connectFour_nodes">
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(4,0,28)} >{this.state.connectFour_insert_piece_at_position[4][0]}</div>
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(4,1,29)} >{this.state.connectFour_insert_piece_at_position[4][1]}</div>
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(4,2,30)} >{this.state.connectFour_insert_piece_at_position[4][2]}</div>
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(4,3,31)} >{this.state.connectFour_insert_piece_at_position[4][3]}</div>
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(4,4,32)} >{this.state.connectFour_insert_piece_at_position[4][4]}</div>
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(4,5,33)} >{this.state.connectFour_insert_piece_at_position[4][5]}</div>
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(4,6,34)} >{this.state.connectFour_insert_piece_at_position[4][6]}</div>
              </div>
              <div className="connectFour_nodes">
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(5,0,35)} >{this.state.connectFour_insert_piece_at_position[5][0]}</div>
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(5,1,36)} >{this.state.connectFour_insert_piece_at_position[5][1]}</div>
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(5,2,37)} >{this.state.connectFour_insert_piece_at_position[5][2]}</div>
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(5,3,38)} >{this.state.connectFour_insert_piece_at_position[5][3]}</div>
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(5,4,39)} >{this.state.connectFour_insert_piece_at_position[5][4]}</div>
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(5,5,40)} >{this.state.connectFour_insert_piece_at_position[5][5]}</div>
                <div className="connectFour_single_node" onClick={() => this.connectFourAddNewPiece(5,6,41)} >{this.state.connectFour_insert_piece_at_position[5][6]}</div>
              </div>
            </div>

            <div className="connectFour_scoreboard">
              <div className="connectFour_player_scores_container">

                <div className="connectFour_player1_scores">
                  <div className="connectFour_player1_div">
                    <div className="app_LoveYa_font">Player 1</div>
                    <div className="connectFour_player1_score">{this.state.connectFour_player1_score}</div>
                  </div>
                </div>

                <div className="connectFour_player2_scores">
                  <div className="connectFour_player2_div">
                    <div className="app_LoveYa_font">Player 2</div>
                    <div className="connectFour_player2_score">{this.state.connectFour_player2_score}</div>
                  </div>
                </div>

              </div>

              <div className="connectFour_message">
                {this.state.connectFour_ingame_msg}
              </div>

              <div className="connectFour_controls">
                <div className="connectFour_buttons_container">
                  <button className="connectFour_controls_btns connectFour_reset_game_btn">reset</button>
                  <button className="connectFour_controls_btns connectFour_quit_game_btn">quit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>

    )
  }
}
