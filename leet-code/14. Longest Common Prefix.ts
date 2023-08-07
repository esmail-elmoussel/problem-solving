// Problem Link: https://leetcode.com/problems/longest-common-prefix/

export function longestCommonPrefix(strings: string[]): string {
  let commonPrefix = strings[0];

  for (let i = 1; i < strings.length; i++) {
    const string = strings[i];
    let newCommonPrefix = "";

    for (let j = 0; j < string.length; j++) {
      if (string[j] !== commonPrefix[j]) {
        break;
      }

      newCommonPrefix += string[j];
    }

    commonPrefix = newCommonPrefix;
  }

  return commonPrefix;
}

const strings = [""];

console.log(longestCommonPrefix(strings));
