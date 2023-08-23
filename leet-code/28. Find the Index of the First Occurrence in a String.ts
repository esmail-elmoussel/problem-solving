// Problem Link: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

export function strStr(haystack: string, needle: string): number {
  // Solution A:
  // return haystack.indexOf(needle);

  // Solution B:
  for (let i = 0; i < haystack.length - (needle.length - 1); i++) {
    const substring = haystack.substring(i, i + needle.length);

    if (substring === needle) {
      return i;
    }
  }

  return -1;
}

const haystack = "sasdbutsad",
  needle = "sad";

console.log(strStr(haystack, needle));
