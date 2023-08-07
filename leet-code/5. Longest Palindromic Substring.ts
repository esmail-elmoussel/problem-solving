// Problem Link: https://leetcode.com/problems/longest-palindromic-substring/

export function longestPalindrome(s: string): string {
  let res = "";

  for (let i = 0; i < s.length; i++) {
    let substring = s[i];

    let left = i - 1,
      right = i + 1;

    while (s[right] === s[i]) {
      substring = substring + s[right];
      right++;
    }

    let newI: number | undefined;

    if (right !== i + 1) {
      // it means that there is a repeated chars
      newI = right;
    }

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      substring = s[left] + substring + s[right];

      left--;
      right++;
    }

    if (substring.length > res.length) {
      res = substring;
    }

    if (newI) {
      i = newI - 1; // because the for loop do i++ by default
    }
  }

  return res;
}

const s = "aba";

console.log(longestPalindrome(s));
