$(document).ready(function () {
  var userArray = [];
  var memoryArray = [];
  var levelCount = 0;

  //Counter display
  function update_levelCount() {
    $('#count span').text(levelCount);
  };


  //computer turn
  function memoryturn() {
    var num = Math.floor(Math.random() * 4);
    for (var i = 0; i <= memoryArray; i++){
      $(memoryArray[i]).trigger('click');
      console.log (memoryArray);
    };
    $("#" + num).trigger('click', true);
    memoryArray.push(num);
    levelCount++;

  };
  function wincheck(){
    if (turnCount=20) {
      console.log("You Win!");
      userArray=[];
      return;
    };
    userArray=[];
    memoryturn();
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
  $(".but").on('click', function(e,skip){
    if(skip) return ;
    userArray.push(this.id);
    var a = userArray.toString();
    var b = memoryArray.toString();

    if ( a === b ) {
      console.log("yay");
      wincheck();

    } else{
      console.log("no");

    };
      console.log("user" + a);
      console.log("comp" + b);

    });

});
