// Problem Link: https://leetcode.com/problems/sqrtx/

export function mySqrt(x: number): number {
  if (x === 1) {
    return 1;
  }

  let left = 0,
    right = x;

  while (left + 1 !== right) {
    const mid = Math.floor((right + left) / 2);

    const midSqrt = mid * mid;

    if (midSqrt === x) {
      return mid;
    }

    if (midSqrt > x) {
      right = mid;
    } else {
      left = mid;
    }
  }

  return left;
}

const x = Math.pow(2, 31) - 1;

console.log(mySqrt(x));
