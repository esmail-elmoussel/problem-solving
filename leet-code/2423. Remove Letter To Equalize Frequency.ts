// Problem Link: https://leetcode.com/problems/remove-letter-to-equalize-frequency/

export function equalFrequency(word: string): boolean {
  const lettersCount = new Map<string, number>();

  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    const oldCharCount = lettersCount.get(char) || 0;
    lettersCount.set(char, oldCharCount + 1);
  }

  const counts = Array.from(lettersCount.values());
  const maxCount = Math.max(...counts);
  const minCount = Math.min(...counts);

  if (maxCount === 1) {
    return true;
  }

  let numOfMaxCountAppearances = 0;
  let numOfMinCountAppearances = 0;

  const uniqueCounts: number[] = [];

  for (let i = 0; i < counts.length; i++) {
    const count = counts[i];

    if (count === maxCount) {
      numOfMaxCountAppearances++;
    }

    if (count === minCount) {
      numOfMinCountAppearances++;
    }

    if (!uniqueCounts.includes(count)) {
      uniqueCounts.push(count);
    }
  }

  if (uniqueCounts.length === 1) {
    if (counts.length === 1) {
      return true;
    }

    return maxCount === 1 ? true : false;
  }

  if (uniqueCounts.length > 2) {
    return false;
  }

  if (maxCount - minCount > 1) {
    if (minCount === 1 && numOfMinCountAppearances === 1) {
      return true;
    }

    return false;
  }

  if (
    (numOfMaxCountAppearances === 1 && maxCount - minCount === 1) ||
    (numOfMinCountAppearances === 1 && minCount === 1)
  ) {
    return true;
  }

  return false;
}

const word = "cbccca";

console.log(equalFrequency(word));
