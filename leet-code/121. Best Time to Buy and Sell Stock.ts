// Problem Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

export function maxProfit(prices: number[]): number {
  let min = prices[0];
  let max = prices[0];

  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
      max = prices[i];
    }

    if (prices[i] > max) {
      max = prices[i];
    }

    profit = Math.max(profit, max - min);
  }

  return profit;
}

const prices = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(prices));
