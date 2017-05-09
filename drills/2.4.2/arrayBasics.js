// Creating arrays

function makeList(item1, item2, item3) {
  return [item1, item2, item3];
}

// Adding array items

function addToList(list, item) {
  list.push(item)
  return list
}

// Accessing array items

function accessFirstItem(array) {
  return array[0];
}

function accessThirdItem(array) {
  return array[2];
}

// Array length and access

function findLength(array) {
  return array.length;
}

function accessLastItem(arraytt) {
  return array[array.length-1];
}

// Array copying I

function firstFourItems(array) {
  return array.slice(0, 4);
}

function lastThreeItems(array) {
  return array.slice(-3);
}

// Array copying II

function minusLastItem(array) {
  return array.slice(0, (array.length-1));
}

function copyFirstHalf(array) {
  return array.slice(0, (array.length/2));
}

// Squares with map

function squares(array) {
  return array.map(function(x) {
    return x**2;
  });
}

// Sort

function greatestToLeast(array) {
  return array.sort(function(a, b) {
    // compare function since array contains nums
    return b-a;
  });
}

// Filter

function shortWords(array) {
  return array.filter(function(w) {
    return w.length < 5;
  });
}

// Find

function divisibleBy5(array) {
  return array.find(function(x) {
    return x % 5 === 0;
  });
}
