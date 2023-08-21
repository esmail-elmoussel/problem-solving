// Problem Link: https://leetcode.com/problems/reverse-string/

/**
 Do not return anything, modify s in-place instead.
 */
export function reverseString(s: string[]): void {
  let start = 0,
    end = s.length - 1;

  while (start < end) {
    [s[start], s[end]] = [s[end], s[start]];

    start++;
    end--;
  }
}

const s = ["h", "e", "l", "l", "o"];

console.log(reverseString(s));
