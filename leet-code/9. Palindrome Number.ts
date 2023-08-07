// Problem Link: https://leetcode.com/problems/palindrome-number/

export function isPalindrome(x: number): boolean {
  const s = x.toString();

  let left = 0,
    right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

const x = 1221;

console.log(isPalindrome(x));
