// Problem Link: https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk/

export function chalkReplacer(chalk: number[], k: number): number {
  let chalksCount = 0;

  for (let i = 0; i < chalk.length; i++) {
    chalksCount += chalk[i];
  }

  // Just to reduce (optimize) number of iterations
  k = k % chalksCount;

  let i = 0;

  while (true) {
    if (chalk[i] > k) {
      return i;
    }

    k -= chalk[i];

    i++;
  }
}

const chalk = [5, 1, 5],
  k = 22;

console.log(chalkReplacer(chalk, k));
