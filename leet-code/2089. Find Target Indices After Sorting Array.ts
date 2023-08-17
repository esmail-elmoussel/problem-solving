// Problem Link: https://leetcode.com/problems/find-target-indices-after-sorting-array/

const binarySearch = (
  nums: number[],
  target: number,
  firstAppear: boolean
): number => {
  let left = 0,
    right = nums.length - 1;

  let result: number = -1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      result = mid;

      if (firstAppear) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return result;
};

export function targetIndices(nums: number[], target: number): number[] {
  const filteredNums = nums.filter((num) => num <= target); // to optimize sorting

  filteredNums.sort((a, b) => a - b);

  let firstIndex = binarySearch(filteredNums, target, true);

  if (firstIndex === -1) {
    return [];
  }

  let lastIndex = binarySearch(filteredNums, target, false);

  const result: number[] = [];

  for (let i = firstIndex; i <= lastIndex; i++) {
    result.push(i);
  }

  return result;
}

const nums = [1, 2, 5, 2, 3],
  target = 4;

console.log(targetIndices(nums, target));
