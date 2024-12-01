// Problem Link: https://leetcode.com/problems/check-if-n-and-its-double-exist/

export function findFinalValue(nums: number[], original: number): number {
  const numsSet = new Set<number>(nums);

  const findMultipliedValue = (num: number): number => {
    if (!numsSet.has(num)) {
      return num;
    }

    return findMultipliedValue(num * 2);
  };

  return findMultipliedValue(original);
}

const nums = [5, 3, 6, 1, 12],
  original = 3;

console.log(findFinalValue(nums, original));
