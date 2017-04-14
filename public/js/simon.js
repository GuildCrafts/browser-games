let userPlays = []
let aiPlays = []
let aiCount = 0

let options = ['blue', 'salmon', 'pink', 'green']

let sounds = {
  'blue': document.getElementById('sound1'),
  'salmon': document.getElementById('sound2'),
  'pink': document.getElementById('sound3'),
  'green': document.getElementById('sound4')
}

function startGame() {
  let randomNumber = Math.floor(Math.random()*4)

  userPlays = []
  aiPlays.push(options[randomNumber])
  for(let i = 0; i < aiPlays.length; i++) {
    console.log('i', i);
    timeoutSound(i)
  }
  usersTurn()
}

function timeoutSound(i) {
  let counter = 0
  setTimeout(function() {
    sounds[aiPlays[i]].play()
    $('#'+aiPlays[i]).effect('highlight', {}, 2000)
    // console.log('aiplayyyy', aiPlays);
  }, 2000)
  counter++
}

function aiTurn() {
  console.log('aiplays', aiPlays)
  console.log('userplays', userPlays);
  if(JSON.stringify(aiPlays) === JSON.stringify(userPlays)) {
    startGame()
    userPlays = []
  }
  else {
    console.log('failed')
    userPlays = []
  }
}
  // var i = 0;
  // for(let key in sounds) {
  //
  //   setTimeout(function() {
  //
  //     sounds[options[randomSound]].play()
  //   }, 1000 * i)
  //   i++
  // }


function usersTurn() {
  $(document).ready(function() {
    $('#blue').unbind('click').bind('click', function() {
      $(this).effect("highlight", {color: '#cff5fc'}, 1000);
      sounds[options[0]].play()
      userPlays.push(options[0])
      if(endTurn()){
        aiTurn()
        userPlays = []
      }
      })
    $('#salmon').unbind('click').bind('click', function() {
      $(this).effect("highlight", {color: '#ffebe5'}, 1000);
      sounds[options[1]].play()
      userPlays.push(options[1])
      if(endTurn()){
        aiTurn()
        userPlays = []
      }
      })

    $('#pink').unbind('click').bind('click',function() {
      $(this).effect("highlight", {color: '#ffd6fc'}, 1000);
      sounds[options[2]].play()
      userPlays.push(options[2])
      if(endTurn()){
        aiTurn()
        userPlays = []
      }
      })
    $('#green').unbind('click').bind('click', function () {
      $(this).effect("highlight", {color: '#ebffc9'}, 1000);
      sounds[options[3]].play()
      userPlays.push(options[3])
      if(endTurn()){
        aiTurn()
        userPlays = []
      }
    });
  });
}

function endTurn() {
  return userPlays.length === aiPlays.length
}

function strictMode() {

}
