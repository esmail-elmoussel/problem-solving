// Problem Link: https://leetcode.com/problems/occurrences-after-bigram/

export function findOcurrences(
  text: string,
  first: string,
  second: string
): string[] {
  const arr: string[] = text.split(" ");
  const result: string[] = [];

  for (let i = 2; i < arr.length; i++) {
    if (arr[i - 2] === first && arr[i - 1] === second) {
      result.push(arr[i]);
    }
  }

  return result;
}

const text = "we will we will rock you",
  first = "we",
  second = "will";

console.log(findOcurrences(text, first, second));
