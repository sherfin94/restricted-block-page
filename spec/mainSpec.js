
var path = '';
if (typeof window.__karma__ !== 'undefined') {
path += 'base/';
}
jasmine.getFixtures().fixturesPath = path + 'spec/javascripts/fixtures';

describe("body", function() {
  beforeEach(function() {
    loadFixtures('index.html');
    $('body').css({'height': '500px'});

    $.holdReady(false);
  });

  it("should have its dimensions set to that of the window's upon resize", function() {
    $('body').height(3);

    $(window).trigger('resize');
    expect($('body').height()).toEqual($(window).height());
    expect($('body').width()).toEqual($(window).width());
  });
})


describe("box", function() {

  beforeEach(function() {
    loadFixtures('index.html');
    $('body').css({'height': '500px'});

    $.holdReady(false);
  });

  it("moves right when right arow is pressed", function() {

    var positionX = $('.box').position().left;
    var event = $.Event('keydown');
    event.keyCode = 39;
    $(document).trigger(event);
    expect($('.box').position().left).toEqual(positionX + config.stepSize);
  });

  it("moves left when left arow is pressed", function() {
    var positionX = $('.box').position().left;
    var event = $.Event('keydown');
    event.keyCode = 37;
    $(document).trigger(event);
    expect($('.box').position().left).toEqual(positionX - config.stepSize);
  });

  it("moves down when down arow is pressed", function() {
    var positionY = $('.box').position().top;
    var event = $.Event('keydown');
    event.keyCode = 40;
    $(document).trigger(event);
    expect($('.box').position().top).toEqual(positionY + config.stepSize);
  });

  it("moves up when up arow is pressed", function() {
    var positionY = $('.box').position().top;
    var event = $.Event('keydown');
    event.keyCode = 38;
    $(document).trigger(event);
    expect($('.box').position().top).toEqual(positionY - config.stepSize);
  });

  it("does not go after right boundary", function() {
    var documentWidth = $('body').width();
    var numSteps = (documentWidth/config.stepSize) + 5;
    var event = $.Event('keydown');
    event.keyCode = 39;
    for(var i = 0; i < numSteps; i++) {
      $(document).trigger(event);
    }
    expect($('.box').position().left).toEqual(documentWidth - ($('.box').width()));
  });

  it("does not go beyond the left boundary", function() {
    var documentWidth = $('body').width();
    var numSteps = (documentWidth/config.stepSize) + 5;
    var event = $.Event('keydown');
    event.keyCode = 37;
    for(var i = 0; i < numSteps; i++) {
      $(document).trigger(event);
    }
    expect($('.box').position().left).toEqual(0);
  });

  it('does not go above the upper screen boundary', function() {
    var documentHeight = $('body').height();
    var numSteps = (documentHeight/config.stepSize) + 5;
    var event = $.Event('keydown');
    event.keyCode = 38;
    for(var i = 0; i < numSteps; i++) {
      $(document).trigger(event);
    }
    expect($('.box').position().top).toEqual(0);
  });

  it('does not go below the lower screen boundary', function() {
    var documentHeight = $('body').height();
    var numSteps = (documentHeight/config.stepSize) + 5;
    var event = $.Event('keydown');
    event.keyCode = 40;
    for(var i = 0; i < numSteps; i++) {
      $(document).trigger(event);
    }
    expect($('.box').position().top).toEqual(documentHeight - $('.box').height());
  });

});
