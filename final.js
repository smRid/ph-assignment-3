//Problem-01: New Price for Eid Sale

function newPrice(currentPrice, discount) {
  let isCurrentPrice = typeof currentPrice == "number" && !isNaN(currentPrice);

  let isDicount = typeof discount == "number" && !isNaN(discount);

  if (isCurrentPrice === false) {
    return "Invalid";
  }

  if (isDicount === false) {
    return "Invalid";
  }

  if (discount < 0 && discount > 100) {
    return "Invalid";
  }

  let discountAmount = (currentPrice * discount) / 100;

  let discountPrice = currentPrice - discountAmount;

  return discountPrice.toFixed(3);
}

//Problem-02: OTP Validation for Zapshift

function validOtp(otp) {
  if (typeof otp !== "string") {
    return "Invalid";
  }

  if (otp.length !== 8) {
    return false;
  }

  if (!otp.startsWith("ph-")) {
    return false;
  } else return true;
}

//Problem-03: BCS Final Score Calculator

function finalScore(obj) {
  if (typeof obj !== "object" && obj === null) {
    return "Invalid";
  }

  if (Array.isArray(obj)) {
    return "Invalid";
  }

  if (
    typeof obj.right !== "number" &&
    typeof obj.wrong !== "number" &&
    typeof obj.skip !== "number"
  ) {
    return "Invalid";
  }

  let total = obj.right + obj.wrong + obj.skip;

  if (total !== 100) {
    return "Invalid";
  }

  let score = obj.right - obj.wrong * 0.5;

  return Math.round(score);
}

//Problem-04: Upcoming Gono Vote

function gonoVote(array) {
  if (!Array.isArray(array)) {
    return "Invalid";
  }

  let ha = 0;

  let na = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "ha") {
      ha = ha + 1;
    } else if (array[i] === "na") {
      na = na + 1;
    }
  }

  if (ha > na) {
    return true;
  } else if (ha === na) {
    return "equal";
  } else {
    return false;
  }
}

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
