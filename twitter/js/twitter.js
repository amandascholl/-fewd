$(document).ready(function(){
  $('.like').click( function() {
    var counter = $('.likecount').val();
    counter++ ;
    $('.likecount').val(counter);
    });
});

$(document).ready(function(){
    $('.like-two').click( function() {
      var counter = $('.likecount-two').val();
      counter++ ;
      $('.likecount-two').val(counter);
    });
});

$(document).ready(function(){
    $('.like-three').click( function() {
      var counter = $('.likecount-three').val();
      counter++ ;
      $('.likecount-three').val(counter);
    });
});

function updateCountdown() {
  var remaining = 140 - jQuery('.happening').val().length;
  jQuery('.countdown').text(remaining);
}

jQuery(document).ready(function($) {
    updateCountdown();
    $('.happening').change(updateCountdown);
    $('.happening').keyup(updateCountdown);
});
