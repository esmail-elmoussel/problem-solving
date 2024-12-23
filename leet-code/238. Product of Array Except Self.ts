// Problem Link: https://leetcode.com/problems/product-of-array-except-self/

export function productExceptSelf(nums: number[]): number[] {
  const prefix: number[] = [1];

  for (let i = 1; i < nums.length; i++) {
    prefix[i] = nums[i - 1] * prefix[i - 1];
  }

  const postfix: number[] = [];

  postfix[nums.length - 1] = 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    postfix[i] = nums[i + 1] * postfix[i + 1];
  }

  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix[i] * postfix[i];
  }

  return result;
}

// O(1) extra space complexity solution:
export function productExceptSelfSpaceEfficient(nums: number[]): number[] {
  const result: number[] = [1];

  for (let i = 1; i < nums.length; i++) {
    result[i] = nums[i - 1] * result[i - 1];
  }

  let postfix = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = result[i] * postfix;

    postfix = postfix * nums[i];
  }

  return result;
}

const nums = [1, 2, 3, 4];

console.log(productExceptSelfSpaceEfficient(nums));

// nums = [1,2,3,4]
// prefix = [1,1,2,6]
// postfix = [24,12,4,1]
// result = [24,12,8,6]
