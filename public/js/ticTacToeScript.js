var main = function(){

  //resets game


  function resetGame() {

  window.location.reload();
    };

    var resetBtn = document.querySelector('.resetBtn');

    resetBtn.addEventListener('click', resetGame);

 


  var player1turn = true;


  $(".cell").click(function() {
    if (player1turn && !$(this).hasClass("yellow")) {
      $(this).addClass("purple");
      $("#playerone").removeClass("purple");
      $("#playertwo").addClass("yellow");
      player1turn = false;
    }else if (!$(this).hasClass("purple")){
      $(this).addClass("yellow");
      $("#playertwo").removeClass("yellow");
      $("#playerone").addClass("purple");
      player1turn = true;
    }

    //Check for purple Win --------------
    if ($(".a.purple").length == 3 || $(".b.purple").length == 3
       || $(".c.purple").length == 3 || $(".1.purple").length == 3 ||
        $(".2.purple").length == 3 || $(".3.purple").length == 3){
      $("html").css("background-color", "#b45bf4");
      $(".cell.purple").css("border-color", "white");
      document.getElementById("playerone").innerHTML = "Purple Wins!";

    }
    //Check diagonals
    if ($("#A1").hasClass("purple") && $("#B2").hasClass("purple") && $("#C3").hasClass("purple")){
      $("html").css("background-color", "#b45bf4");
      $(".cell.purple").css("border-color", "white");
    }
    if ($("#A3").hasClass("purple") && $("#B2").hasClass("purple") && $("#C1").hasClass("purple")){
      $("html").css("background-color", "#b45bf4");
      $(".cell.purple").css("border-color", "white");
    }
    //Check For yellow Win ------------------
     if ($(".a.yellow").length == 3 || $(".b.yellow").length == 3
       || $(".c.yellow").length == 3 || $(".1.yellow").length == 3 ||
        $(".2.yellow").length == 3 || $(".3.yellow").length == 3){
      $("html").css("background-color", "#dae026");
      $(".cell.yellow").css("border-color", "white");
      document.getElementById("playertwo").innerHTML = "Yellow Wins!";

    }
    //Check diagonals
    if ($("#A1").hasClass("yellow") && $("#B2").hasClass("yellow") && $("#C3").hasClass("yellow")){
      $("html").css("background-color", "#dae026");
      $(".cell.yellow").css("border-color", "white");
    }
    if ($("#A3").hasClass("yellow") && $("#B2").hasClass("yellow") && $("#C1").hasClass("yellow")){
      $("html").css("background-color", "#dae026");
      $(".cell.yellow").css("border-color", "white");
    }

    //Check for draw
    if ($(".cell.purple").length + $(".cell.yellow").length == 9){
      $("html").css("background-color", "#ebebeb");
      document.getElementById("playerone").innerHTML = "DRAW!";
      document.getElementById("playertwo").innerHTML = "DRAW!";

    }

  });

};



$(document).ready(main);
