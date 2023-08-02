// Problem Link: https://leetcode.com/problems/count-binary-substrings/

function countBinarySubstrings(s: string): number {
  let left = 0,
    right = 0,
    breakPoint = 0,
    count = 0;

  while (right < s.length) {
    if (s[left] !== s[right] && left === breakPoint) {
      breakPoint = right;
    }

    if (s[left] === s[right] && left !== breakPoint) {
      count += Math.min(right - breakPoint, breakPoint - left);

      left = breakPoint;
      right = breakPoint;
      continue;
    }

    right++;
  }

  count += Math.min(right - breakPoint, breakPoint - left);

  return count;
}

console.log(countBinarySubstrings("11001100"));
