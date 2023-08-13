// Problem Link: https://leetcode.com/problems/greatest-common-divisor-of-strings/

export function gcdOfStrings(str1: string, str2: string): string {
  let i = Math.min(str1.length, str2.length) - 1;

  while (i >= 0) {
    if (!(str2.length % (i + 1)) && !(str1.length % (i + 1))) {
      const substring = str2.slice(0, i + 1);

      const possibleStr1 = substring.repeat(str1.length / substring.length);

      if (possibleStr1 === str1) {
        let possibleStr2 = substring.repeat(str2.length / substring.length);

        if (possibleStr2 === str2) {
          return substring;
        }
      }
    }

    i--;
  }

  return "";
}

const str1 = "ABCABC",
  str2 = "ABC";

console.log(gcdOfStrings(str1, str2));
