// Problem Link: https://leetcode.com/problems/top-k-frequent-elements/

export function topKFrequent(nums: number[], k: number): number[] {
  const numsFrequency = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    numsFrequency.set(nums[i], (numsFrequency.get(nums[i]) || 0) + 1);
  }

  const sortedNums = Array.from(numsFrequency).sort((a, b) => b[1] - a[1]);

  const result: number[] = [];

  for (let i = 0; i < k; i++) {
    result.push(sortedNums[i][0]);
  }

  return result;
}

const nums = [1, 1, 1, 2, 2, 3],
  k = 2;

console.log(topKFrequent(nums, k));
