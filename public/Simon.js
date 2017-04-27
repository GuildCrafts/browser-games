$(document).ready(function () {
  var userArray = [];
  var memoryArray = [];
  var levelCount = 0;

  //win check
//  function wincheck()
//  if (levelCount >= 20) {
//    console.log("You win");
//  };

  //Counter display
  function update_levelCount() {
    $('#count span').text(levelCount)
  };


  //computer turn
  function memoryturn() {
    var num = Math.floor(Math.random() * 4);
    var numRan = "#" + num;
    var c = jQuery.Event('click');
    levelCount++;
      $(numRan).triggerHandler('c');




  };


  //Restart button
  $(".newgame").on('click', function () {
    userArray = [];
    memoryArray = [];
    levelCount = 0;
    update_levelCount();
    memoryturn();

  });

  // clicking on the buttons
  $(".but").on('click', function () {
    userArray.push(this.id);
    if (userArray !== memoryArray) {

    };

  });



});
