$(document).ready(function() {
  'use strict';

  $('#firstButton').click(function() {
    $('body, li').animate({
      color: '#00BFFF',
      backgroundColor: '#FF1493'
    });
  });

  $('#secondButton').click(function() {
    $('body, li').animate({
      color: 'black',
      backgroundColor: 'white'
    });
  });

  $('#first').hover(function() {
    $(this).animate({
      color: ' 	#7FFF00'
    });
  });

  $('#second').hover(function() {
    $('#second').animate({
      color: '#FFFF00'
    });
  });

  $('#third').hover(function() {
    $('#third').animate({
      color: ' 	#708090'
    });

  });
});
