// Long move events
function long_move_click(){
  var pacWidth = $("#pac-man").width();
  var boardWidth = $("#game-board").width();
  $("#pac-man").addClass("transform");
  $("#pac-man").css({"transform": "rotate(0deg)"});
  $("#pac-man").css({"transform": "translate(" + (boardWidth - pacWidth) + "px, 0px)"});
  }