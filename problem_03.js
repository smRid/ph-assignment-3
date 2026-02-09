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
