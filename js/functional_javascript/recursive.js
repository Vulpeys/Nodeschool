module.exports = function reduce(arr, fn, initial) {
	
}


function countWords(inputWords) {
  return inputWords.reduce(function (prevValue, currValue) {
    if (prevValue[currValue]) {
      prevValue[currValue]++;
    } else {
      prevValue[currValue] = 1;
    }
    return prevValue;
  }, {});
}

