// Problem Link: https://www.hackerrank.com/challenges/counting-valleys/problem

function countingValleys(steps: number, path: string): number {
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

const steps = 8,
  path = "UDDDUDUU";

console.log(countingValleys(steps, path));
