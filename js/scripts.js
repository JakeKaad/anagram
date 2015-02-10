var anagram = function(string, arrayToCompare) {
  var anagrams = getAnagramArray(string, arrayToCompare);
  if (hasMatch(string, arrayToCompare)) {
    return "Matches: " + anagrams.join(", ");
  } else {
    return "No anagrams found";
  }
};

var hasMatch = function(string, arrayToCompare) {
  var stringLetters = string.split("").sort();
  var anagrams = [];
  arrayToCompare.forEach(function(word){
    var wordLetters = word.split("").sort();
    if (checkArrays(stringLetters, wordLetters)) {
      anagrams.push(word);
    }
  });
  if (!!anagrams[0]) {
    return true;
  } else {
    return false;
  }
};


var getAnagramArray = function(string, arrayToCompare) {
  var stringLetters = string.split("").sort();
  var anagrams = [];
  var wordLetters = [];
  arrayToCompare.forEach(function(word){
    wordLetters = word.split("").sort();
    if (checkArrays(stringLetters, wordLetters)) {
      anagrams.push(word);
    }
  });
  return anagrams;
};

var checkArrays = function(arr1, arr2) {
  for(var i = 0; i < (arr1.length + 1); i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  };
  return true;
};
