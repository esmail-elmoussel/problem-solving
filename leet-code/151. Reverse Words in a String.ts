// Problem Link: https://leetcode.com/problems/reverse-words-in-a-string/

export function reverseWords(s: string): string {
  s += " ";
  let word = "";
  let result = "";
  let i = 0;

  while (i <= s.length) {
    if (s[i] === " ") {
      if (word) {
        result = result === "" ? word + result : word + " " + result;

        word = "";
      }
    } else {
      word += s[i];
    }

    i++;
  }

  return result;
}

console.log(reverseWords("the sky is blue"));
