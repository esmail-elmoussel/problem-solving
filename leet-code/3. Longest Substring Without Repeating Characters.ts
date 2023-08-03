// Problem Link: https://leetcode.com/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s: string): number {
  const visitedChars = new Map<string, number>();
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    if (visitedChars.has(s[right]) && visitedChars.get(s[right])! >= left) {
      left = visitedChars.get(s[right])! + 1;
    }

    maxLength = Math.max(maxLength, right - left + 1);

    visitedChars.set(s[right], right);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
