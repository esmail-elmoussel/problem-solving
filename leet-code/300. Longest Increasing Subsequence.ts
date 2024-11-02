// Problem Link: https://leetcode.com/problems/longest-increasing-subsequence

export function lengthOfLIS(nums: number[]): number {
  const lis: number[] = [];

  let result = 1;

  for (let i = 0; i < nums.length; i++) {
    let max = 1;

    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        max = Math.max(max, lis[j] + 1);
      }
    }

    lis[i] = max;

    result = Math.max(result, lis[i]);
  }

  return result;
}

const nums = [10, 9, 2, 5, 3, 7, 101, 18];

console.log(lengthOfLIS(nums));

// TODO: solve it using O(n log(n)) time complexity!
