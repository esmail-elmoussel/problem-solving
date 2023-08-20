// Problem Link: https://leetcode.com/problems/move-zeroes/

/**
 Do not return anything, modify nums in-place instead.
 */
export function moveZeroes(nums: number[]): void {
  let pointer = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      [nums[pointer], nums[i]] = [nums[i], nums[pointer]]; // swap items

      pointer++;
    }
  }
}

const nums = [0, 1, 0, 3, 12];

console.log(moveZeroes(nums));
