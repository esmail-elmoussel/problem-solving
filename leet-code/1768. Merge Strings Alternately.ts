// Problem Link: https://leetcode.com/problems/merge-strings-alternately/

export function mergeAlternately(word1: string, word2: string): string {
  const length = Math.max(word1.length, word2.length);
  let result = "";

  for (let i = 0; i < length; i++) {
    if (word1[i]) {
      result += word1[i];
    }

    if (word2[i]) {
      result += word2[i];
    }
  }

  return result;
}

const word1 = "abc",
  word2 = "pqr";

console.log(mergeAlternately(word1, word2));
