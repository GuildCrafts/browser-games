


$(document).ready(function(){
//"0" "1" "2"
//"3" "4" "5"
//"6" "7" "8"

//var hash = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var tic = []; // X player
var tac = []; // O computer
var winSet = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
var turn = 0;

//computer play
function turnAI(){
    if (turn % 2 < 1)
    if ($(this).hasClass('box-disabled')) return;
    var num = Math.floor(Math.random()*9) - 1;
    if ()
    $(this).addClass('box-disabled', 'marked');
  });
};

function turnCounter();
  turn += 1;
  console.log turn;
  if (turn >=9){
  console.log("Game Over!");
  }
//win check
function winCheck() {
 if (tic.indexOf([0, 1, 2], 0) <= -1){
   console.log ("Game Over!");
 } else {

 }
}

//player choice
$(".flex-box").on('click',function() {
  if($(this).hasClass("disabled")) return; // no no no not today
  $(this).removeClass('clean');
  document.getElementById("this").innerHTML = X;
  $(this).addClass('box-disabled', 'marked');
});


$('.btn-danger').click(function reset(){
    location.reload();

});

});
