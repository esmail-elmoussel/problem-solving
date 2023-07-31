// Problem Link: https://www.hackerrank.com/challenges/apple-and-orange

function countApplesAndOranges(
  s: number,
  t: number,
  a: number,
  b: number,
  apples: number[],
  oranges: number[]
): void {
  let applesCount = 0;
  let orangesCount = 0;

  for (let i = 0; i < Math.max(apples.length, oranges.length); i++) {
    if (i < apples.length) {
      const position = apples[i] + a;

      if (position >= s && position <= t) {
        applesCount++;
      }
    }

    if (i < oranges.length) {
      const position = oranges[i] + b;

      if (position >= s && position <= t) {
        orangesCount++;
      }
    }
  }

  console.log(applesCount);
  console.log(orangesCount);
}

console.log(countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]));
