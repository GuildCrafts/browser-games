$(document).ready(function () {
  var userSequence = [];
  var comSequence = [];
  var countSeq = 0;
  var strictMode = false;


  //Red sounds
  $('.red').on('click', function () {
    $('#redsound')[0].play()
  })


  // blue sounds
  $('.blue').on('click', function () {
    $('#bluesound')[0].play()
  })


  // yellow sounds
  $('.yellow').on('click', function () {
    $('#yellowsound')[0].play()
  })


  // green sounds
  $('.green').on('click', function () {
    $('#greensound')[0].play()
  })


  $('.mode').on('click', function () {
    var selected = $('.mode').removeClass('selected').filter(this).addClass('selected');
    var which = selected.prop('id');
    console.log("now you can use ", which, " to make decisions about game mode");
    /*
      In English:
      gather every element that has a .mode class.
      remove the selected class from all of them.
      filter the elements down until we have only the current element
      add selected class to it.
    */
  });
  if (strictMode === true) {
    strictMode = false;
  } else {
    strictMode = true;
  }




  //counter display
  function update_count() {
    countSeq++;
    $('#count').text(countSeq);
  }


  //win check
  function win_check() {
    if (countSeq >= 20) {
      $('#display').text("YOU WIN!");
    } else {
      userSequence = [];
    }
  }


  // play comArray sequence... it works but really fast so it is a challenge
  function playSequence() {
    for (var i = 0; i < comSequence.length; i++) {
      setTimeout(function () {
        if (comSequence[i] === 0) {
          $('#0').addClass('redclick').delay(1000).queue(function (next) {
            $('#0').removeClass('redclick');
            next();
            $('#redsound')[0].play();
          })
        }
      }, 1000)
      setTimeout(function () {
        if (comSequence[i] === 1) {
          $('#1').addClass('blueclick').delay(1000).queue(function (next) {
            $('#1').removeClass('blueclick');
            next();
            $('#yellowsound')[0].play();
          })
        }
      }, 1000)
      setTimeout(function () {
        if (comSequence[i] === 2) {
          $('#2').addClass('yellowclick').delay(1000).queue(function (next) {
            $('#2').removeClass('yellowclick');
            next();
            $('#greensound')[0].play();
          })
        }
      }, 1000)
      setTimeout(function () {
        if (comSequence[i] === 3) {
          $('#3').addClass('greenclick').delay(1000).queue(function (next) {
            $('#3').removeClass('greenclick');
            next();
            $('#greensound')[0].play()
          })
        }
      }, 1000)
    }
  }




//Computer turn
function comTurn() {
  var ranNum = Math.floor(Math.random() * 4);
  var randomID = "#" + ranNum;
  comSequence.push(ranNum);
  update_count();
  console.log(comSequence);
  $('#display').text("WATCH CARFULLY...")
  setTimeout(function () {
    playSequence();
  }, 1000)
}


//Start Button
$('#start').on('click', function () {
  userSequence = [];
  comSequence = [];
  countSeq = 0;
  comTurn();
  $('#display').text("GAME START")
})


//Sequence Check
function sequence_check() {
  if (userSequence.toString() === comSequence.toString()) {
    win_check();
    console.log("yay")
    comTurn();
  } else if (strictMode === false) {
    userSequence = [];
    sequence_repeat();
    $('#losesound')[0].play();
    $('#display').text("TRY AGAIN")
    playSequence();
  } else {
    $('#losesound')[0].play();
    userSequence = [];
    comSequence = [];
    countSeq = 0;
    comTurn();
  }
}


// coloured button click and added to sequence
$('.but').on('click', function () {
  $(this).addClass('redclick').delay(500).removeClass('redclick');
  userSequence.push(this.id);
  if (userSequence.length === comSequence.length) {
    sequence_check();
  }
});
});
