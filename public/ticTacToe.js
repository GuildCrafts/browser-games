$(document).ready(function(){
var userArr = [];
var comArr = [];
var complete = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var usedArr = userArr + comArr;
var players = true // true is two players and false is one player



// on click
$('flex-box').on('click', function(){
  userArr.push(this.id);
  $(this).removeClass('.clean');
  $(this).addClass('box-disabled');
  $(this).text("X");
  console.log(this);
})


});
