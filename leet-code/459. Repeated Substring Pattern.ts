// Problem Link: https://leetcode.com/problems/repeated-substring-pattern/

export function repeatedSubstringPattern(s: string): boolean {
  let substringLength = 1;

  while (substringLength <= s.length / 2) {
    // check if a valid substring
    if (s.length % substringLength === 0) {
      const substring = s.substring(0, substringLength);

      let createdString = substring.repeat(s.length / substringLength);

      if (createdString === s) {
        return true;
      }
    }

    substringLength++;
  }

  return false;
}

const s = "abcabcabc";

console.log(repeatedSubstringPattern(s));
