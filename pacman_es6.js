// Death events
function death_click(){
    setInterval(death_event, 200);
  }

  function death_event(){
    $("#pac-man").css({"transform": "rotate(270deg)", "-webkit-filter": "hue-rotate(270deg)", "filter": "hue-rotate(270deg)"});
    $("#pac-man").css({"transform": "transition((width), 0px)"});
  }