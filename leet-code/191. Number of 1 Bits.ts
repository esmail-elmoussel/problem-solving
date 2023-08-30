// Problem Link: https://leetcode.com/problems/number-of-1-bits/

function decimalToBinary(dec: number): string {
  return dec.toString(2);
}

export function hammingWeight(n: number): number {
  let binary = decimalToBinary(n);
  let count = 0;

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      count++;
    }
  }

  return count;
}

const n = 11;

console.log(hammingWeight(n));
