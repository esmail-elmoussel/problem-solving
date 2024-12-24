// Problem Link: https://leetcode.com/problems/majority-element/

export function majorityElement(nums: number[]): number {
  const counter = new Map<number, number>();

  let max: number = -1;

  for (let i = 0; i < nums.length; i++) {
    const newCount: number = (counter.get(nums[i]) || 0) + 1;

    counter.set(nums[i], newCount);

    max = Math.max(newCount, max);

    if (max > nums.length / 2) {
      return nums[i];
    }
  }

  return -1;
}

const nums = [3, 2, 3];

console.log(majorityElement(nums));
