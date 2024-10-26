// Problem Link: https://leetcode.com/problems/group-anagrams/

export function groupAnagrams(strs: string[]): string[][] {
  const anagramMap = new Map<string, string[]>();

  for (let i = 0; i < strs.length; i++) {
    const stringCharsCode = new Array(26).fill(0);

    for (let j = 0; j < strs[i].length; j++) {
      const charCode = strs[i].charCodeAt(j) - 97;

      stringCharsCode[charCode] += 1;
    }

    if (!anagramMap.has(stringCharsCode.toString())) {
      anagramMap.set(stringCharsCode.toString(), []);
    }

    (anagramMap.get(stringCharsCode.toString()) as string[]).push(strs[i]);
  }

  return Array.from(anagramMap.values());
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(strs));
