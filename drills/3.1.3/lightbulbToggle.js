function lightbulbToggle() {
  $('.lightbulb').click(function(bulb){
    $('.lightbulb').removeClass('bulb-on');
    $(bulb.currentTarget).addClass('bulb-on');
  });
}

$(function() {
  lightbulbToggle();
});
