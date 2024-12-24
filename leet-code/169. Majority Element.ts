// Problem Link: https://leetcode.com/problems/majority-element/

export function majorityElement(nums: number[]): number {
  const counter = new Map<number, number>();

  let max: number = -1;
  let result: number = -1;

  for (let i = 0; i < nums.length; i++) {
    const newCount: number = (counter.get(nums[i]) || 0) + 1;

    counter.set(nums[i], newCount);

    if (newCount > max) {
      max = newCount;
      result = nums[i];
    }
  }

  return result;
}

const nums = [3, 2, 3];

console.log(majorityElement(nums));
