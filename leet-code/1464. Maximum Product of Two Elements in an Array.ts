// Problem Link: https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/

export function maxProduct(nums: number[]): number {
  let firstMax = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > firstMax) {
      secondMax = firstMax;
      firstMax = nums[i];
    } else if (nums[i] > secondMax) {
      secondMax = nums[i];
    }
  }

  return (firstMax - 1) * (secondMax - 1);
}

const nums = [3, 4, 5, 2];

console.log(maxProduct(nums));
