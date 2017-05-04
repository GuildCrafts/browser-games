import React from 'react';
import './simon.css';

export default class Simon extends React.Component{
  render(){
    return(
      <div className="simon">
        <div className="simon_container">
          <div className="simon_interface">
            <div className="simon_horizontal_line"></div>
            <div className="simon_vertical_line"></div>
          </div>
          <div className="redBox"></div>
          <div className="blueBox"></div>
          <div className="greenBox"></div>
          <div className="yellowBox"></div>
          <div className="simon_controls_circle">
            <div className="simon_title">Simon</div>
          </div>
        </div>
      </div>
    )
  }
}
