import React from 'react';
import './home.css';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';
import { Link }  from 'react-router-dom';

export default class Index extends React.Component{

  render(){
    return(
      <div>
        <Nav/>
        <div className="home_container">
          <img className="home_bowser_hero" src={require('url-loader?limit=10000!./images/bowser_hero.png')} />
          <div className="home_link_container">
            <div className="home_select_game_text">Play</div>
            <Link to="/TicTacToe"><div className="home_links home_tictactoe_link">Tic Tac Toe</div></Link>
            <Link to="/Simon"><div className="home_links home_simon_link">Simon</div></Link>
            <Link to="/ConnectFour"><div className="home_links home_empty_link">Connect Four</div></Link>
          </div>
        </div>
      <Footer/>
      </div>
    )
  }
}
