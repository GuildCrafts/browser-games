import React from 'react';
import './home.css';

export default class Index extends React.Component{

  render(){
    return(
      <div className="home_container">
        <img className="home_bowser_hero" src={require('url-loader?limit=10000!./bowser_hero.png')} />
        <div className="home_link_container">
          <div className="home_select_game_text app_LoveYa_font">Play</div>
        <div className="home_links app_LoveYa_font home_tictactoe_link">Tic Tac Toe</div>
        <div className="home_links app_LoveYa_font home_simon_link">Simon</div>
        <div className="home_links app_LoveYa_font home_empty_link">Empty</div>
        </div>
      </div>
    )
  }
}
