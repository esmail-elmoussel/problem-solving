// Problem Link: https://leetcode.com/problems/roman-to-integer/

export function romanToInt(s: string): number {
  const romanNumbers: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const nextChar = s[i + 1];

    if (romanNumbers[char] < romanNumbers[nextChar]) {
      result -= romanNumbers[char];
    } else {
      result += romanNumbers[char];
    }
  }

  return result;
}

const s = "III";

console.log(romanToInt(s));
