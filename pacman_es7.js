// Move events
var direction = 0;
  // Move down
  function move_down(){
    $("#pac-man").addClass("transform");
    $("#pac-man").css({"position": "relative"});
    $("#pac-man").css({"transform": "rotate(90deg)"});
    $("#pac-man").animate({top: '+=100px'});
  }

  function move_right(){
    $("#pac-man").addClass("transform");
    $("#pac-man").css({"position": "relative"});
    $("#pac-man").css({"transform": "rotate(0deg)"});
    $("#pac-man").animate({left: '+=100px'});
  }


  function move_left(){
    $("#pac-man").addClass("transform");
    $("#pac-man").css({"position": "relative"});
    $("#pac-man").css({"transform": "rotate(180deg)"});
    $("#pac-man").animate({left: '-=100px'});
  }


  function move_up(){
    $("#pac-man").addClass("transform");
    $("#pac-man").css({"position": "relative"});
    $("#pac-man").css({"transform": "rotate(270deg)"});
    $("#pac-man").animate({top: '-=100px'});
  }
