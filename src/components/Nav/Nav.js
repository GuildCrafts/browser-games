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


{/* <h1>Browser Games!</h1>

<p>A collection of games to play in a web browser.</p>

<hr>

<nav>
  <ul>
    <li><a>LINK TO FIRST GAME</a></li>
    <li><a>LINK TO SECOND GAME</a></li>
    <li>...</li>
  </ul>
</nav> */}
