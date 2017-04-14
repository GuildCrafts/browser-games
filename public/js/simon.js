let userPlays = [], aiPlays = []

let options = ['blue', 'salmon', 'pink', 'green']

let sounds = {
  'blue': document.getElementById('sound1'),
  'salmon': document.getElementById('sound2'),
  'pink': document.getElementById('sound3'),
  'green': document.getElementById('sound4')
}

let colorOfSounds = {
  'blue': '#cff5fc',
  'salmon': '#ffebe5',
  'pink': '#ffd6fc',
  'green': '#ebffc9'
}

function startGame() {
  let randomNumber = Math.floor(Math.random()*4)
  userPlays;
  aiPlays;

  aiPlays.push(options[randomNumber])
  console.log('aiPlays[]', aiPlays);
  for(let i = 0; i < aiPlays.length; i++) {
    timeoutSound(i, 1000 * (i+1))
  }

  usersTurn()
}

function timeoutSound(i, delay) {
  setTimeout(function() {
    sounds[aiPlays[i]].play()
    $('#'+aiPlays[i]).effect('highlight', {color: colorOfSounds[aiPlays[i]]}, 1000)
  }, delay)
}

function aiTurn() {
  console.log('userplays', userPlays);
  if(JSON.stringify(aiPlays) === JSON.stringify(userPlays)) {
    startGame()
  }
  else {
    alert('booooooo, you lose!')
    userPlays = []
    aiPlays = []
  }
}

function usersTurn() {
  $(document).ready(function() {
    $('#blue').unbind().click(function() {
      $(this).effect("highlight", {color: '#cff5fc'}, 1000);
      sounds[options[0]].play()
      userPlays.push(options[0])

      if(endTurn()){
        aiTurn()
        userPlays = []
      }

    })
    $('#salmon').unbind().click(function() {
      $(this).effect("highlight", {color: '#ffebe5'}, 1000);
      sounds[options[1]].play()
      userPlays.push(options[1])


      if(endTurn()){
        aiTurn()
        userPlays = []
      }
    })

    $('#pink').unbind().click(function() {
      $(this).effect("highlight", {color: '#ffd6fc'}, 1000);
      sounds[options[2]].play()
      userPlays.push(options[2])
  
      if(endTurn()){
        aiTurn()
        userPlays = []
      }
    })

    $('#green').unbind().click(function () {
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
