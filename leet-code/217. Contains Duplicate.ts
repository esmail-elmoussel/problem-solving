// Problem Link: https://leetcode.com/problems/contains-duplicate/

export function containsDuplicate(nums: number[]): boolean {
  const distinctNumber = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    if (distinctNumber.has(nums[i])) {
      return true;
    }

    distinctNumber.add(nums[i]);
  }

  return false;
}

const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

console.log(containsDuplicate(nums));
