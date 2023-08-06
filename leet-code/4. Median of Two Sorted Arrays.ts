// Problem Link: https://leetcode.com/problems/median-of-two-sorted-arrays/

export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  if (nums1.length < nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const totalLength = nums1.length + nums2.length;
  const half = Math.floor(totalLength / 2);

  let left = 0,
    right = nums2.length - 1;

  while (true) {
    let pointer2 = Math.floor((right + left) / 2);
    let pointer1 = half - pointer2 - 2;

    const nums1Left =
      nums1[pointer1] !== undefined ? nums1[pointer1] : -Infinity;

    const nums1Right =
      nums1[pointer1 + 1] !== undefined ? nums1[pointer1 + 1] : Infinity;

    const nums2Left =
      nums2[pointer2] !== undefined ? nums2[pointer2] : -Infinity;

    const nums2Right =
      nums2[pointer2 + 1] !== undefined ? nums2[pointer2 + 1] : Infinity;

    if (nums1Left <= nums2Right && nums2Left <= nums1Right) {
      if (totalLength % 2 === 0) {
        const leftNumber = Math.max(nums1Left, nums2Left);
        const rightNumber = Math.min(nums1Right, nums2Right);

        return (leftNumber + rightNumber) / 2;
      } else {
        return Math.min(nums1Right, nums2Right);
      }
    } else if (nums1Left > nums2Right) {
      left = pointer2 + 1;
    } else {
      right = pointer2 - 1;
    }
  }
}

const nums1 = [1, 3],
  nums2 = [2];

console.log(findMedianSortedArrays(nums1, nums2));
