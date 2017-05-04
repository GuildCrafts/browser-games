import React from 'react';
import './simon.css';

export default class Simon extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      simon_generated_sequence : ['red','red'],
      simon_user_guesses : [],
      simon_count : 0,
      simon_red_btn_opacity : 1,
      simon_green_btn_opacity : 1,
      simon_blue_btn_opacity : 1,
      simon_yellow_btn_opacity : 1,
      reset_btn_text : 'start'
    }

    this.simonReturnSequence = this.simonReturnSequence.bind(this);
    this.simonReset = this.simonReset.bind(this);
    this.simonQuit = this.simonQuit.bind(this);
  }

  simonReturnSequence(){
    let simon_generated_sequence = this.state.simon_generated_sequence;
    let simon_count = this.state.simon_count;
    const options = ['red','green','blue','yellow'];

    let addRandomColor = () => {
      let randomNum = Math.floor(Math.random() * (4 - 0)) + 0;
      simon_generated_sequence.push( options[ randomNum ] );
      simon_count += 1;
      this.setState({
        simon_generated_sequence : simon_generated_sequence,
        simon_count : simon_count
      })
    }
    for( let i = 0; i < simon_generated_sequence.length; i++){

      if(simon_generated_sequence[i] === 'red'){

        // let setTime =
        // setInterval(() => {
        //   console.log('red');
        //   clearInterval(setTime)
        // },2000)

        let run = new Promise(function(resolve, reject) {

          let isClean = true;

          if (isClean) {
            resolve('Clean');
          } else {
            reject('not Clean');
          }

        });

        run.then(function(fromResolve) {
          console.log('the room is' + fromResolve);
          let romo = setTimeout(() => {console.log('red')}, 2000)
        }).catch(function(fromReject){
        	console.log('the room is' + fromReject);
        })



      } else if( simon_generated_sequence[i] === 'green' ){

          // let setTime =
          // setInterval(() => {
          //   console.log('green');
          //   clearInterval(setTime)
          // },2000)

          let run = new Promise(function(resolve, reject) {

            let isClean = true;

            if (isClean) {
              resolve('Clean');
            } else {
              reject('not Clean');
            }

          });

          run.then(function(fromResolve) {
            console.log('the room is' + fromResolve);
            let romo = setTimeout(() => {console.log('green')}, 2000)
          }).catch(function(fromReject){
            console.log('the room is' + fromReject);
          })


      } else if( simon_generated_sequence[i] === 'blue' ){

        let counter = 0
        let flashBlue = () => {
          this.setState({
            simon_blue_btn_opacity : 0.9,
          })
          setInterval( () => {
            counter += 1

            if(counter === 5){
              clearInterval(flashBlue)
            }

          }, 1000);
        }

        flashBlue();

        this.setState({
          simon_blue_btn_opacity : 1
        })

        console.log('blue!')

      } else if( simon_generated_sequence[i] === 'yellow' ){

        let counter = 0
        let flashYellow = () => {
          this.setState({
            simon_yellow_btn_opacity : 0.4,
          })
          setInterval( () => {
            counter += 1

            if(counter === 5){
              clearInterval(flashYellow)
            }

          }, 1000);
        }

        flashYellow();

        this.setState({
          simon_yellow_btn_opacity : 1
        })

        console.log('yellow!')

      }
    }

    // turn on green light and listen for user input.

  }

  simonReset(){
    let reset_btn_text = this.state.reset_btn_text
    if(reset_btn_text === 'start'){
      this.setState({
        reset_btn_text : 'reset'
      })
      this.simonReturnSequence();
    } else if (reset_btn_text === 'reset'){
      this.setState({
        simon_generated_sequence : [],
        simon_user_guesses : [],
        simon_count : 0,
        simon_red_btn_opacity : 1,
        simon_green_btn_opacity : 1,
        simon_blue_btn_opacity : 1,
        simon_yellow_btn_opacity : 1
      })
      this.simonReturnSequence();
      console.log('>>>> works <<<<<')
    }
  }

  simonQuit(){
    // include code to return user to simon home page
      this.setState({
        simon_generated_sequence : [],
        simon_user_guesses : [],
        simon_count : 0,
        simon_red_btn_opacity : 1,
        simon_green_btn_opacity : 1,
        simon_blue_btn_opacity : 1,
        simon_yellow_btn_opacity : 1,
        reset_btn_text : 'start'
      })
  }

  render(){

    let simon_red_btn_opacity = this.state.simon_red_btn_opacity;
    let simon_blue_btn_opacity = this.state.simon_blue_btn_opacity;
    let simon_green_btn_opacity = this.state.simon_green_btn_opacity;
    let simon_yellow_btn_opacity = this.state.simon_yellow_btn_opacity;
    let simon_count = this.state.simon_count;
    let reset_btn_text = this.state.reset_btn_text;

    return(
      <div className="simon">
        <div className="simon_container">
          <div className="simon_interface">
            <div className="simon_horizontal_line"></div>
            <div className="simon_vertical_line"></div>
          </div>
          <div className="redBox" style={{opacity:simon_red_btn_opacity}}></div>
        <div className="blueBox" style={{opacity:simon_blue_btn_opacity}}></div>
      <div className="greenBox" style={{opacity:simon_green_btn_opacity}}></div>
    <div className="yellowBox" style={{opacity:simon_yellow_btn_opacity}}></div>
          <div className="simon_controls_circle">
            <div className="simon_title">
              <div className="simon_completion">{simon_count}</div>
              <div className="simon_buttons_container">
                <button className="simon_control_btns simon_last_btn" onClick={this.simonReset}><p>{reset_btn_text}</p></button>
              <button className="simon_control_btns simon_start_btn" onClick={this.simonQuit}><p>quit</p></button>
              </div>
              <div className="simon_strict_mode"><p>s</p></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
