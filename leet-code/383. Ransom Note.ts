// Problem Link: https://leetcode.com/problems/ransom-note/

export function canConstruct(ransomNote: string, magazine: string): boolean {
  const charCount = new Map<string, number>();

  for (let i = 0; i < magazine.length; i++) {
    charCount.set(magazine[i], (charCount.get(magazine[i]) || 0) + 1);
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (
      !charCount.has(ransomNote[i]) ||
      (charCount.get(ransomNote[i]) as number) < 1
    ) {
      return false;
    }

    charCount.set(ransomNote[i], (charCount.get(ransomNote[i]) as number) - 1);
  }

  return true;
}

const ransomNote = "aa",
  magazine = "aab";

console.log(canConstruct(ransomNote, magazine));
