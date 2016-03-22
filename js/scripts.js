$(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    // Surprisingly in Javascript there is no native means of reversing a string!
    var word = $('input.word').val(); // user input is a string
    var wordArray = ($('input.word').val()).split(''); // word is now an array
    var wordReverse = wordArray.reverse().join(''); // reversed array, join() to string

    if (word === '') {
      $('#results').append('<h4 class="red">Please enter something into the text field above.</h4>');
      $('label').addClass('red');
    } else if (word === wordReverse) {
      $('label').removeClass('red');
      $('#results').empty().append('<h4>Your word is <span class="green">' + word + '</span>, the reverse is <span class="green">' + wordReverse + '</span>.</h4> <h1 class="green">IS PALINDROME!</H1>');
    } else {
      $('label').removeClass('red');
      $('#results').empty().append('<h4>Your word is <span class="red">' + word + '</span>, the reverse is <span class="red">' + wordReverse + '</span>.</h4> <h1 class="red">IS NOT PALINDROME!</H1>');
    }
  });



  // Jumbotron background image - goes inside UI Logic
  var jumboHeight = $('.jumbotron').outerHeight();
    function parallax(){
        var scrolled = $(window).scrollTop();
        $('.bg').css('height', (jumboHeight-scrolled) + 'px');
    }

    $(window).scroll(function(e){
        parallax();
    });

});
