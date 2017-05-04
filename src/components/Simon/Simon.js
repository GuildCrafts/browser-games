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
            <div className="simon_title">
              <div className="simon_completion">15</div>
              <div className="simon_buttons_container">
                <div className="simon_control_btns simon_last_btn"><p>reset</p></div>
              <div className="simon_control_btns simon_start_btn"><p>quit</p></div>
              </div>
              <div className="simon_strict_mode"><p>s</p></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
