// Problem Link: https://leetcode.com/problems/longest-increasing-subsequence

export function lengthOfLIS(nums: number[]): number {
  const results: number[] = [];

  let result = 1;

  for (let i = 0; i < nums.length; i++) {
    let max = 1;

    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        max = Math.max(max, results[j] + 1);
      }
    }

    results[i] = max;

    result = Math.max(result, results[i]);
  }

  return result;
}

const nums = [7, 7, 7, 7, 7, 7, 7];

console.log(lengthOfLIS(nums));
