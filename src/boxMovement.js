function goRight(pos, stepSize) {
  var newPos = String((pos.left + stepSize).clamp(0, documentWidth - boxWidth)) + "px";
  $('.box').css({"left": newPos});
}

function goDown(pos, stepSize) {
  var newPos = String((pos.top + stepSize).clamp(0, documentHeight - boxHeight)) + "px";
  $('.box').css({"top": newPos});
}

function goUp(pos, stepSize) {
  var newPos = String((pos.top  - stepSize).clamp(0, documentHeight - boxHeight)) + "px";
  $('.box').css({"top": newPos});
}

function goLeft(pos, stepSize) {
  var newPos = String((pos.left  - stepSize).clamp(0, documentWidth - boxWidth)) + "px";
  $('.box').css({"left": newPos});
}


function moveBox(pos, stepSize, direction) {
  var moveFunctions = {
    'right': goRight,
    'down': goDown,
    'up': goUp,
    'left': goLeft
  };
  moveFunctions[direction](pos, stepSize);
}
