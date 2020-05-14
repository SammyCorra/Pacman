// "On acid" events
var rotation = 0;

function acid_click(){
    setInterval(acid_event, 200);
  }
  
  function acid_event(){
    rotation += 90;
    $("#pac-man").css({"-webkit-filter": "hue-rotate(" + rotation + "deg)", "filter": "hue-rotate(" + rotation + "deg)"});
  }
