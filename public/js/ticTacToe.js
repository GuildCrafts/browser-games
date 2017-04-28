$(document).ready(function () {
  var userArr = [];
  var userOther = [];
  var comArr = [];
  var complete = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  var used = [];
  var turnCount = 0;
  var player = true // true is two players and false is one player


//win check
  function wincheck();{
    if
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
    complete = [0, 1, 2, 3, 4, 5, 6, 7, 8];
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
      if (used.indexOf(ranNum)>=0){
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
    $(this).addClass('.box-disabled');
    $(this).text("X");
    turnCount++;
    console.log(turnCount);
    if (player === true) {
      compTurn();
    } else if (turnCount % 2 == 1) {
      userOther.push(this.id);
      used.push(this.id);
      $(this).addClass('.box-disabled');
      $(this).text("O");
      turnCount++;
      console.log(turnCount);
    }
  });


  //start button
  $('.btn-danger').on('click', function () {
    userArr = [];
    comArr = [];
    complete = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    clear_board();
    $('.display').text('New Game')
  });

});
