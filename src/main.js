jQuery(document).ready(function() {

  var documentWidth = $('body').width();
  var documentHeight = $('body').height();
  var boxWidth = $('.box').width();

  Number.prototype.clamp = function(min, max) {
  return Math.min(Math.max(this, min), max);
  };

  function goRight(posX) {
    var newPos = String((posX + 10).clamp(0, documentWidth - boxWidth)) + "px";
    $('.box').css({"left": newPos});
  }

  function goDown(posY) {
    var newPos = String(posY + 10) + "px";
    $('.box').css({"top": newPos});
  }

  function goUp(posY) {
    var newPos = String(posY - 10) + "px";
    $('.box').css({"top": newPos});
  }

  function goLeft(posX) {
    var newPos = String((posX - 10).clamp(0, documentWidth - boxWidth)) + "px";
    $('.box').css({"left": newPos});
  }

  $(document).on('keydown', function(event) {
    var currentPosition = $('.box').position();
    switch (event.keyCode) {
      case 39:
        goRight(currentPosition.left);
        break;
      case 40:
        goDown(currentPosition.top);
        break;
        case 38:
        goUp(currentPosition.top);
        break;
        case 37:
        goLeft(currentPosition.left);
        break;
      default:

    }
  });
});
