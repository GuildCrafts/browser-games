import React from 'react';
import './app.css';
import Nav from 'components/Nav/Nav';
import Home from 'components/Home/Home';
import Footer from 'components/Footer/Footer';
import TicTacToe from 'components/TicTacToe/TicTacToe';
import Simon from 'components/Simon/Simon';
import ConnectFour from 'components/ConnectFour/ConnectFour';

export default class App extends React.Component{

  render(){
    return(
      <div className="app_container">
        <Nav />
        <ConnectFour />
        <Footer />
      </div>
    )
  }
}
