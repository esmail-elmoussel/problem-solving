// Problem Link: https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

function jumpingOnClouds(c: number[]): number {
  let count = 0;

  for (let i = 0; i < c.length - 1; i++) {
    if (c[i + 2] === 0) {
      i++;
    }

    count++;
  }

  return count;
}

console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]));
