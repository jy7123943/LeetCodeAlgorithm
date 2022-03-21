/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfit = 0;
  let prev = prices[0];
  let prevBuyPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prev > prices[i]) {
      prevBuyPrice = prices[i];
      prev = prices[i];
      continue;
    }

    if (prices[i] <= prices[i + 1]) {
      prev = prices[i];
      continue;
    }

    const profit = prices[i] - prevBuyPrice;
    maxProfit += profit;
    prev = prices[i];
  }

  return maxProfit;
};
