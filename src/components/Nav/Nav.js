import React from 'react';
import './nav.css';
import { Link }  from 'react-router-dom';

export default class Nav extends React.Component{

  render(){
    return(
      <div className="nav">
        <div className="nav_container">
          <div className="nav_title">
            <img className="nav_title_logo" src={require('url-loader?limit=10000!./images/nav_bowser_logo.png')} />
          <p className="nav_title_text">Bowser Games</p>
          <div className="nav_links_container">
            <Link to="/Home" className="nav_home_link">home</Link>
            <Link to="/ConnectFour" className="nav_connectfour_link" >connect four</Link>
            <Link to="/TicTacToe" className="nav_tictactoe_link" >tic tac toe</Link>
            <Link to="/Simon" className="nav_simon_link" >simon</Link>
          </div>
          </div>
        </div>
        <div id="top_section"></div>
      </div>
    )
  }
}
