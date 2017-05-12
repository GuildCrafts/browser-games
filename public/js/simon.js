let greenAudio = new Audio('audio/simonSound1.mp3');
let redAudio = new Audio('audio/simonSound2.mp3');
let blueAudio = new Audio('audio/simonSound3.mp3');
let yellowAudio = new Audio('audio/simonSound4.mp3');

let simonPattern = [];
let playerPattern = [];

function startGame(){
  if(playerPattern.length === simonPattern.length) {
    simonsTurn();
  }
}

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

function greenLightColor () {
  document.getElementById("upper-left").style.backgroundColor="#54442B"
}
function greenInitialColor () {
  document.getElementById("upper-left").style.backgroundColor="green"
}

function redLightColor () {
  document.getElementById("upper-right").style.backgroundColor="white"
}
function redInitialColor () {
  document.getElementById("upper-right").style.backgroundColor="red"
}

function blueLightColor () {
  document.getElementById("bottom-left").style.backgroundColor="orange"
}
function blueInitialColor () {
  document.getElementById("bottom-left").style.backgroundColor="blue"
}

function yellowLightColor () {
  document.getElementById("bottom-right").style.backgroundColor="#533A71"
}
function  yellowInitialColor () {
  document.getElementById("bottom-right").style.backgroundColor="yellow"
}

function simonsTurn(){
  let sound_array = [greenAudio, redAudio, blueAudio, yellowAudio];
  let sound = sound_array[Math.floor(Math.random() * sound_array.length)];
  simonPattern.push({color: colorFromSound(sound), sound: sound});
  for(let i = 0; i<simonPattern.length; i++){
    //green:
    if (simonPattern[i].sound === greenAudio) {
      if(simonPattern[0].sound === greenAudio) {
        greenLightColor()
      }
      setTimeout(function(){ greenAudio.play(); }, 2000*i);
        setTimeout(greenLightColor, 2000*i)
        setTimeout(greenInitialColor, 2500*i)
    }

    else if (simonPattern[i].sound === redAudio) {
        if(simonPattern[0].sound === redAudio) {
          document.getElementById("upper-right").style.backgroundColor="white"
          setTimeout(2000)
        }
      setTimeout(function(){ redAudio.play(); }, 2000*i);
        setTimeout(redLightColor, 2000*i)
        setTimeout(redInitialColor, 2500*i)
    }

    else if (simonPattern[i].sound === blueAudio) {
        if(simonPattern[0].sound === blueAudio) {
          console.log('blue is first')
          document.getElementById("bottom-left").style.backgroundColor="orange"
          setTimeout(2000)
        }
      setTimeout(function(){ blueAudio.play(); }, 2000*i);
        setTimeout(blueLightColor, 2000*i)
        setTimeout(blueInitialColor, 2500*i)
    }

    else if (simonPattern[i].sound === yellowAudio) {
        if(simonPattern[0].sound === yellowAudio) {
          console.log('yellow is first')
          document.getElementById("bottom-right").style.backgroundColor="#533A71"
          setTimeout(2000)
        }
      setTimeout(function(){ yellowAudio.play(); }, 2000*i);
        setTimeout(yellowLightColor, 2000*i)
        setTimeout(yellowInitialColor, 2500*i)
    }
  }
    playersTurn();
}

function playersTurn(){
  playerPattern = [];
}


$('.green').click(function(){
  greenAudio.play();
  playerPattern.push({color: colorFromSound(greenAudio), sound: greenAudio})
  console.log(playerPattern.length, simonPattern.length)
    if(playerPattern.length != 0){
      for(let i = 0; i<playerPattern.length; i++){
        if(playerPattern[i].sound !== simonPattern[i].sound){
          var x = document.getElementById('loser-message');
          x.style.display = 'block';
          setTimeout(function(){ location.reload(); }, 2000);
        }
      }
      if(playerPattern.length === simonPattern.length) {
        setTimeout(function(){ simonsTurn() }, 2000);
      }
    }
});

$('.red').click(function(){
  redAudio.play();
  playerPattern.push({color: colorFromSound(redAudio), sound: redAudio})
  console.log(playerPattern.length, simonPattern.length)
    if(playerPattern.length != 0){
      console.log('yes')
      for(let i = 0; i<playerPattern.length; i++){
        if(playerPattern[i].sound !== simonPattern[i].sound){
          var x = document.getElementById('loser-message');
          x.style.display = 'block';
          setTimeout(function(){ location.reload(); }, 2000);
        }
      }
      if(playerPattern.length === simonPattern.length) {
        setTimeout(function(){ simonsTurn() }, 2000);
      }
    }
});

$('.blue').click(function(){
  blueAudio.play();
  playerPattern.push({color: colorFromSound(blueAudio), sound: blueAudio})
  console.log(playerPattern.length, simonPattern.length)
    if(playerPattern.length != 0){
      console.log('yes')
      for(let i = 0; i<playerPattern.length; i++){
        if(playerPattern[i].sound !== simonPattern[i].sound){
          var x = document.getElementById('loser-message');
          x.style.display = 'block';
          setTimeout(function(){ location.reload(); }, 2000);
        }
      }
      if(playerPattern.length === simonPattern.length) {
        setTimeout(function(){ simonsTurn() }, 2000);
      }
    }
});

$('.yellow').click(function(){
  yellowAudio.play();
  playerPattern.push({color: colorFromSound(yellowAudio), sound: yellowAudio})
  console.log(playerPattern.length, simonPattern.length)
    if(playerPattern.length != 0){
      for(let i = 0; i<playerPattern.length; i++){
        if(playerPattern[i].sound !== simonPattern[i].sound){
          var x = document.getElementById('loser-message');
          x.style.display = 'block';
          setTimeout(function(){ location.reload(); }, 2000);
        }
      }
      if(playerPattern.length === simonPattern.length) {
        setTimeout(function(){ simonsTurn() }, 2000);
      }
    }
});
