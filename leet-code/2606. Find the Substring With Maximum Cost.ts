// Problem Link: https://leetcode.com/problems/find-the-substring-with-maximum-cost/

export function maximumCostSubstring(
  s: string,
  chars: string,
  values: number[]
): number {
  const charMap = new Map<string, number>();

  for (let i = 1; i < 27; i++) {
    charMap.set(String.fromCharCode(i + 96), i);
  }

  for (let i = 0; i < chars.length; i++) {
    charMap.set(chars[i], values[i]);
  }

  let currentCost: number = charMap.get(s[0]) as number;
  let maxCost: number = charMap.get(s[0]) as number;

  for (let i = 1; i < s.length; i++) {
    const charCost = charMap.get(s[i]) as number;
    currentCost = Math.max(currentCost + charCost, charCost);
    maxCost = Math.max(maxCost, currentCost);
  }

  return Math.max(maxCost, 0);
}

const s = "adaa",
  chars = "d",
  values = [-1000];

console.log(maximumCostSubstring(s, chars, values));
