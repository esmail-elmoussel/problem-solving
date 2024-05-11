// Problem Link: https://leetcode.com/problems/score-of-a-string/

export function scoreOfString(s: string): number {
  let result = 0;

  for (let i = 0; i < s.length - 1; i++) {
    result += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
  }

  return result;
}

const s = "hello";

console.log(scoreOfString(s));
