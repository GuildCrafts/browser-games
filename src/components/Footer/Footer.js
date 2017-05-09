import React from 'react';
import './footer.css';
import { Link }  from 'react-router-dom';

export default class Footer extends React.Component{
  render(){
    return(
      <div className="footer">
        <img className="footer_goomba" src={require('url-loader?limit=10000!./images/goomba.png')} />
        <div className="footer_container"><p className="footer_title">Footer</p></div>
        <div className="footer_container_two"></div>
        <div className="footer_top_section"></div>
      </div>
    )
  }
}
