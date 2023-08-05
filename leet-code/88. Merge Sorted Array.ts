// Problem Link: https://leetcode.com/problems/merge-sorted-array/

/**
 Do not return anything, modify nums1 in-place instead.
 */
export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let pointer1 = m - 1;
  let pointer2 = n - 1;

  let i = nums1.length - 1;

  while (pointer1 >= 0 && pointer2 >= 0) {
    if (nums2[pointer2] > nums1[pointer1]) {
      nums1[i] = nums2[pointer2];
      pointer2--;
    } else {
      nums1[i] = nums1[pointer1];
      pointer1--;
    }

    i--;
  }

  while (pointer2 >= 0) {
    nums1[i] = nums2[pointer2];
    pointer2--;
    i--;
  }
}

const nums1 = [2, 5, 6, 0, 0, 0],
  m = 3,
  nums2 = [1, 2, 3],
  n = 3;

console.log(merge(nums1, m, nums2, n));
