  // Move events
  var comingBack = false;

  function on_move_click(){
    if (comingBack) {
      let boardPos = $("#game-board").position();
      //$("#pac-man").css({"transform": "rotate(180deg)"});
      //$("#pac-man").css({"transform": "translate(" + boardPos + "px, 0px)"});

      AnimateRotate(270, function(){
        AnimateMove(0)
      });
      $(".btn-move").text("Muoviti");
    }
    else {
      let pacWidth = $("#pac-man").width();
      let boardWidth = $("#game-board").width();
      //$("#pac-man").css({"transform": "rotate(0deg)"});
      //$("#pac-man").css({"transform": "translate(" + (boardWidth - pacWidth) + "px, 0px)"});

      AnimateRotate(0, function(){
        AnimateMove(boardWidth - pacWidth);
        });
      $(".btn-move").text("Torna indietro");
    }
    comingBack = !comingBack;
  }
  

  function AnimateRotate(angle, callback) {
    // caching the object for performance reasons
    var $elem = $('#pac-man');

    // we use a pseudo object for the animation
    // (starts from `0` to `angle`), you can name it as you want
    $({deg: 0}).animate({deg: angle}, {
        duration: 500,
        step: function(now) {
            // in the step-callback (that is fired each step of the animation),
            // you can use the `now` paramter which contains the current
            // animation-position (`0` up to `angle`)
            $elem.css({
                transform: 'rotate(' + now + 'deg)'
            });
        },
        complete: callback,
        easing: "swing"
    }
    );
}

function AnimateMove(position)
{
  $("#pac-man").animate({
    "margin-left": position + "px"},
    1000, "swing"
    );
}