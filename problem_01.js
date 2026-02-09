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
