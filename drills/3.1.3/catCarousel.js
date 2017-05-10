function catCarousel() {
  $('.thumbnail').click(function(event) {
    var newHero = $(this).find('img').attr('src');
    $('.hero img').attr('src', newHero);
  })
}

$(function() {
  catCarousel();
});
