let greenAudio = new Audio('audio/simonSound1.mp3');
let redAudio = new Audio('audio/simonSound2.mp3');
let blueAudio = new Audio('audio/simonSound3.mp3');
let yellowAudio = new Audio('audio/simonSound4.mp3');

//These arrays will be filled with objects that contain a color name and a sound. Simon selects these randomly and players try to copy what Simon selects by clicking after watching what Simon chooses:
let simonPattern = [];
let playerPattern = [];

let score = 0

//When the "Start Game" button is clicked, Simon takes the first turn choosing segments to play sounds and change color:
function startGame(){
  if(playerPattern.length === simonPattern.length) {
    simonsTurn();
  }
}


//Colors that the game starts off with before any segments are selected by Simon or clicked by the player:
function greenOriginalColor () {
  document.getElementById("upper-left").style.backgroundColor="green"
}

function redOriginalColor () {
  document.getElementById("upper-right").style.backgroundColor="red"
}

function blueOriginalColor () {
  document.getElementById("bottom-left").style.backgroundColor="blue"
}

function  yellowOriginalColor () {
  document.getElementById("bottom-right").style.backgroundColor="yellow"
}


//Colors that are displayed when segments are selected by Simon or clicked by the player:
function greenLightColor () {
  document.getElementById("upper-left").style.backgroundColor="#54442B"
}


function redLightColor () {
  document.getElementById("upper-right").style.backgroundColor="white"
}


function blueLightColor () {
  document.getElementById("bottom-left").style.backgroundColor="orange"
}


function yellowLightColor () {
  document.getElementById("bottom-right").style.backgroundColor="#533A71"
}

//Changing colors when a player clicks a segment:
function greenClicked () {
  greenLightColor()
  setTimeout(greenOriginalColor, 300)
}

function redClicked () {
  redLightColor()
  setTimeout(redOriginalColor, 300)
}

function blueClicked () {
  blueLightColor()
  setTimeout(blueOriginalColor, 300)
}

function yellowClicked () {
  yellowLightColor()
  setTimeout(yellowOriginalColor, 300)
}


//Color names to put in Simon and player's pattern arrays as sounds play when turns are taken:

function colorFromSound(sound) {
  if(greenAudio === sound) {
    return 'green'
  } else if(redAudio === sound) {
    return 'red'
  } else if(blueAudio === sound) {
    return 'blue'
  } else {
    return 'yellow'
  }
}


//"Simon" takes a turn:

function simonsTurn(){
  let sound_array = [greenAudio, redAudio, blueAudio, yellowAudio];
  let sound = sound_array[Math.floor(Math.random() * sound_array.length)];
  simonPattern.push({color: colorFromSound(sound), sound: sound});

  for(let i = 0; i<simonPattern.length; i++){

    if (simonPattern[i].sound === greenAudio) {
      if(simonPattern[0].sound === greenAudio) {
        greenAudio.play()
        setTimeout(greenLightColor, 500)
        setTimeout(greenOriginalColor, 1000)
      }
      setTimeout(function(){ greenAudio.play(); }, 1500*i)
      setTimeout(greenLightColor, 1500*i)
      setTimeout(greenOriginalColor, 1800*i)
    }

    else if (simonPattern[i].sound === redAudio) {
      if(simonPattern[0].sound === redAudio) {
        redAudio.play()
        setTimeout(redLightColor, 500)
        setTimeout(redOriginalColor, 1000)
      }
      setTimeout(function(){ redAudio.play(); }, 1500*i)
      setTimeout(redLightColor, 1500*i)
      setTimeout(redOriginalColor, 1800*i)
    }

    else if (simonPattern[i].sound === blueAudio) {
      if(simonPattern[0].sound === blueAudio) {
        blueAudio.play()
        setTimeout(blueLightColor, 500)
        setTimeout(blueOriginalColor, 1000)
      }
      setTimeout(function(){ blueAudio.play(); }, 1500*i)
      setTimeout(blueLightColor, 1500*i)
      setTimeout(blueOriginalColor, 1800*i)
    }

    else if (simonPattern[i].sound === yellowAudio) {
      if(simonPattern[0].sound === yellowAudio) {
        yellowAudio.play()
        setTimeout(yellowLightColor, 500)
        setTimeout(yellowOriginalColor, 1000)
      }
      setTimeout(function(){ yellowAudio.play(); }, 1500*i)
      setTimeout(yellowLightColor, 1500*i)
      setTimeout(yellowOriginalColor, 1800*i)
    }
  }
    playersTurn();
}


//Player takes their turn:

//Every time the player takes a turn, they try to recreate the Simon's array of colors and sounds from the beginning:
function playersTurn(){
  playerPattern = [];
}

//Every time the player clicks a segment, a sound plays and the color changes temporarily:
$('.green').click(function(){
  greenAudio.play();
  playerPattern.push({color: colorFromSound(greenAudio), sound: greenAudio})
    if(playerPattern.length != 0){
      for(let i = 0; i<playerPattern.length; i++){
        if(playerPattern[i].sound !== simonPattern[i].sound){
          var x = document.getElementById('loser-message');
          x.innerHTML = "GAME OVER!!! Your score is " + score;
          x.style.display = 'block';
          setTimeout(function(){ location.reload(); }, 5000);
        }
      }
      if(playerPattern.length === simonPattern.length) {
        score++
        setTimeout(function(){ simonsTurn() }, 2000);
      }
    }
});


$('.red').click(function(){
  redAudio.play();
  playerPattern.push({color: colorFromSound(redAudio), sound: redAudio})
    if(playerPattern.length != 0){
      for(let i = 0; i<playerPattern.length; i++){
        if(playerPattern[i].sound !== simonPattern[i].sound){
          var x = document.getElementById('loser-message');
          x.innerHTML = "GAME OVER!!! Your score is " + score;;
          x.style.display = 'block';
          setTimeout(function(){ location.reload(); }, 5000);
        }
      }
      if(playerPattern.length === simonPattern.length) {
        score++
        setTimeout(function(){ simonsTurn() }, 2000);
      }
    }
});

$('.blue').click(function(){
  blueAudio.play();
  playerPattern.push({color: colorFromSound(blueAudio), sound: blueAudio})
    if(playerPattern.length != 0){
      for(let i = 0; i<playerPattern.length; i++){
        if(playerPattern[i].sound !== simonPattern[i].sound){
          var x = document.getElementById('loser-message');
          x.innerHTML = "GAME OVER!!! Your score is " + score;;
          x.style.display = 'block';
          setTimeout(function(){ location.reload(); }, 5000);
        }
      }
      if(playerPattern.length === simonPattern.length) {
        score++
        setTimeout(function(){ simonsTurn() }, 2000);
      }
    }
});

$('.yellow').click(function(){
  yellowAudio.play();
  playerPattern.push({color: colorFromSound(yellowAudio), sound: yellowAudio})
    if(playerPattern.length != 0){
      for(let i = 0; i<playerPattern.length; i++){
        if(playerPattern[i].sound !== simonPattern[i].sound){
          var x = document.getElementById('loser-message');
          x.innerHTML = "GAME OVER!!! Your score is " + score;;
          x.style.display = 'block';
          setTimeout(function(){ location.reload(); }, 5000);
        }
      }
      if(playerPattern.length === simonPattern.length) {
        score++
        setTimeout(function(){ simonsTurn() }, 2000);
      }
    }
});
