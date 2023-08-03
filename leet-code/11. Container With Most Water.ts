// Problem Link: https://leetcode.com/problems/container-with-most-water/

function maxArea(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;
  let result = 0;

  while (left < right) {
    const area = Math.min(nums[left], nums[right]) * (right - left);

    result = Math.max(result, area);

    if (nums[left] < nums[right]) {
      left++;
    } else {
      right--;
    }
  }

  return result;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
