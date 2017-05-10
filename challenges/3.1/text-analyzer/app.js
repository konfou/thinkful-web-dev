function getTokens(rawText) {
  var rawString = rawText.replace("\r\n", "");
  return rawString.toLowerCase().split(/\s+/);
}

function countUniqueWords(tokens) {
  var uniqueWords = [];
  tokens.forEach(function(token) {
    if (!(uniqueWords.includes(token))) {
      uniqueWords.push(token);
    }
  })
  return uniqueWords.length;
}

function getAverageLength(tokens) {
  var totalLength = tokens.join("").length;
  var wordCount = tokens.length;
  return (totalLength / wordCount).toFixed(0);
}

function analyze(rawText) {
  var tokens = getTokens(rawText);
  // analysis
  var wordCount = tokens.length;
  var uniqueWordCount = countUniqueWords(tokens);
  var averageLength = getAverageLength(tokens);
  // display
  var textReport = $('.js-text-report');
  textReport.find('.js-word-count').text(wordCount);
  textReport.find('.js-unique-word-count').text(uniqueWordCount);
  textReport.find('.js-average-length').text(averageLength + " characters");
  textReport.removeClass('hidden');
}

function handleForm() {
  $('.js-text-form').submit(function(query) {
    query.preventDefault();
    var userText = $(this).find('#user-text').val();
    analyze(userText);
  });
}

$(function() {
  handleForm();
});
