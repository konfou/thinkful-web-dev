function fizzBuzz(countTo) {
  // drills 2.4.4
  var array = [];
  for (var i=1; i <= countTo; i++) {
    value = ''
    if (i % 3 === 0) {
      value+='fizz';
    }
    if (i % 5 === 0) {
      value+='buzz';
    }
    if (value === '') {
      value=i;
    }
    array.push(value)
  }
  return array;
}

function makeFizzBuzz(countTo) {
  fizzBuzz(countTo).forEach(function(item) {
    var newItem = $(
        '<div class="fizz-buzz-item"><span>' +
        item +
        '</span></div>'
    );
    if (['fizz','buzz','fizzbuzz'].includes(item)) {
      newItem.addClass(item);
    }
    $(".js-results").append(newItem);
  })
}

function handleForm() {
  $('#number-chooser').submit(function(query) {
    $(".js-results").empty();
    var choice = $(query.currentTarget).find(
      '[name="number-choice"]').val();
    makeFizzBuzz(choice);
  });
}

$(function() {
  handleForm();
});
