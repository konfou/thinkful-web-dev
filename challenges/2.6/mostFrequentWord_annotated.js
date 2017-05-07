function getTokens(rawString) {
  // NB: `.filter(Boolean)` removes any falsy items from an array
  return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
  // split a string to a words array
}
  
function mostFrequentWord(text) {
  // get words using getToken function described before
  var words = getTokens(text);
  // create output object
  var wordFrequencies = {};
  // loop through the words array
  for (var i = 0; i <= words.length; i++) {
    // if word has appeared increment the number of times it has
    if (words[i] in wordFrequencies) {
      wordFrequencies[words[i]]++;
    }
    // if word has not appeared initialize count to 1
    else {
      wordFrequencies[words[i]]=1;
    }
  }

  // initialize MaxKey and MaxCount values to the first value
  var currentMaxKey = Object.keys(wordFrequencies)[0];
  var currentMaxCount = wordFrequencies[currentMaxKey];

  // the following works similar to a simple 'get max value' function
  // loop through the word/freq object
  for (var word in wordFrequencies) {
    // if count is greater than the MaxCount
    if (wordFrequencies[word] > currentMaxCount) {
      // make most used word that one and set count to its appearances count
      currentMaxKey = word;
      currentMaxCount = wordFrequencies[word];
    }
  }

  // return most used word
  return currentMaxKey;
}
