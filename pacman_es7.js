// -90 = TOP
// 0 = RIGHT
// 90 = BOTTOM
// 180 = LEFT
var direction = 0;
const rotationDelay = 200;
const rotationDuration = 200;
const movingDuration = 200;
const pacmanStep = 100;

$(document).keydown(function(e) {
  switch(e.which) {
      case 37: // left
      move_left();
      break;

      case 38: // up
      move_up();
      break;

      case 39: // right
      move_right();
      break;

      case 40: // down
      move_down();
      break;

      default: return; // exit this handler for other keys
  }
  e.preventDefault(); // prevent the default action (scroll / move caret)
});

function move_down(){
  if(direction == 90)
    AnimateMoveY(parseFloat($('#pac-man').css("margin-top")) + pacmanStep);
  else
    AnimateRotate(direction, 90, () => {
      direction = 90;
      setTimeout(() => {
        AnimateMoveY(parseFloat($('#pac-man').css("margin-top")) + pacmanStep)
      }, rotationDelay)
    });
}

function move_right(){
  if(direction == 0)
    AnimateMoveX(parseFloat($('#pac-man').css("margin-left")) + pacmanStep);
  else
    AnimateRotate(direction, 0, () => {
      direction = 0;
      setTimeout(() => {
        AnimateMoveX(parseFloat($('#pac-man').css("margin-left")) + pacmanStep)
      }, rotationDelay)
    });
  //$("#pac-man").css({"position": "relative"});
  //$("#pac-man").css({"transform": "rotate(0deg)"});
  //$("#pac-man").animate({left: '+=100px'});
}


function move_left(){
  if(direction == 180)
    AnimateMoveX(parseFloat($('#pac-man').css("margin-left")) - pacmanStep);
  else
    AnimateRotate(direction, 180, () => {
      direction = 180;
      setTimeout(() => {
        AnimateMoveX(parseFloat($('#pac-man').css("margin-left")) - pacmanStep)
      }, rotationDelay)
    });
  //$("#pac-man").css({"position": "relative"});
  //$("#pac-man").css({"transform": "rotate(180deg)"});
  //$("#pac-man").animate({left: '-=100px'});
}


function move_up(){
  if(direction == -90)
    AnimateMoveY(parseFloat($('#pac-man').css("margin-top")) - pacmanStep);
  else
  AnimateRotate(direction, -90, () => {
    direction = -90;
    setTimeout(() => {
      AnimateMoveY(parseFloat($('#pac-man').css("margin-top")) - pacmanStep)
    }, rotationDelay)
  });
  //$("#pac-man").css({"position": "relative"});
  //$("#pac-man").css({"transform": "rotate(270deg)"});
  //$("#pac-man").animate({top: '-=100px'});
}



function AnimateRotate(startangle, endAngle, callback) {
  $({deg: startangle}).animate({deg: endAngle}, {
    duration: rotationDuration,
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

function AnimateMoveX(position)
{
  $('#pac-man').animate({
      "margin-left": position + "px"
    },
    movingDuration,
    "swing"
  );
}
function AnimateMoveY(position)
{
  $('#pac-man').animate({
      "margin-top": position + "px"
    },
    movingDuration,
    "swing"
  );
}