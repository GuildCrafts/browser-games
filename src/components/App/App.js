import React from 'react';
import './app.css';
import Nav from 'components/Nav/Nav';
import Home from 'components/Home/Home';
import Footer from 'components/Footer/Footer';
import TicTacToe from 'components/TicTacToe/TicTacToe';
import Simon from 'components/Simon/Simon';
import ConnectFour from 'components/ConnectFour/ConnectFour';
import { Link, Route, HashRouter, Switch } from 'react-router-dom';

export default class App extends React.Component{

  render(){
    return(
      <div className="app_container">
        <HashRouter>
          <Switch>
            <Route exact path="/Home" component={Home}/>
            <Route exact path="/TicTacToe" component={TicTacToe}/>
            <Route exact path="/Simon" component={Simon}/>
            <Route exact path="/ConnectFour" component={ConnectFour}/>
          </Switch>
        </HashRouter>
      </div>
    )
  }
}
