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
