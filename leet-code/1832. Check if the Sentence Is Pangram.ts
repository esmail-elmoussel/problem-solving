// Problem Link: https://leetcode.com/problems/check-if-the-sentence-is-pangram/

export function checkIfPangram(sentence: string): boolean {
  const chars = new Set<string>();

  for (let i = 0; i < sentence.length; i++) {
    if (!chars.has(sentence[i])) {
      chars.add(sentence[i]);
    }

    if (chars.size === 26) {
      break;
    }
  }

  return chars.size === 26;
}

const sentence = "thequickbrownfoxjumpsoverthelazydog";

console.log(checkIfPangram(sentence));
