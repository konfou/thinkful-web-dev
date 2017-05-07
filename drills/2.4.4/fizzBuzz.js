function fizzBuzz(countTo) {
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
