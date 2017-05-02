import React from 'react';
import './app.css';
import Nav from 'components/Nav/Nav';
import Home from 'components/Home/Home';
import Footer from 'components/Footer/Footer';

export default class App extends React.Component{

  render(){
    return(
      <div className="app_container">
        <Nav />
        <Home />
        <Footer />
      </div>
    )
  }
}
