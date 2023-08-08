// Problem Link: https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/

export function areNumbersAscending(s: string): boolean {
  let prevNumber = -Infinity;

  let i = 0;

  while (i < s.length) {
    if (!parseInt(s[i])) {
      i++;
      continue;
    }

    let currentNumber: string = s[i];

    let j = i + 1;

    while (s[j] !== " " && s[j] !== undefined) {
      currentNumber += s[j];
      j++;
    }

    if (parseInt(currentNumber) <= prevNumber) {
      return false;
    }

    prevNumber = parseInt(currentNumber);

    i = j + 1;
  }

  return true;
}

const s = "sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s";

console.log(areNumbersAscending(s));
