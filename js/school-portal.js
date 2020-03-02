var colorList = ['#ff382a', '#2380ca', '#e91e63', '#4caf50', '#ff5722', '#61a2c1'];

var setBackgroundColor = function(el) {
    var ind = $('.grade-container').index($(el).parent());         $('body').css('background-color', colorList[ind]);     
    
}

var addFocusClass = function(el) {
 $('.grade-container').removeClass('focus-class');
  $(el).parent().addClass('focus-class');
}

$('button').click( function() {
  setBackgroundColor(this);
  addFocusClass(this);
})