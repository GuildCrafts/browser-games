import React from 'react';
import './connectFour.css'

export default class ConnectFour extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return(
      <div className="connectFour">
        <div className="connectFour_container">
          <div className="app_LoveYa_font connectFour_title">Connect Four</div>

          <div className="connectFour_interface">
              <div className="connectFour_nodes">
                <div className="connectFour_single_node"></div>
                <div className="connectFour_single_node"></div>
                <div className="connectFour_single_node"></div>
                <div className="connectFour_single_node"></div>
                <div className="connectFour_single_node"></div>
                <div className="connectFour_single_node"></div>
                <div className="connectFour_single_node"></div>
              </div>
            <div className="connectFour_nodes">
              <div className="connectFour_single_node"></div>
              <div className="connectFour_single_node"></div>
              <div className="connectFour_single_node"></div>
              <div className="connectFour_single_node"></div>
              <div className="connectFour_single_node"></div>
              <div className="connectFour_single_node"></div>
              <div className="connectFour_single_node"></div>
            </div>
            <div className="connectFour_nodes">
              <div className="connectFour_single_node"></div>
              <div className="connectFour_single_node"></div>
              <div className="connectFour_single_node"></div>
              <div className="connectFour_single_node"></div>
              <div className="connectFour_single_node"></div>
              <div className="connectFour_single_node"></div>
              <div className="connectFour_single_node"></div>
            </div>
            <div className="connectFour_nodes">
              <div className="connectFour_single_node"></div>
              <div className="connectFour_single_node"></div>
              <div className="connectFour_single_node"></div>
              <div className="connectFour_single_node"></div>
              <div className="connectFour_single_node"></div>
              <div className="connectFour_single_node"></div>
              <div className="connectFour_single_node"></div>
            </div>
            <div className="connectFour_nodes">
              <div className="connectFour_single_node"></div>
              <div className="connectFour_single_node"></div>
              <div className="connectFour_single_node"></div>
              <div className="connectFour_single_node"></div>
              <div className="connectFour_single_node"></div>
              <div className="connectFour_single_node"></div>
              <div className="connectFour_single_node"></div>
            </div>
            <div className="connectFour_nodes">
              <div className="connectFour_single_node"></div>
              <div className="connectFour_single_node"></div>
              <div className="connectFour_single_node"></div>
              <div className="connectFour_single_node"></div>
              <div className="connectFour_single_node"></div>
              <div className="connectFour_single_node"></div>
              <div className="connectFour_single_node">
                <div className="connectFour_outer_red_piece">
                  <div className="connectFour_red_piece">
                    <p className="connectFour_emblem">*</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="connectFour_scoreboard">
            <div className="connectFour_player_scores_container">

              <div className="connectFour_player1_scores">
                <div className="connectFour_player1_div">
                  <div className="app_LoveYa_font">Player 1</div>
                  <div className="connectFour_player1_score">0</div>
                </div>
              </div>

              <div className="connectFour_player2_scores">
                <div className="connectFour_player2_div">
                  <div className="app_LoveYa_font">Player 2</div>
                <div className="connectFour_player2_score">0</div>
                </div>
              </div>

            </div>

            <div className="connectFour_controls">
              <div className="connectFour_buttons_container">
                <button className="connectFour_controls_btns connectFour_reset_game_btn">reset</button>
                <button className="connectFour_controls_btns connectFour_quit_game_btn">quit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
