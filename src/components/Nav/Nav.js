import React from 'react';
import './nav.css';

export default class Nav extends React.Component{

  render(){
    return(
      <div className="nav">
        <div className="nav_container"><p className="nav_title">Bowser Games</p></div>
        <div id="top_section"></div>
      </div>
    )
  }
}
