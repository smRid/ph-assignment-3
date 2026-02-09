//Problem-05: Text Analyzer for an AI Company

function analyzeText(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }

  if (str === "") {
    return "Invalid";
  }

  let allWords = str.split(" ");

  let biggestWord = allWords[0];

  for (let i = 1; i < allWords.length; i++) {
    let currentWord = allWords[i];

    if (currentWord.length > biggestWord.length) {
      biggestWord = currentWord;
    }
  }

  let textWithoutSpaces = str.split(" ").join("");

  let totalCharacters = textWithoutSpaces.length;

  let result = {
    longwords: biggestWord,

    token: totalCharacters,
  };

  return result;
}
