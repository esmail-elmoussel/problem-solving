// Problem Link: https://leetcode.com/problems/fizz-buzz/

export function fizzBuzz(n: number): string[] {
  const result = [];

  for (let num = 1; num <= n; num++) {
    if (!(num % 3) && !(num % 5)) {
      result.push("FizzBuzz");
      continue;
    }

    if (!(num % 3)) {
      result.push("Fizz");
      continue;
    }

    if (!(num % 5)) {
      result.push("Buzz");
      continue;
    }

    result.push(num + "");
  }

  return result;
}

const n = 3;

console.log(fizzBuzz(n));
