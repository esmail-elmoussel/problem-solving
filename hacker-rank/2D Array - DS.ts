// Problem Link: https://www.hackerrank.com/challenges/2d-array/problem

export function hourglassSum(arr: number[][]): number {
  const calculateHourglass = (firstIndex: number, secondIndex: number) => {
    let sum = 0;

    for (let i = firstIndex; i < firstIndex + 3; i++) {
      for (let j = secondIndex; j < secondIndex + 3; j++) {
        if (i === firstIndex + 1 && j !== secondIndex + 1) {
          continue;
        }

        sum += arr[i][j];
      }
    }

    return sum;
  };

  let max = -Infinity;

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr.length - 2; j++) {
      max = Math.max(calculateHourglass(i, j), max);
    }
  }

  return max;
}

console.log(
  hourglassSum([
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ])
);
