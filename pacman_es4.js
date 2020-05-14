    // Disappear and move around event
    var xrandom;
    var yRandom

    function movearound_click(){
      var boardWidth = $("#game-board").width();
      var boardHeight = $("#game-board").height();
      var pacWidth = $("#pac-man").width();
      var pacHeight = $("#pac-man").height();
      xRandom = Math.floor((Math.random() * (boardWidth - pacWidth) + 1));
      yRandom = Math.floor((Math.random() * (boardHeight - pacHeight) + 1));
      console.log(xRandom, yRandom);
      $("#pac-man").fadeOut(500);
      setTimeout(movearound_end, 3000);
      }
    
    function movearound_end(){
      $("#pac-man").css({
        "position": "relative",
        "top": yRandom,
        "left": xRandom
      });
      $("#pac-man").fadeIn(500);
    }

