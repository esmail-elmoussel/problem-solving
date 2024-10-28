// Problem Link: https://leetcode.com/problems/longest-square-streak-in-an-array/

export function longestSquareStreak(nums: number[]): number {
  nums.sort((a, b) => a - b);

  const resultsMap: Map<number, number> = new Map();

  let max = -1;

  for (let i = nums.length - 1; i >= 0; i--) {
    const numSequence = (resultsMap.get(Math.pow(nums[i], 2)) || 0) + 1;

    resultsMap.set(nums[i], numSequence);

    if (numSequence > 1) {
      max = Math.max(numSequence, max);
    }
  }

  return max;
}

const nums = [4, 3, 6, 16, 8, 2];

console.log(longestSquareStreak(nums));
