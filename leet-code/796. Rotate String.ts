// Problem Link: https://leetcode.com/problems/rotate-string/

export function rotateString(s: string, goal: string): boolean {
  if (s.length !== goal.length) {
    return false;
  }

  let i = 0;

  while (i < s.length) {
    if (s === goal) {
      return true;
    }

    s = s[s.length - 1] + s.substring(0, s.length - 1);

    i++;
  }

  return false;
}

const s = "abcde",
  goal = "cdeab";

console.log(rotateString(s, goal));
