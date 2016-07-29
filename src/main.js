

var config = {
  stepSize : 10
}

jQuery(document).ready(function() {

  $(window).resize(function() {
      $('body').height($(window).height());
      $('body').width($(window).width());
  });

  $(window).trigger('resize');
  var stepSize = config.stepSize;

  var documentWidth = $('body').width();
  var documentHeight = $('body').height();
  var boxWidth = $('.box').width();
  var boxHeight = $('.box').height();

  Number.prototype.clamp = function(min, max) {
    return Math.min(Math.max(this, min), max);
  };

  function goRight(posX) {
    var newPos = String((posX + stepSize).clamp(0, documentWidth - boxWidth)) + "px";
    $('.box').css({"left": newPos});
  }

  function goDown(posY) {
    var newPos = String((posY + stepSize).clamp(0, documentHeight - boxHeight)) + "px";
    $('.box').css({"top": newPos});
  }

  function goUp(posY) {
    var newPos = String((posY  - stepSize).clamp(0, documentHeight - boxHeight)) + "px";
    $('.box').css({"top": newPos});
  }

  function goLeft(posX) {
    var newPos = String((posX  - stepSize).clamp(0, documentWidth - boxWidth)) + "px";
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
