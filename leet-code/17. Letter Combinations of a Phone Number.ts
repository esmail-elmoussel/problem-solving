// Problem Link: https://leetcode.com/problems/letter-combinations-of-a-phone-number/

const numberToChars = [
  undefined,
  undefined,
  "abc",
  "def",
  "ghi",
  "jkl",
  "mno",
  "pqrs",
  "tuv",
  "wxyz",
];

export function letterCombinations(digits: string): string[] {
  if (!digits.length) {
    return [];
  }

  const result: string[] = [];

  const backtrack = (index: number, currentCombination: string) => {
    if (index === digits.length) {
      result.push(currentCombination);

      return;
    }

    const chars = numberToChars[Number(digits[index])] as string;

    for (let i = 0; i < chars.length; i++) {
      backtrack(index + 1, currentCombination + chars[i]);
    }
  };

  backtrack(0, "");

  return result;
}

const digits = "23";

console.log(letterCombinations(digits));
