var MAX = 20;
var compPattern = [];
var userPattern = [];
var colors = ['green', 'red', 'yellow', 'blue'];
var startState = false;

var main = function() {

  $("#start").on("click", function() {
    startState = true;
    startSequence();
  });

  $("#clear").on("click", function() {
    clear()();
  });


  $(".piece").on("click", function() {
    var num = $(this).attr('id');
    playSound(parseInt(num));

    if (parseInt(num) == compPattern[userPattern.length]) {
      userPattern.push(parseInt(num));
      if (userPattern.length == compPattern.length && userPattern[userPattern.length - 1] == compPattern[userPattern.length - 1]) {
        if (compPattern.length == MAX) {
          setTimeout(function() {
            $('.count').text('You win!!!');

          }, 300);
          setTimeout(function() {
            clear();
          }, 1500);

        } else {
          startSequence();
        }

      }

    } else {

      $('.count').text('Wrong. Try Again');

      setTimeout(function() {
        repeatSequence();
        $('.count').text(compPattern.length);
      }, 1800);
    }

  })
};

var newColor = function() {
  var id = Math.floor(Math.random() * ((colors.length - 1) + 1));
  console.log('new color: ' + id);
  return id;
}

var playSound = function(id) {
  var idSound = 'audio-' + colors[id];
  console.log('execute audio: ' + idSound);
  document.getElementById(idSound).play();

}

function repeatSequence() {
  userPattern = [];
  var offset = 0;
  compPattern.forEach(function(id) {
    setTimeout(function() {
      activeColor(id);
    }, 1000 + offset);
    offset += 1000;
  });
}

function startSequence() {
  userPattern = [];

  var next = newColor();

  compPattern.push(next);
  $('.count').text(compPattern.length);
  var offset = 0;
  compPattern.forEach(function(id) {
    setTimeout(function() {
      activeColor(id);
    }, 1000 + offset);
    offset += 1000;

  });
}

function restart() {
  compPattern = [];
  userPattern = [];
  $('.count').text('Restarting...');
  setTimeout(function() {
    $('.count').text('0');
    startSequence();
  }, 1000);
}

function clear() {
  compPattern = [];
  userPattern = [];

  $('.count').text('Ending Game...');
  setTimeout(function() {
    $('.count').text('0');
  }, 1000);
}

function activeColor(id) {
  playSound(id);
  var numId = '#' + id;
  var newClass = colors[id] + '-lightup'
  $(numId).addClass(newClass);
  console.log(numId + ' : ' + newClass);
  setTimeout(function() {
    inactiveColor(id);
  }, 800);
}

function inactiveColor(id) {
  var numId = '#' + id;
  var inClass = colors[id] + '-lightup'
  $(numId).removeClass(inClass);
  console.log(numId + ' remove ' + inClass);
}

$(document).ready(main);
