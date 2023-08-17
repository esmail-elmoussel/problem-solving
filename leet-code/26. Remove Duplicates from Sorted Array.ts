// Problem Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/

export function removeDuplicates(nums: number[]): number {
  let pointer: number = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[pointer]) {
      pointer++;
      nums[pointer] = nums[i];
    }
  }

  return pointer + 1;
}

const nums = [1, 1, 1, 2];

console.log(removeDuplicates(nums), nums);
