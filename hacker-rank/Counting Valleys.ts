// Problem Link: https://www.hackerrank.com/challenges/counting-valleys/problem

export function countingValleys(steps: number, path: string): number {
  let hikerLevel = 0;
  let count = 0;

  for (let i = 0; i < path.length; i++) {
    const step = path[i];

    if (step === "D") {
      hikerLevel--;
      continue;
    }

    hikerLevel++;

    if (hikerLevel === 0) {
      count++;
    }
  }

  return count;
}

console.log(countingValleys(8, "UDDDUDUU"));
