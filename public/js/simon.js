// let start = false
userCount = 0;
aiCount = 0;

function startGame() {
  let empty = []
  let count = 0;

  let options = ['blue', 'salmon', 'pink', 'green']

  let sounds = {
    'blue': document.getElementById('sound1'),
    'salmon': document.getElementById('sound2'),
    'pink': document.getElementById('sound3'),
   'green': document.getElementById('sound4')
  }

  let randomSound = Math.floor(Math.random()*4)
  console.log('randomSound', randomSound);
  return options[randomSound]
  console.log('options[randomSound]', options[randomSound]);
  let counter = 0
  for(let i = 0; i < 4; i++) {
    setTimeout(function() {

      sounds[options[randomSound]].play()
    }, 1000 * i)
    counter++
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


$(document).ready(function() {
  $('#topleft').click(function() {
    $(this).effect("highlight", {color: '#cff5fc'}, 1000);
    console.log('usercount', userCount);
    userCount++
    })
  $('#topright').click(function() {
    $(this).effect("highlight", {color: '#ffebe5'}, 1000);
    userCount++
    })
  $('#bottomleft').click(function() {
    $(this).effect("highlight", {color: '#ffd6fc'}, 1000);
    userCount++
    })
  $('#bottomright').click(function() {
    $(this).effect("highlight", {color: '#ebffc9'}, 1000);
    userCount++
    })
});

function strictMode() {

}
