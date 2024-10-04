// Problem Link: https://leetcode.com/problems/valid-anagram/

export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const charMap = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    const sCharCount: number = charMap.get(s[i]) ?? 0;

    charMap.set(s[i], sCharCount + 1);

    const tCharCount: number = charMap.get(t[i]) ?? 0;

    charMap.set(t[i], tCharCount - 1);
  }

  for (const value of charMap.values()) {
    if (value !== 0) {
      return false;
    }
  }

  return true;
}

const s = "rat",
  t = "car";

console.log(isAnagram(s, t));
