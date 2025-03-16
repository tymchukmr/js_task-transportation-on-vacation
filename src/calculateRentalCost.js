/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRent = 40;
  const discountThreshold1 = 3;
  const discountThreshold2 = 7;

  let totalCost = days * dayRent;

  if (days >= discountThreshold1) {
    totalCost -= 20;
  } else if (days >= discountThreshold2) {
    totalCost -= 50;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
