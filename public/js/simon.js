class Game = () => {
    constructor() {
        this.welcome = []
        this.audio = {}
        this.lightUp = 'colors'
        this.gameVoice = ''
    }

        startGame() => {

        }

        audio() => {
        <a href="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"></a>
        <a href="https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"></a>
        <a href="https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"></a>
        <a href="https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"></a>
        }

        lightUp() => {

        }

        gameVoice(msg) => {
            setMessage('').innerText = msg
        }
}

class Simon = () => {
    constructor() {
        this.turn = []
        this.audio =
        this.click = ['colors']
        this.gameVoice = ''
    }

        simonTurn() => {
            //have our array of colors we're picking from
            let colors = ['green', 'red', 'yellow', 'blue']
            //randomly pick from array
            for(let i = 1; i <= colors.length; i++) {
                               
            }
        }
        //call a function that displays simon's choice
        simonChoice() => {

        }
        //record simon's choice, prob by pushing into empty array

        }

        simonAudio() => {

        }

        simonClick() => {

        }
    }

    class Player = () => {
        constructor() {
            this.turn = []
            this.audio =
            this.color = 'pickColors'
            this.gameVoice = ''
        }

        playerTurn() => {
            //array that records player click
            //check match (compare simon and player clicks)
            for(let i = 1; i <= 4; i++) {
                if(pickColor >= 4) {
                    turn.push([1])
                }
            }
        }

        playerAudio() => {

        }

        playerClick() => {

        }
}
