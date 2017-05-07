function max(numbers) {
  var tempMax = numbers[0];
  for (var i=0; i <= numbers.length; i++) {
    if (numbers[i] > tempMax) {
       tempMax = numbers[i];
    }
  }
  return tempMax;
}


function min(numbers) {
  var tempMin = numbers[0];
  for (var i=0; i <= numbers.length; i++) {
    if (numbers[i] < tempMin) {
       tempMin = numbers[i];
    }
  }
  return tempMin;
}
