// Problem Link: https://leetcode.com/problems/delete-characters-to-make-fancy-string

export function makeFancyString(s: string): string {
  let fancyString = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[i - 1] || s[i] !== s[i - 2]) {
      fancyString += s[i];
    }
  }

  return fancyString;
}

const s = "leeetcode";

console.log(makeFancyString(s));
