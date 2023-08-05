// Problem Link: https://leetcode.com/problems/two-sum/

export function twoSum(nums: number[], target: number): number[] {
  const combinations = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (combinations.has(target - nums[i])) {
      return [combinations.get(target - nums[i]) as number, i];
    }

    combinations.set(nums[i], i);
  }

  return [-1, -1];
}

const nums = [3, 2, 4],
  target = 6;

console.log(twoSum(nums, target));
