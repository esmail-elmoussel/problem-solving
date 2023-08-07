// Problem Link: https://leetcode.com/problems/reverse-integer/

export function reverse(x: number): number {
  let negativeNumber = x < 0;

  x = Math.abs(x);

  const result = Number(x.toString().split("").reverse().join(""));

  if (result > Math.pow(2, 31) - 1) {
    return 0;
  }

  return negativeNumber ? result * -1 : result;
}

const x = 123;

console.log(reverse(x));
