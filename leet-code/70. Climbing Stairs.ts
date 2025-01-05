// Problem Link: https://leetcode.com/problems/climbing-stairs/

export function climbStairs(n: number): number {
  let right: number = 1;
  let left: number = 1;

  let i: number = n - 2;

  while (i >= 0) {
    let tempLeft: number = left;

    left = left + right;

    right = tempLeft;

    i--;
  }

  return left;
}

const n = 1;

console.log(climbStairs(n));

/**
 * n = 3
 * [0, 1, 2, 3]
 * [x, x, 1, 1] => [1, 1]
 * [x, 2, 1, 1] => [2, 1]
 * [3, 2, 1, 1] => [3, 2]
 */
