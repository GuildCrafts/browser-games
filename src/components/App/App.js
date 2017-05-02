import React from 'react';
import './app.css';
import Nav from 'components/Nav/Nav';
import Home from 'components/Home/Home';

export default class App extends React.Component{

  render(){
    return(
      <div className="app_container">
        <Nav />
      <Home />
      </div>
    )
  }
}
