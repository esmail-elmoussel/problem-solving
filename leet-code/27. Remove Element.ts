// Problem Link: https://leetcode.com/problems/remove-element/

export function removeElement(nums: number[], val: number): number {
  let pointer: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[pointer] = nums[i];
      pointer++;
    }
  }

  return pointer;
}

const nums = [3, 2, 2, 3],
  val = 3;

console.log(removeElement(nums, val), nums);
