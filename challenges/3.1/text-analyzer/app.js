function getTokens(rawString) {
  // via challenge 2.6
  return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
  // split a string to a words array
}

function makeLinear(rawText) {
  return rawText.replace(/\r?\n|\r/g, "");
  // combine multiple line text in a single string
}

function countUniqueWords(tokens) {
  // also via challenge 2.6
  var uniqueWords = {};
  tokens.forEach(function(token) {
    if (token in uniqueWords) {
      uniqueWords[token]++;
    }
    else {
      uniqueWords[token] = 1;
    }
  }
  return Object.keys(uniqueWords).length
  // alt method from example solution
  // uniqueWords = new Set(tokens);
  // return uniqueWords.size;
}

function getAverageLength(tokens, wordCount) {
  var totalLength = tokens.join("").length;
  return (totalLength / wordCount).toFixed(0);
}

function analyze(text) {
  var tokens = getTokens(makeLinear(userText));
  // analysis
  var wordCount = tokens.length;
  var uniqueWordCount = countUniqueWords(tokens);
  var averageLength = getAverageLength(tokens, wordCount);
  // display
  var textReport = $('.text-report');
  textReport.find('.js-word-count').text(wordCount);
  textReport.find('.js-unique-word-count').text(uniqueWordcount);
  textReport.find('.js-average-length').text(averageLength + " characters");
  textReport.removeClass('hidden');
}

function handleForm() {
  $('.js-text-form').submit(function(query) {
    query.prefentDefault();
    var userText = $(query.currentTarget).find('#user-text').val();
    analyze(userText);
  });
}

$(function() {
  handleForm();
});
