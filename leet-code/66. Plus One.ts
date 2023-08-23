// Problem Link: https://leetcode.com/problems/plus-one/

export function plusOne(digits: number[]): number[] {
  let i = digits.length - 1;

  while (i >= 0) {
    if (digits[i] !== 9) {
      digits[i]++;
      return digits;
    }

    digits[i] = 0;

    i--;
  }

  digits.unshift(1);

  return digits;
}

const digits = [8, 9, 9];

console.log(plusOne(digits));
