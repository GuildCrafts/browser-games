import React from 'react';
import './nav.css';

export default class Nav extends React.Component{

  render(){
    return(
      <div className="nav">
        <div className="nav_container">
          <div className="nav_title">
            <img className="nav_title_logo" src={require('url-loader?limit=10000!./nav_bowser_logo.png')} />
            <p className="nav_title_text">Bowser Games</p>
          </div>
        </div>
        <div id="top_section"></div>
      </div>
    )
  }
}
