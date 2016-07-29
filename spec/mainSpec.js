
var path = '';
if (typeof window.__karma__ !== 'undefined') {
path += 'base/';
}
jasmine.getFixtures().fixturesPath = path + 'spec/javascripts/fixtures';

describe("box", function() {
  beforeEach(function() {
    loadFixtures('index.html');
    $.holdReady(false);
  });

  it("moves right when right arow is pressed", function() {
    var positionX = $('.box').position().left;
    var event = $.Event('keydown');
    event.keyCode = 39;
    $(document).trigger(event);
    expect($('.box').position().left).toEqual(positionX + 10);
  });

  it("moves left when left arow is pressed", function() {
    var positionX = $('.box').position().left;
    var event = $.Event('keydown');
    event.keyCode = 37;
    $(document).trigger(event);
    expect($('.box').position().left).toEqual(positionX - 10);
  });

  it("moves down when down arow is pressed", function() {
    var positionY = $('.box').position().top;
    var event = $.Event('keydown');
    event.keyCode = 40;
    $(document).trigger(event);
    expect($('.box').position().top).toEqual(positionY + 10);
  });

  it("moves up when up arow is pressed", function() {
    var positionY = $('.box').position().top;
    var event = $.Event('keydown');
    event.keyCode = 38;
    $(document).trigger(event);
    expect($('.box').position().top).toEqual(positionY - 10);
  });

  it("does not go after right boundary", function() {
    var documentWidth = $('body').width();
    var numSteps = (documentWidth/10) + 5;
    var event = $.Event('keydown');
    event.keyCode = 39;
    for(var i = 0; i < numSteps; i++) {
      $(document).trigger(event);
    }
    expect($('.box').position().left).toEqual(documentWidth - ($('.box').width()));
  });

  it("does not go beyond the left boundary", function() {
    var documentWidth = $('body').width();
    var numSteps = (documentWidth/10) + 5;
    var event = $.Event('keydown');
    event.keyCode = 37;
    for(var i = 0; i < numSteps; i++) {
      $(document).trigger(event);
    }
    expect($('.box').position().left).toEqual(0);
  });

});
