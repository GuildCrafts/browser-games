$(document).ready(function() { //default player turn to   x

    var turn = "X";

    var turns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"]; //default computer turn

    var computersTurn = "O"; //keep track of  computers turn

    var gamesOn = false;

    var count = 0; //prevent loop

    $('#turnX').click(function() {

        var reset = function() {
            divs = $('.tic')
            for (val in divs) {
                div = divs[val].html("")
            }
        }
        var turn = "O";
        var computersTurn = "X";
        $("#turnX").addClass("btn-primary");
        $("#turnO").removeClass("btn-primary");
        reset();

    });
    $('#turnO').click(function() {
        var turn = "X";
        var computersTurn = "O";
        $("#turnO").removeClass("btn-primary");
        $("#turnX").addClass("btn-secondary");
        reset();
    });
    $(".tic").click(function() {
        alert("click");
    });

    function computersTurn() {

        var taken = false;
        while (taken === false && count !== 5) {
            var computersMove = (Math.random() * 10).toFixed();
            var move = $("#" + computersMove).text();
            if (move === "#") {
                $("#" + computersMove).text(computersTurn);
                taken = true;
                turns[computersMove] = computersTurn;
            }
        }
    }

    function playerTurn(turn, id) {
        var spotTaken = $("#" + id).text();
        if (spotTaken === "#") {
            count++;
            turns[id] = turn;
            $("#" + id).text(turn);
            winCondition(turns, turn);
            if (gameOn === false) {
                computerTurn();
                winCondition(turns, computersTurn);
            }

        }
    }

    function winCondtion(turnArray, currentTurn) {
        if (turnArray[0] === currentTurn && turnArray[1] === currentTurn && turnArray[2] === currentTurn) {
            gameOn = true;
            reset();
            alert("Player" + currentTurn + " wins! (Top row across 0,1, and 2 spots)");
        } else if (turnArray[2] === currentTurn && turnArray[4] === currentTurn && [6] === currentTown) {
            gameOn = true;
            reset();
            alert("Player " + currentTurn + " wins! (Top row across 2,4, and 6 spots)");
        } else if (turnArray[0] === currentTurn && turnArray[3] === currentTurn && [6] === currentTown) {
            gameOn = true;
            reset();
            alert("Player " + currentTurn + " wins! (Top row across 0,3, and 6 spots)");
        } else if (turnArray[1] === currentTurn && turnArray[4] === currentTurn && [7] === currentTown) {
            gameOn = true;
            reset();
            alert("Player " + currentTurn + " wins! (Top row across 1,4, and 7 spots)");
        } else if (turnArray[2] === currentTurn && turnArray[5] === currentTurn && [8] === currentTown) {
            gameOn = true;
            reset();
            alert("Player " + currentTurn + " wins! (Top row across 2,5, and 8 spots)");
        } else if (turnArray[0] === currentTurn && turnArray[3] === currentTurn && [6] === currentTown) {
            gameOn = true;
            reset();
            alert("Player " + currentTurn + " wins! (Top row across 0,3, and 6 spots)");
        } else if (turnArray[3] === currentTurn && turnArray[4] === currentTurn && [5] === currentTown) {
            gameOn = true;
            reset();
            alert("Player " + currentTurn + " wins! (Top row across 3,4, and 5 spots)");
        } else if (turnArray[6] === currentTurn && turnArray[7] === currentTurn && [8] === currentTown) {
            gameOn = true;
            reset();
            alert("Player " + currentTurn + " wins! (Top row across 6,7, and 8 spots)");
        }

        function winCondition(turnArray, currentTurn) {

            $(".tic").click(function() {
                var slot = $(this).attr("id");
                playerTurn(turn, slot);
            });


            // //function reset() {
            //     divs = $('.tic')
            //     for (val in divs) {
            //         div = divs[val].html("")
            //     }
            //     //$("tic").each(function(val) {
            //$(val).html("")
            //});


        }
        $(".tic").text("X");
        gameOn = true;


    }

})