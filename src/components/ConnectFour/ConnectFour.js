import React from 'react';
import './connectFour.css';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';

export default class ConnectFour extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      connectFour_player1_name : '',
      connectFour_player2_name : '',
      connectFour_landing_display : 'block',
      connectFour_player2Select_display : 'none',
      connectFour_gameBoard_display : 'none',
      connectFour_gameover_display : 'none',
      connectFour_winner : '',
      connectFour_input_val : '',
      connectFour_player : 'player 1',
      connectFour_board : [],
      connectFour_vertical_board : [],
      connectFour_insert_piece_at_position : [],
      connectFour_insert_piece_at_vertical_position : [],
      connectFour_player1_score : 0,
      connectFour_player2_score : 0,
      connectFour_ingame_msg : "NEW GAME! player 1's turn",
      connectFour_coin_img : '',
      connectFour_angled_lr_board : [],
      connectFour_angled_rl_board : [],
      connectFour_remaining_combinations : ''
      // connectFour_player_query : <Player1_query />,
      // connectFour_display_none : 'none',
      // connectFour_insert_piece_angled_lr : [],
    }

    this.ConnectFourGameBoard = ConnectFourGameBoard.bind(this);
    this.ConnectFourLandingScreen = ConnectFourLandingScreen.bind(this);
    this.ConnectFourPlayer2SelectScreen = ConnectFourPlayer2SelectScreen.bind(this);
    this.ConnectFourGameOver = ConnectFourGameOver.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.connectFourStorePlayerName = this.connectFourStorePlayerName.bind(this);
    this.Player1_query = Player1_query.bind(this);
    this.Player2_query = Player2_query.bind(this);
    this.connectFourSaveInput = this.connectFourSaveInput.bind(this);
    this.connectFourAddNewPiece = this.connectFourAddNewPiece.bind(this);
    this.connectFourConstructBoard.bind(this);
    this.connectFourFill = this.connectFourFill.bind(this);
    this.connectFourResetGame = this.connectFourResetGame.bind(this);
    this.connectFourQuitGame = this.connectFourQuitGame.bind(this);
    this.checkLeftToRightAngledArrays = this.checkLeftToRightAngledArrays.bind(this);
    this.checkRightToLeftAngledArrays = this.checkRightToLeftAngledArrays.bind(this);
    this.connectFour_CheckForRemainingConnections = this.connectFour_CheckForRemainingConnections.bind(this);
    this.connectFourSkipPlayer1NameEntry = this.connectFourSkipPlayer1NameEntry.bind(this);
    this.connectFourSkipPlayer2NameEntry = this.connectFourSkipPlayer2NameEntry.bind(this);
    // this.connectFourResetGame = this.connectFourResetGame.bind(this);
    // this.connectFourWinnerWasFound = this.connectFourWinnerWasFound.bind(this);
    // this.connectFourUpdateBoard = this.connectFourUpdateBoard.bind(this);
  }

  componentWillMount() {
    this.connectFourConstructBoard();
    this.connectFour_CheckForRemainingConnections();
  }

  connectFourResetGame(){
    this.setState({
      connectFour_landing_display : 'none',
      connectFour_player2Select_display : 'none',
      connectFour_gameBoard_display : 'block',
      connectFour_gameover_display : 'none',
      connectFour_player : 'player 1',
      connectFour_board : [],
      connectFour_vertical_board : [],
      connectFour_insert_piece_at_position : [],
      connectFour_insert_piece_at_vertical_position : [],
      connectFour_player1_score : 0,
      connectFour_player2_score : 0,
      connectFour_ingame_msg : "NEW GAME! player 1's turn",
      connectFour_coin_img : '',
      connectFour_angled_lr_board : [],
      connectFour_remaining_combinations : ''
      // connectFour_insert_piece_angled_lr : [],
    })
    this.connectFourConstructBoard();
  }

  connectFourSkipPlayer1NameEntry(){
    this.setState({
      connectFour_landing_display : 'none',
      connectFour_player2Select_display : 'block',
      connectFour_gameBoard_display : 'none',
      connectFour_gameover_display : 'none',
      connectFour_player1_name : 'player 1'
    })
  }

  connectFourSkipPlayer2NameEntry(){
    this.setState({
      connectFour_landing_display : 'none',
      connectFour_player2Select_display : 'none',
      connectFour_gameBoard_display : 'block',
      connectFour_gameover_display : 'none',
      connectFour_player2_name : 'player 2',
    })
  }

  connectFourQuitGame(){
    this.setState({
      connectFour_player1_name : '',
      connectFour_player2_name : '',
      connectFour_landing_display : 'block',
      connectFour_player2Select_display : 'none',
      connectFour_gameBoard_display : 'none',
      connectFour_gameover_display : 'none',
      connectFour_player : 'player 1',
      connectFour_board : [],
      connectFour_vertical_board : [],
      connectFour_insert_piece_at_position : [],
      connectFour_insert_piece_at_vertical_position : [],
      connectFour_player1_score : 0,
      connectFour_player2_score : 0,
      connectFour_ingame_msg : "NEW GAME! player 1's turn",
      connectFour_coin_img : '',
      connectFour_angled_lr_board : [],
      connectFour_remaining_combinations : ''
      // connectFour_insert_piece_angled_lr : [],
    })
    this.connectFourConstructBoard();
  }

  connectFourConstructBoard(){

    let connectFour_board = this.state.connectFour_board;
    let connectFour_vertical_board = this.state.connectFour_vertical_board;
    let connectFour_insert_piece_at_position = this.state.connectFour_insert_piece_at_position;
    let connectFour_insert_piece_at_vertical_position = this.state.connectFour_insert_piece_at_vertical_position;
    let connectFour_angled_lr_board = this.state.connectFour_angled_lr_board;
    let connectFour_angled_rl_board = this.state.connectFour_angled_rl_board;
    // let connectFour_insert_piece_angled_lr = this.state.connectFour_insert_piece_angled_lr;

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
        connectFour_vertical_board[i][x] = '';
        connectFour_insert_piece_at_vertical_position[i][x] = '';
      }
    }

    connectFour_angled_lr_board = [
      ['','','',''],
      ['','','','',''],
      ['','','','','',''],
      ['','','','','',''],
      ['','','','',''],
      ['','','','']
    ]

    connectFour_angled_rl_board = [
      ['','','',''],
      ['','','','',''],
      ['','','','','',''],
      ['','','','','',''],
      ['','','','',''],
      ['','','','']
    ]




    this.setState({
      connectFour_board : connectFour_board,
      connectFour_vertical_board : connectFour_vertical_board,
      connectFour_insert_piece_at_position : connectFour_insert_piece_at_position,
      connectFour_insert_piece_at_vertical_position : connectFour_insert_piece_at_vertical_position,
      connectFour_angled_lr_board : connectFour_angled_lr_board,
      connectFour_angled_rl_board : connectFour_angled_rl_board
    })

  }

  connectFour_CheckForRemainingConnections(){

    let check = function(arr){
    	let totz = 0;
      let currentCombo;
      let combinations = 0; //let solArr;
    	loop1:for(let i = 0; i < arr.length; i++){ //solArr = []; //console.log('i: '+i+' is ['+arr[i]+']')
      	loop2:for(let x = 0; x < arr[i].length; x++){
          if(combinations > 2){
          	totz += 1; //console.log('totz ',i,': ',solArr)
            break loop2;
          } else if(arr[i][x] === ''){
          	combinations += 1; //solArr.push(arr[i][x]);
          } else if(arr[i][x] !== '' && currentCombo === undefined){
          	currentCombo = arr[i][x]; //console.log(i+' has '+combinations+' combinations!')
          } else if(arr[i][x] !== '' && arr[i][x] !== currentCombo){
          	currentCombo = arr[i][x]; //console.log(i+' has '+combinations+' combinations!')
            if(combinations > 0){ combinations = 0; }
          } else if(currentCombo === arr[i][x]){ //console.log('i: ',i); console.log(i+' has '+combinations+' combinations!')
          	combinations += 1; //solArr.push(arr[i][x]);
          }
        } combinations = 0; currentCombo = undefined;
      }
      return totz;
    }

    let connectFour_board = this.state.connectFour_board;
    let connectFour_vertical_board = this.state.connectFour_vertical_board;
    let connectFour_angled_lr_board = this.state.connectFour_angled_lr_board;
    let connectFour_angled_rl_board = this.state.connectFour_angled_rl_board;
    let remaining_combinations = 0;

    console.log('board => ',connectFour_board)
    console.log('vertical => ',connectFour_vertical_board)
    console.log('RightL => ',connectFour_angled_rl_board)
    console.log('LeftR => ',connectFour_angled_lr_board)
    remaining_combinations += check(connectFour_board);
    console.log('check(connectFour_board): ',check(connectFour_board))
    remaining_combinations += check(connectFour_vertical_board);
    console.log('check(connectFour_vertical_board): ',check(connectFour_vertical_board))
    remaining_combinations += check(connectFour_angled_rl_board);
    console.log('check(connectFour_angled_rl_board): ',check(connectFour_angled_rl_board))
    remaining_combinations += check(connectFour_angled_lr_board);
    console.log('check(connectFour_angled_lr_board): ',check(connectFour_angled_lr_board))
    console.log('remaining_combinations =========================> ',remaining_combinations)

    this.setState({
      connectFour_remaining_combinations : remaining_combinations
    })
  }

  connectFourAddNewPiece( outerArr, innerPos, numberedPos ){
    let connectFour_board = this.state.connectFour_board;
    let connectFour_vertical_board = this.state.connectFour_vertical_board;
    let player = this.state.connectFour_player;
    let currentPlayerCharacter;
    let connectFour_insert_piece_at_position = this.state.connectFour_insert_piece_at_position;
    let connectFour_insert_piece_at_vertical_position = this.state.connectFour_insert_piece_at_vertical_position;


    if(outerArr <= 4 && connectFour_vertical_board[innerPos][outerArr+1] === ''){
      let message = 'illegal move... try again '+player
      this.setState({
        connectFour_ingame_msg : message
      })
      return
    }

    if(connectFour_board[outerArr][innerPos] === 'player 1' || connectFour_board[outerArr][innerPos] === 'player 2'){
      let message = 'Occupied! try again '+player
      this.setState({
        connectFour_ingame_msg : message
      })
      return
    }

    connectFour_board[outerArr][innerPos] = player;
    connectFour_vertical_board[innerPos][outerArr] = player;

    this.connectFourFill( outerArr, innerPos );



    // CHECK HORIZONTAL ARRAYS
    if(connectFour_board[outerArr].indexOf(player) >= 0){

      let arrayToCheck = outerArr
      let firstOccurence = connectFour_board[arrayToCheck].indexOf(player); // this returns the first occurence of our x/y character
      let foundCount = 0;

      for(let i = 0; i < 5; i++){
        if(connectFour_board[arrayToCheck][firstOccurence+i] === player){
          foundCount += 1;
        }
      }


      if(foundCount === 4){
        let connectFour_player1_score = this.state.connectFour_player1_score;
        let connectFour_player2_score = this.state.connectFour_player2_score;
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

      let arrayToCheck = innerPos
      let firstOccurence = connectFour_vertical_board[arrayToCheck].indexOf(player); // this returns the first occurence of our x/y character
      let foundCount = 0;

      for(let i = 0; i < 5; i++){
        if(connectFour_vertical_board[arrayToCheck][firstOccurence+i] === player){
          foundCount += 1;
        }
      }

      if(foundCount === 4){
        let connectFour_player1_score = this.state.connectFour_player1_score;
        let connectFour_player2_score = this.state.connectFour_player2_score;

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

      this.setState({
        connectFour_board : connectFour_board,
        connectFour_vertical_board : connectFour_vertical_board
      })

    player === 'player 1' ? player = 'player 2' : player = 'player 1';
    this.setState({
      connectFour_player : player
    })

    this.connectFour_CheckForRemainingConnections()
    let connectFour_remaining_combinations = this.state.connectFour_remaining_combinations;

    if(connectFour_remaining_combinations === 0){
      let winner;
      let player1_score = this.state.player1_score;
      let player2_score = this.state.player2_score;
      player1_score > player2_score  ? winner = 'player 1' : winner = 'player 2'
      this.setState({
        connectFour_landing_display : 'none',
        connectFour_player2Select_display : 'none',
        connectFour_gameBoard_display : 'none',
        connectFour_gameover_display : 'block',
        connectFour_winner : winner
      })
      return
    }


  }

  checkLeftToRightAngledArrays( outerArr, innerPos ){
    let connectFour_angled_lr_board = this.state.connectFour_angled_lr_board;
    let player = this.state.connectFour_player;
    console.log(player,"'s lr below: ")

    connectFour_angled_lr_board[outerArr][innerPos] = player;

    let arrayToCheck = outerArr;
    let firstOccurence = connectFour_angled_lr_board[arrayToCheck].indexOf(player);
    let foundCount = 0;

    for(let i = 0; i < 5; i++){
      if(connectFour_angled_lr_board[arrayToCheck][firstOccurence+i] === player){
        foundCount += 1;
      }
    }

    if(foundCount === 4){
      let connectFour_player1_score = this.state.connectFour_player1_score;
      let connectFour_player2_score = this.state.connectFour_player2_score;
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

    let lr = this.state.connectFour_angled_lr_board;
    console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
    console.log(
      'LEFT TO RIGHT','\n',
      '[','\n',
        '[',lr[0][0],',',lr[0][1],',',lr[0][2],',',lr[0][3],']','\n',
        '[',lr[1][0],',',lr[1][1],',',lr[1][2],',',lr[1][3],',',lr[1][4],']','\n',
        '[',lr[2][0],',',lr[2][1],',',lr[2][2],',',lr[2][3],',',lr[2][4],',',lr[2][5],']','\n',
        '[',lr[3][0],',',lr[3][1],',',lr[3][2],',',lr[3][3],',',lr[3][4],',',lr[3][5],']','\n',
        '[',lr[4][0],',',lr[4][1],',',lr[4][2],',',lr[4][3],',',lr[4][4],']','\n',
        '[',lr[5][0],',',lr[5][1],',',lr[5][2],',',lr[5][3],']','\n',
      ']'
    )

  }

  checkRightToLeftAngledArrays( outerArr, innerPos ){
    let connectFour_angled_rl_board = this.state.connectFour_angled_rl_board;
    let player = this.state.connectFour_player;
    console.log(player,"'s rl below: ")

    connectFour_angled_rl_board[outerArr][innerPos] = player;

    let arrayToCheck = outerArr;
    let firstOccurence = connectFour_angled_rl_board[arrayToCheck].indexOf(player);
    let foundCount = 0;

    for(let i = 0; i < 5; i++){
      if(connectFour_angled_rl_board[arrayToCheck][firstOccurence+i] === player){
        foundCount += 1;
      }
    }

    if(foundCount === 4){
      let connectFour_player1_score = this.state.connectFour_player1_score;
      let connectFour_player2_score = this.state.connectFour_player2_score;

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

    let rl = this.state.connectFour_angled_rl_board;
    console.log(
      'RIGHT TO LEFT','\n',
      '[','\n',
        '[',rl[0][0],',',rl[0][1],',',rl[0][2],',',rl[0][3],']','\n',
        '[',rl[1][0],',',rl[1][1],',',rl[1][2],',',rl[1][3],',',rl[1][4],']','\n',
        '[',rl[2][0],',',rl[2][1],',',rl[2][2],',',rl[2][3],',',rl[2][4],',',rl[2][5],']','\n',
        '[',rl[3][0],',',rl[3][1],',',rl[3][2],',',rl[3][3],',',rl[3][4],',',rl[3][5],']','\n',
        '[',rl[4][0],',',rl[4][1],',',rl[4][2],',',rl[4][3],',',rl[4][4],']','\n',
        '[',rl[5][0],',',rl[5][1],',',rl[5][2],',',rl[5][3],']','\n',
      ']'
    )

    let board = this.state.connectFour_board;
    console.log(
      'BOARD','\n',
      '[','\n',
        '[',board[0][0],',',board[0][1],',',board[0][2],',',board[0][3],',',board[0][4],',',board[0][5],',',board[0][6],']','\n',
        '[',board[1][0],',',board[1][1],',',board[1][2],',',board[1][3],',',board[1][4],',',board[1][5],',',board[1][6],']','\n',
        '[',board[2][0],',',board[2][1],',',board[2][2],',',board[2][3],',',board[2][4],',',board[2][5],',',board[2][6],']','\n',
        '[',board[3][0],',',board[3][1],',',board[3][2],',',board[3][3],',',board[3][4],',',board[3][5],',',board[3][6],']','\n',
        '[',board[4][0],',',board[4][1],',',board[4][2],',',board[4][3],',',board[4][4],',',board[4][5],',',board[4][6],']','\n',
        '[',board[5][0],',',board[5][1],',',board[5][2],',',board[5][3],',',board[5][4],',',board[5][5],',',board[5][6],']','\n',
      ']'
    )

    let vb = this.state.connectFour_vertical_board;
    console.log(
      'VERTICAL BOARD','\n',
      '[','\n',
        '[',vb[0][0],',',vb[0][1],',',vb[0][2],',',vb[0][3],',',vb[0][4],',',vb[0][5],']','\n',
        '[',vb[1][0],',',vb[1][1],',',vb[1][2],',',vb[1][3],',',vb[1][4],',',vb[1][5],']','\n',
        '[',vb[2][0],',',vb[2][1],',',vb[2][2],',',vb[2][3],',',vb[2][4],',',vb[2][5],']','\n',
        '[',vb[3][0],',',vb[3][1],',',vb[3][2],',',vb[3][3],',',vb[3][4],',',vb[3][5],']','\n',
        '[',vb[4][0],',',vb[4][1],',',vb[4][2],',',vb[4][3],',',vb[4][4],',',vb[4][5],']','\n',
        '[',vb[5][0],',',vb[5][1],',',vb[5][2],',',vb[5][3],',',vb[5][4],',',vb[5][5],']','\n',
        '[',vb[6][0],',',vb[6][1],',',vb[6][2],',',vb[6][3],',',vb[6][4],',',vb[6][5],']','\n',
      ']'
    )

  }

  connectFourFill( outerArr, innerPos ){
    let connectFour_board = this.state.connectFour_board;
    let piece;
    let player = this.state.connectFour_player;
    let connectFour_insert_piece_at_position = this.state.connectFour_insert_piece_at_position;
    let connectFour_insert_piece_at_vertical_position = this.state.connectFour_insert_piece_at_vertical_position;
    let connectFour_vertical_board = this.state.connectFour_vertical_board;

    player === 'player 1' ? piece = <img className="connectFour_red_mushroom" src={require('url-loader?limit=10000!./images/mushroom.png')} /> : piece = <img className="connectFour_yellow_coin" src={require('url-loader?limit=10000!./images/coin.ico')} />
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

  handleKeyPress(e){
    if(e.key == 'Enter'){
      this.connectFourStorePlayerName(e)
    }
  }

  connectFourStorePlayerName(e){
    e.preventDefault();

    console.log('this.refs.player2_name_input.value --> ',this.refs.player2_name_input.value)

    // if(this.state.connectFour_player1_name === ''){
    //   console.log('enter name')
    //   return;
    // }

    // if(this.state.connectFour_input_val === undefined){
    //   console.log('enter name')
    //   return;
    // }
    // if(this.refs.player1_name_input_value === undefined){
    //   console.log('please enter a name')
    //   return
    // }

    console.log('$ => ',this.refs.player1_name_input_value)
    if(this.state.connectFour_player1_name === ''){
      this.refs.player1_name_input.value = '';
      let player1_name_input = this.state.connectFour_input_val;
      this.setState({
        connectFour_player1_name : player1_name_input,
        connectFour_input_val : '',
        connectFour_landing_display : 'none',
        connectFour_player2Select_display : 'block'
      })
      console.log("this.state.connectFour_player1_name === ''")
    } else if(this.state.connectFour_player1_name !== ''){
      this.refs.player2_name_input.value = '';
      let player2_name_input = this.state.connectFour_input_val;
      this.setState({
        connectFour_player2_name : player2_name_input,
        connectFour_input_val : '',
        connectFour_player2Select_display : 'none',
        connectFour_gameBoard_display : 'block',
      })
      console.log("this.state.connectFour_player1_name !== ''")
    }


  }

  connectFourSaveInput(e){
    let targetValue = e.target.value
    this.setState({
      connectFour_input_val : targetValue
    })
  }



  render(){

    let connectFour_landing_display = this.state.connectFour_landing_display;
    let connectFour_player2Select_display = this.state.connectFour_player2Select_display;
    let connectFour_gameBoard_display = this.state.connectFour_gameBoard_display;
    let connectFour_gameover_display = this.state.connectFour_gameover_display;

    return(
      <div>
        <Nav />
        <div className="connectFour">
          <div style={{display:connectFour_landing_display}}>
            {this.ConnectFourLandingScreen()}
          </div>
          <div style={{display:connectFour_player2Select_display}}>
            {this.ConnectFourPlayer2SelectScreen()}
          </div>
          <div style={{display:connectFour_gameBoard_display}}>
            {this.ConnectFourGameBoard()}
          </div>
          <div style={{display:connectFour_gameover_display}}>
            {this.ConnectFourGameOver()}
          </div>
        </div>
        <Footer />
      </div>

    )

  }
}

const ConnectFourLandingScreen = function(){
  return <div className="connectFour_lakituBoard">
    <div className="connectFour_lakituBoard_border">
      <h3 className="app_LoveYa_font connectFour_Landing_welcome_text">shock and awe for</h3>
    <h1 className="app_LoveYa_font connectFour_landing_title_text">Lakitu's Connect Four</h1>
    </div>
    <img className="connectFour_lakitu_img" src={require('url-loader?limit=10000!./images/connectFour_Lakitu.png')} />
    <div className="connectFour_player_select_div">
      <div className="connectFour_player_select_container">
        <div className="connectFour_player_character_border">
          <img className="connectFour_mushroom_img" src={require('url-loader?limit=10000!./images/connectFour_mushroom_select.png')} />
        </div>
      </div>
      <div className="connectFour_player1_query_container">{this.Player1_query()}</div>
    </div>
  </div>
}

const ConnectFourPlayer2SelectScreen = function(){
  return  <div className="connectFour_lakituBoard">
      <div className="connectFour_lakituBoard_border">
        <h3 className="app_LoveYa_font connectFour_Landing_welcome_text">shock and awe for</h3>
      <h1 className="app_LoveYa_font connectFour_landing_title_text">Lakitu's Connect Four</h1>
      </div>
      <img className="connectFour_lakitu_img" src={require('url-loader?limit=10000!./images/connectFour_Lakitu.png')} />
      <div className="connectFour_player_select_div">
        <div className="connectFour_player_select_container">
          <div className="connectFour_player_character_border">
            <img className="connectFour_coin_img" src={require('url-loader?limit=10000!./images/connectFour_coin_select.png')} />
          </div>
        </div>
        <div className="connectFour_player2_query_container">{this.Player2_query()}</div>
      </div>
    </div>
}

const Player1_query = function(){
  return <div className="connectFour_player1_query">
      <input className="connectFour_name1_input" placeholder="Player1, enter name" onChange={this.connectFourSaveInput} onKeyPress={this.handleKeyPress} ref="player1_name_input"/>
    <button className="connectFour_player1_name_btn" onClick={this.connectFourStorePlayerName}>Enter</button>
  <button className="connectFour_player_quit_btn" onClick={this.connectFourSkipPlayer1NameEntry}>Skip</button>
    </div>

}

const Player2_query = function(){

  return <div className="connectFour_player2_query">
    <input className="connectFour_name2_input" placeholder="Player2, enter name" onChange={this.connectFourSaveInput} onKeyPress={this.handleKeyPress} ref="player2_name_input"/>
    <button className="connectFour_player2_name_btn" onClick={this.connectFourStorePlayerName}>Enter</button>
  <button className="connectFour_player_quit_btn" onClick={this.connectFourSkipPlayer2NameEntry}>Skip</button>
  </div>

}

const ConnectFourGameBoard = function(){
  return   <div className="connectFour_container">
    <div className="app_LoveYa_font connectFour_title">Connect Four</div>

    <div className="connectFour_interface">
      <div className="connectFour_nodes">
        <div className="connectFour_single_node" onClick={() => {this.checkRightToLeftAngledArrays(3,5); this.connectFourAddNewPiece(0,0,0)}} >{this.state.connectFour_insert_piece_at_position[0][0]}</div>
        <div className="connectFour_single_node" onClick={() => {this.checkRightToLeftAngledArrays(2,5); this.connectFourAddNewPiece(0,1,1)}} >{this.state.connectFour_insert_piece_at_position[0][1]}</div>
        <div className="connectFour_single_node" onClick={() => {this.checkRightToLeftAngledArrays(1,4); this.connectFourAddNewPiece(0,2,2)}} >{this.state.connectFour_insert_piece_at_position[0][2]}</div>
        <div className="connectFour_single_node" onClick={() => {this.checkRightToLeftAngledArrays(0,3); this.checkLeftToRightAngledArrays(0,3); this.connectFourAddNewPiece(0,3,3)}} >{this.state.connectFour_insert_piece_at_position[0][3]}</div>
        <div className="connectFour_single_node" onClick={() => {this.checkLeftToRightAngledArrays(1,4); this.connectFourAddNewPiece(0,4,4)}} >{this.state.connectFour_insert_piece_at_position[0][4]}</div>
        <div className="connectFour_single_node" onClick={() => {this.checkLeftToRightAngledArrays(2,5); this.connectFourAddNewPiece(0,5,5)}} >{this.state.connectFour_insert_piece_at_position[0][5]}</div>
        <div className="connectFour_single_node" onClick={() => {this.checkLeftToRightAngledArrays(3,5); this.connectFourAddNewPiece(0,6,6)}} >{this.state.connectFour_insert_piece_at_position[0][6]}</div>
      </div>
      <div className="connectFour_nodes">
        <div className="connectFour_single_node" onClick={() => {this.checkRightToLeftAngledArrays(4,4); this.connectFourAddNewPiece(1,0,7)}} >{this.state.connectFour_insert_piece_at_position[1][0]}</div>
        <div className="connectFour_single_node" onClick={() => {this.checkRightToLeftAngledArrays(3,4); this.connectFourAddNewPiece(1,1,8)}} >{this.state.connectFour_insert_piece_at_position[1][1]}</div>
        <div className="connectFour_single_node" onClick={() => {this.checkRightToLeftAngledArrays(2,4); this.checkLeftToRightAngledArrays(0,2); this.connectFourAddNewPiece(1,2,9)}} >{this.state.connectFour_insert_piece_at_position[1][2]}</div>
        <div className="connectFour_single_node" onClick={() => {this.checkRightToLeftAngledArrays(1,3); this.checkLeftToRightAngledArrays(1,3); this.connectFourAddNewPiece(1,3,10)}} >{this.state.connectFour_insert_piece_at_position[1][3]}</div>
        <div className="connectFour_single_node" onClick={() => {this.checkRightToLeftAngledArrays(0,2); this.checkLeftToRightAngledArrays(2,4); this.connectFourAddNewPiece(1,4,11)}} >{this.state.connectFour_insert_piece_at_position[1][4]}</div>
        <div className="connectFour_single_node" onClick={() => {this.checkLeftToRightAngledArrays(3,4); this.connectFourAddNewPiece(1,5,12)}} >{this.state.connectFour_insert_piece_at_position[1][5]}</div>
        <div className="connectFour_single_node" onClick={() => {this.checkLeftToRightAngledArrays(4,4); this.connectFourAddNewPiece(1,6,13)}} >{this.state.connectFour_insert_piece_at_position[1][6]}</div>
      </div>
      <div className="connectFour_nodes">
        <div className="connectFour_single_node" onClick={() => {this.checkRightToLeftAngledArrays(5,3); this.connectFourAddNewPiece(2,0,14)}} >{this.state.connectFour_insert_piece_at_position[2][0]}</div>
        <div className="connectFour_single_node" onClick={() => {this.checkRightToLeftAngledArrays(4,3); this.checkLeftToRightAngledArrays(0,1); this.connectFourAddNewPiece(2,1,15)}} >{this.state.connectFour_insert_piece_at_position[2][1]}</div>
        <div className="connectFour_single_node" onClick={() => {this.checkRightToLeftAngledArrays(3,3); this.checkLeftToRightAngledArrays(1,2); this.connectFourAddNewPiece(2,2,16)}} >{this.state.connectFour_insert_piece_at_position[2][2]}</div>
        <div className="connectFour_single_node" onClick={() => {this.checkRightToLeftAngledArrays(2,3); this.checkLeftToRightAngledArrays(2,3); this.connectFourAddNewPiece(2,3,17)}} >{this.state.connectFour_insert_piece_at_position[2][3]}</div>
        <div className="connectFour_single_node" onClick={() => {this.checkRightToLeftAngledArrays(1,2); this.checkLeftToRightAngledArrays(3,3); this.connectFourAddNewPiece(2,4,18)}} >{this.state.connectFour_insert_piece_at_position[2][4]}</div>
        <div className="connectFour_single_node" onClick={() => {this.checkRightToLeftAngledArrays(0,1); this.checkLeftToRightAngledArrays(4,3); this.connectFourAddNewPiece(2,5,19)}} >{this.state.connectFour_insert_piece_at_position[2][5]}</div>
        <div className="connectFour_single_node" onClick={() => {this.checkLeftToRightAngledArrays(5,3); this.connectFourAddNewPiece(2,6,20)}} >{this.state.connectFour_insert_piece_at_position[2][6]}</div>
      </div>
      <div className="connectFour_nodes">
        <div className="connectFour_single_node" onClick={() => {this.checkLeftToRightAngledArrays(0,0); this.connectFourAddNewPiece(3,0,21)}} >{this.state.connectFour_insert_piece_at_position[3][0]}</div>
        <div className="connectFour_single_node" onClick={() => {this.checkRightToLeftAngledArrays(5,2); this.checkLeftToRightAngledArrays(1,1); this.connectFourAddNewPiece(3,1,22)}} >{this.state.connectFour_insert_piece_at_position[3][1]}</div>
        <div className="connectFour_single_node" onClick={() => {this.checkRightToLeftAngledArrays(4,2); this.checkLeftToRightAngledArrays(2,2); this.connectFourAddNewPiece(3,2,23)}} >{this.state.connectFour_insert_piece_at_position[3][2]}</div>
        <div className="connectFour_single_node" onClick={() => {this.checkRightToLeftAngledArrays(3,2); this.checkLeftToRightAngledArrays(3,2); this.connectFourAddNewPiece(3,3,24)}} >{this.state.connectFour_insert_piece_at_position[3][3]}</div>
        <div className="connectFour_single_node" onClick={() => {this.checkRightToLeftAngledArrays(2,2); this.checkLeftToRightAngledArrays(4,2); this.connectFourAddNewPiece(3,4,25)}} >{this.state.connectFour_insert_piece_at_position[3][4]}</div>
        <div className="connectFour_single_node" onClick={() => {this.checkRightToLeftAngledArrays(1,1); this.checkLeftToRightAngledArrays(5,2); this.connectFourAddNewPiece(3,5,26)}} >{this.state.connectFour_insert_piece_at_position[3][5]}</div>
        <div className="connectFour_single_node" onClick={() => {this.checkRightToLeftAngledArrays(0,0); this.connectFourAddNewPiece(3,6,27)}} >{this.state.connectFour_insert_piece_at_position[3][6]}</div>
      </div>
      <div className="connectFour_nodes">
        <div className="connectFour_single_node" onClick={() => {this.checkLeftToRightAngledArrays(1,0); this.connectFourAddNewPiece(4,0,28)}} >{this.state.connectFour_insert_piece_at_position[4][0]}</div>
        <div className="connectFour_single_node" onClick={() => {this.checkLeftToRightAngledArrays(2,1); this.connectFourAddNewPiece(4,1,29)}} >{this.state.connectFour_insert_piece_at_position[4][1]}</div>
        <div className="connectFour_single_node" onClick={() => {this.checkRightToLeftAngledArrays(5,1); this.checkLeftToRightAngledArrays(3,1); this.connectFourAddNewPiece(4,2,30)}} >{this.state.connectFour_insert_piece_at_position[4][2]}</div>
        <div className="connectFour_single_node" onClick={() => {this.checkRightToLeftAngledArrays(4,1); this.checkLeftToRightAngledArrays(4,1); this.connectFourAddNewPiece(4,3,31)}} >{this.state.connectFour_insert_piece_at_position[4][3]}</div>
        <div className="connectFour_single_node" onClick={() => {this.checkRightToLeftAngledArrays(3,1); this.checkLeftToRightAngledArrays(5,1); this.connectFourAddNewPiece(4,4,32)}} >{this.state.connectFour_insert_piece_at_position[4][4]}</div>
        <div className="connectFour_single_node" onClick={() => {this.checkRightToLeftAngledArrays(2,1); this.connectFourAddNewPiece(4,5,33)}} >{this.state.connectFour_insert_piece_at_position[4][5]}</div>
        <div className="connectFour_single_node" onClick={() => {this.checkRightToLeftAngledArrays(1,0); this.connectFourAddNewPiece(4,6,34)}} >{this.state.connectFour_insert_piece_at_position[4][6]}</div>
      </div>
      <div className="connectFour_nodes">
        <div className="connectFour_single_node" onClick={() => {this.checkLeftToRightAngledArrays(2,0); this.connectFourAddNewPiece(5,0,35)}} >{this.state.connectFour_insert_piece_at_position[5][0]}</div>
      <div className="connectFour_single_node" onClick={() => {this.checkRightToLeftAngledArrays(3,0); this.checkLeftToRightAngledArrays(3,0); this.connectFourAddNewPiece(5,1,36)}} >{this.state.connectFour_insert_piece_at_position[5][1]}</div>
    <div className="connectFour_single_node" onClick={() => {this.checkLeftToRightAngledArrays(4,0); this.connectFourAddNewPiece(5,2,37)}} >{this.state.connectFour_insert_piece_at_position[5][2]}</div>
        <div className="connectFour_single_node" onClick={() => {this.checkRightToLeftAngledArrays(5,0); this.checkLeftToRightAngledArrays(5,0); this.connectFourAddNewPiece(5,3,38)}} >{this.state.connectFour_insert_piece_at_position[5][3]}</div>
        <div className="connectFour_single_node" onClick={() => {this.checkRightToLeftAngledArrays(4,0); this.connectFourAddNewPiece(5,4,39)}} >{this.state.connectFour_insert_piece_at_position[5][4]}</div>
        <div className="connectFour_single_node" onClick={() => {this.checkRightToLeftAngledArrays(3,0); this.connectFourAddNewPiece(5,5,40)}} >{this.state.connectFour_insert_piece_at_position[5][5]}</div>
        <div className="connectFour_single_node" onClick={() => {this.checkRightToLeftAngledArrays(2,0); this.connectFourAddNewPiece(5,6,41)}} >{this.state.connectFour_insert_piece_at_position[5][6]}</div>
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
          <button className="connectFour_controls_btns connectFour_reset_game_btn" onClick={() => this.connectFourResetGame()}>reset</button>
        <button className="connectFour_controls_btns connectFour_quit_game_btn" onClick={this.connectFourQuitGame}>quit</button>
        </div>
      </div>
    </div>
  </div>
}

const ConnectFourGameOver = function(){
  let connectFour_winner = this.state.connectFour_winner;
  return <div className="connectFour_gameover_container">
    <h1 className="connectFour_gameover_title">Winner:</h1>
    <div className="connectFour_gameover_winner">{connectFour_winner}</div>
    <div>
      <button className="app_LoveYa_font connectFour_gameover_reset" onClick={this.connectFourResetGame}>reset</button>
      <button className="app_LoveYa_font connectFour_gameover_quit" onClick={this.connectFourQuitGame}>quit</button>
    </div>
  </div>
}
