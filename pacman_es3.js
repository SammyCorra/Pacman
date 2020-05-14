
var comingBack = false;

function on_move_click(){
  if (comingBack) {
    AnimateRotate(0, 180, () => {
      setTimeout(() => {
        AnimateMove(0)
      }, 400)
    });
    $(".btn-move").text("Muoviti");
  }
  else {
    let pacWidth = $('#pac-man').width();
    let boardWidth = $("#game-board").width();
    AnimateRotate(180, 0, () => {
      setTimeout(() => {
        AnimateMove(boardWidth - pacWidth)
      }, 400)
    });
    $(".btn-move").text("Torna indietro");
  }
  comingBack = !comingBack;
}


function AnimateRotate(startangle, endAngle, callback) {
  $({deg: startangle}).animate({deg: endAngle}, {
    duration: 300,
    step: now => {
      console.log(now)
      $('#pac-man').css({
        transform: "rotate("+now+"deg)"
      });
    },
    complete: callback,
    easing: "swing"
  });
}

function AnimateMove(position)
{
  $('#pac-man').animate({
      "margin-left": position + "px"
    },
    2000,
    "swing"
  );
}