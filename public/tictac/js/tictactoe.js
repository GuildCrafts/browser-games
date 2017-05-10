$(document).ready(function() {
  var player = 1;
  var ex = 'fa fa-times'
  var oh = 'fa fa-circle-o'

  let player1 = {
    wins: 0
  };

  let player2 = {
    wins: 0
  };

  let winner = function(player) {
      player.wins += 1
    return player
  };

  $('.square').on('click', function(event){

      var squareSelected = $(this);

      if (squareSelected.hasClass(ex) || squareSelected.hasClass(oh)) {
        alert('This square is taken');ex
      } else {

        if ( player === 1 ) {
          squareSelected.addClass(ex);
          if (checkIfPlayerWon(ex)) {
            alert('Player ' + player + ' wins!');
             winner(player1);

          } else {
            player = 2;
          }
        } else {
          squareSelected.addClass(oh);
          if (checkIfPlayerWon(oh)) {
            alert('Player ' + player + ' wins!');
             console.log(winner(player2));

          } else {
          player = 1;
        }
      }
    }
  });

  function checkIfPlayerWon(symbol) {

    if ($('.sq1').hasClass(symbol) && $('.sq2').hasClass(symbol) && $('.sq3').hasClass(symbol)) {
      return true;
    }
    else if ($('.sq4').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq6').hasClass(symbol)) {
      return true;
    }
    else if ($('.sq7').hasClass(symbol) && $('.sq8').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
      return true
    }
    else if ($('.sq1').hasClass(symbol) && $('.sq4').hasClass(symbol) && $('.sq7').hasClass(symbol)) {
      return true;
    }
    else if ($('.sq2').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq8').hasClass(symbol)) {
      return true;
    }
    else if ($('.sq3').hasClass(symbol) && $('.sq6').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
      return true;
    }
    else if ($('.sq1').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
      return true;
    }
    else if ($('.sq3').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq7').hasClass(symbol)) {
      return true;
    } else {
      return false;
    }
  }

});
