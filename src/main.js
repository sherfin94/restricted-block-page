
function initBodyDimensionSetters() {
  $(window).resize(function() {
      $('body').height($(window).height());
      $('body').width($(window).width());
  });

  $(window).trigger('resize');
};

function initClamperForNumbers() {
  Number.prototype.clamp = function(min, max) {
    return Math.min(Math.max(this, min), max);
  };
}

var documentWidth = $('body').width();
var documentHeight = $('body').height();
var boxWidth = $('.box').width();
var boxHeight = $('.box').height();

var keyCodeDirections = {
  39: 'right',
  40: 'down',
  38: 'up',
  37: 'left'
};

var config = {
  stepSize : 10
};

jQuery(document).ready(function() {

  initBodyDimensionSetters();
  initClamperForNumbers();

  documentWidth = $('body').width();
  documentHeight = $('body').height();
  boxWidth = $('.box').width();
  boxHeight = $('.box').height();

  $(document).on('keydown', function(event) {
    var currentPosition = $('.box').position();
    var stepSize = config.stepSize;
    if([37, 38, 39, 40].indexOf(event.keyCode) != -1) {
      moveBox(currentPosition, config.stepSize, keyCodeDirections[event.keyCode]);
    }
  });
});
