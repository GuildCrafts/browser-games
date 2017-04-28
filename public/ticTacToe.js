$(document).ready(function(){
var userArr = [];
var comArr = [];
var complete = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var usedArr = userArr + comArr;
  console.log(usedArr);
});

$('.flex-box').on('click', function(){
  userArr.push(this.id);
  if (this).hasClass('.disabled') return;
  if (this).hasclass('.clean'){
    (this).removeClass('.clean');
  }
  $(this).addClass('box-disabled', 'marked');

})
