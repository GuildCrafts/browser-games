$(document).ready(function () {
      var userArr = [];
      var userOther = [];
      var comArr = [];
      var used = [];
      var turnCount = 0;
      var player = true // true is two players and false is one player


      //win check
      function wincheck() {
        if (userArr.indexOf(0, 1, 2) == 3) {
          $('.display').text("YOU WIN")
        }
        if (userArr.indexOf(3, 4, 5) == 3) {
          $('.display').text("YOU WIN")
        }
        if (userArr.indexOf(6, 7, 8) == 3) {
          $('.display').text("YOU WIN")
        }
        if (userArr.indexOf(0, 3, 6) == 3) {
          $('.display').text("YOU WIN")
        }
        if (userArr.indexOf(1, 4, 7) == 3) {
          $('.display').text("YOU WIN")
        }
        if (userArr.indexOf(2, 5, 8) == 3) {
          $('.display').text("YOU WIN")
        }
        if (userArr.indexOf(0, 4, 8) == 3) {
          $('.display').text("YOU WIN")
        }
        if (userArr.indexOf(6, 4, 2) == 3) {
          $('.display').text("YOU WIN")
        }
        if (comArr.indexOf(0, 1, 2) == 3) {
          $('.display').text("YOU LOSE")
        }
        if (comArr.indexOf(3, 4, 5) == 3) {
          $('.display').text("YOU LOSE")
        }
        if (comArr.indexOf(6, 7, 8) == 3) {
          $('.display').text("YOU LOSE")
        }
        if (comArr.indexOf(0, 3, 6) == 3) {
          $('.display').text("YOU LOSE")
        }
        if (comArr.indexOf(1, 4, 7) == 3) {
          $('.display').text("YOU LOSE")
        }
        if (comArr.indexOf(2, 5, 8) == 3) {
          $('.display').text("YOU LOSE")
        }
        if (comArr.indexOf(0, 4, 8) == 3) {
          $('.display').text("YOU LOSE")
        }
        if (comArr.indexOf(6, 4, 2) == 3) {
          $('.display').text("YOU LOSE")
        }

        //clear whole board
        function clear_board() {
          $('.flex-box').text("");
        }


        //Player modes
        $('.players').on('click', function () {
          var selected = $('.players').removeClass('selected').filter(this).addClass('selected');
          userArr = [];
          comArr = [];
          clear_board();
          $('.display').text('New Game')
          if (player === false) {
            player = true;
            console.log("One Player");
            $('.display').text('One Player')
          } else {
            player = false;
            console.log("Two Player");
            $('.display').text('Two Player')
          }
        });

        //computer
        function compTurn() {
          var ranNum = Math.floor(Math.random() * 8);
          var ranID = "#" + ranNum;
          if (used.indexOf(ranNum) < 0) {
            $(ranID).addClass('.box-disabled');
            $(ranID).text("O");
            $('.display').text('Your Turn')
            turnCount++;
          } else {
            compTurn();
          }
        }


        // on click
        $('.flex-box').on('click', function () {
          if ($(this).hasClass('.box-disabled')) {
            return;
          }
          userArr.push(this.id);
          used.push(this.id);
          $(this.id).addClass('.box-disabled');
          $(this).text("X");
          turnCount++;
          console.log(turnCount);
          if (player === true) {
            compTurn();
          }
          //    } else if (turnCount % 2 == 1) {
          //      userOther.push(this.id);
          //      used.push(this.id);
          //      $(this).addClass('.box-disabled');
          //      $(this).text("O");
          //      turnCount++;
          //      console.log(turnCount);
          //    }
        });


        //start button
        $('.btn-danger').on('click', function () {
          userArr = [];
          comArr = [];
          clear_board();
          turnCount = 0;
          $(".flex-box").removeClass(".box-disabled")
          $('.display').text('New Game')
        });

      };
});
