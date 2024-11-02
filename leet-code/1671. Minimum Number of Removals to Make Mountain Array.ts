// Problem Link: https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/

export function minimumMountainRemovals(nums: number[]): number {
  /**
   * Longest Increasing Subsequence
   */
  const lis: number[] = [];

  /**
   * Longest Decreasing Subsequence
   */
  const lds: number[] = [];

  let lastPossibleIndex = -1;
  let firstPossibleIndex = -1;
  let maxMountain = 0;

  for (let i = 0; i < nums.length; i++) {
    let max = 1;

    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        max = Math.max(max, lis[j] + 1);
      }
    }

    lis[i] = max;

    if (firstPossibleIndex === -1 && max !== 1) {
      firstPossibleIndex = i;
    }
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    let max = 1;

    for (let j = nums.length; j > i; j--) {
      if (nums[i] > nums[j]) {
        max = Math.max(max, lds[j] + 1);
      }
    }

    lds[i] = max;

    if (lastPossibleIndex === -1 && max !== 1) {
      lastPossibleIndex = i;
    }
  }

  for (let i = firstPossibleIndex; i <= lastPossibleIndex; i++) {
    maxMountain = Math.max(maxMountain, lis[i] + lds[i]);
  }

  return nums.length - maxMountain + 1;
}

const nums = [100, 92, 89, 77, 74, 66, 64, 66, 64];

console.log(minimumMountainRemovals(nums));

// TODO: solve it using O(n log(n)) time complexity!
