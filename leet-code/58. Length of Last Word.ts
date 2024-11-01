// Problem Link: https://leetcode.com/problems/length-of-last-word/

export function lengthOfLastWord(s: string): number {
  let count = 0;

  let i = s.length - 1;

  while ((count === 0 || s[i] !== " ") && i >= 0) {
    if (s[i] !== " ") {
      count++;
    }

    i--;
  }

  return count;
}

const s = "   fly me   to   the moon  ";

console.log(lengthOfLastWord(s));
