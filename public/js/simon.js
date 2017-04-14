$("document").ready(function() {
    arr = [];
    round = 1;
    i = 0;
    flag = false;
    var myvar;

    function num() {
        $("button").prop('disabled', true);

        btnnumber = Math.floor((Math.random() * 4) + 1);
        arr.push("btn-" + btnnumber);
        console.log(arr);
        startAnimation();
    }

    function startAnimation() {
        i = 0;
        myvar = setInterval(function() {
            animation("." + arr[i]);
        }, 1000);

    }

    function animation(elem) {
        $(elem).animate({
            opacity: '1'
        }, 300);
        $(elem).animate({
            opacity: '0.5'
        }, 300);
        $("#audio-" + arr[i])[0].play();
        i++;
        if (i == arr.length) {
            userPlay();
            clearInterval(myvar);
        }

    }

    function reset(num) {
        $(".ready").prop('disabled', false);
        $("button").prop('disabled', true);
        if (num == 1) {
            $(".round").text("Round : __");
            $("h3").text("Verdict : First start the game.. XD..!!");
        }
        clearInterval(myvar);

    }

    function userPlay() {
        $("button").prop('disabled', false);
        j = 0;
    }
    $("button").on('click', function() {
        $("#audio-" + $(this).attr('class'))[0].play();
        $(this).animate({
            opacity: '1'
        }, 100);
        $(this).animate({
            opacity: '0.5'
        }, 100);
        if ($(this).attr('class') == arr[j]) {
            j++;
            $("h3").text("Great going...");
            if (j > 6)
                $("h3").text("Dude...wooww...!!");
        } else {

            if (!flag) {
                $("h3").text("That's wrong..!! Lets try once more.. :)");
                startAnimation();
            } else {
                $("h3").text("That's wrong..!! Jumping back to the beginning..");
                startGame();
            }
        }

        if (j == arr.length) {
            if (round == 20) {
                $("h3").text("You won....!!... :-D");
                reset(0);
            } else {
                round += 1;
                $(".round").text("Round : 0" + round);
                num();
            }
        }
    });

    function startGame() {
        $(".ready").prop('disabled', true);
        round = 1;
        $(".round").text("Round : 0" + round);
        arr = [];
        num();
    }
    $(".ready").click(function() {
        startGame();

    });
    $(".strict").click(function() {
        if (flag === false) {
            flag = true;
            $(this).css({
                'color': 'red'
            });
        } else {
            $(this).css({
                'color': 'black'
            });
            flag = false;
        }
    });
    $(".reset").click(function() {
        reset(1);
    });
});

// var sequence = [];
// var copy = [];
// var round = 0;
// var startGame =

//     function() {
//         sequence = [];
//         copy = [];
//         round = 0;

//     }
// var newRound = function() {
//     $('[data-round]').text(++this.round);
//     sequence.push(randomNumber());
//     copy = sequence.slice(0);
// }
// var registerClick = function(e) {
//     var desiredResponse = copy.shift();
//     correct = (desiredResponse === actualResponse);
// }


// var checkLose = function() {
//     if (copy.length === 0 && correct) {
//         deactivateSimonBoard();
//         newRound();
//     } else if (correct == flase) {
//         deactivateSimonBoard();
//         endGame();
//     }
// }

// var endGame = function() {
//     $('p[data-action=lose]').show();
//     $($('[data-round]').get(0)).text('0');
// }