function makeList(item1, item2, item3) {
  return [item1, item2, item3];
}

function addToList(list, item) {
  list.push(item)
  return list
}

function accessFirstItem(array) {
  return array[0];
}

function accessThirdItem(array) {
  return array[2];
}

function findLength(array) {
  return array.length;
}

function accessLastItem(array) {
  return array[array.length-1];
}
