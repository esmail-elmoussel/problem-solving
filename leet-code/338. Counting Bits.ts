// Problem Link: https://leetcode.com/problems/counting-bits/

export function countBits(n: number): number[] {
  const result: number[] = [0];
  let offset = 1;

  for (let i = 1; i <= n; i++) {
    if (offset * 2 === i) {
      offset = i;
    }

    result[i] = 1 + result[i - offset];
  }

  return result;
}

const n = 20;

console.log(countBits(n));
