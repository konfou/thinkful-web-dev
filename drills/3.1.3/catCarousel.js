function catCarousel() {
  $('.thumbnail').click(function(thumb) {
    var newHero = $(thumb.currentTarget).find('img').attr('src');
    $('.hero img').attr('src', newHero);
  })
}

$(function() {
  catCarousel();
});
