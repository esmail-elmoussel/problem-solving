// Problem Link: https://www.hackerrank.com/challenges/new-year-chaos/problem

export function minimumBribes(q: number[]): void {
  let count = 0;

  function swapElements(i: number, j: number) {
    const temp = q[j];
    q[j] = q[i];
    q[i] = temp;

    count++;
  }

  let i = q.length - 1;

  while (i >= 0) {
    if (q[i] === i + 1) {
      i--;
      continue;
    }

    if (q[i - 1] !== i + 1 && q[i - 2] !== i + 1) {
      console.log("Too chaotic");
      return;
    }

    if (q[i - 1] === i + 1) {
      swapElements(i, i - 1);
    } else if (q[i - 2] === i + 1) {
      swapElements(i - 2, i - 1);
      swapElements(i - 1, i);
    }

    i--;
  }

  console.log(count);
}

console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]));
