// Problem Link: https://leetcode.com/problems/spiral-matrix-ii/

export function generateMatrix(n: number): number[][] {
  let matrix: number[][] = [];

  let count = 1;

  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = n - 1;

  while (left <= right && top <= bottom) {
    if (!matrix[top]) {
      matrix.push([]);
    }

    for (let i = left; i <= right; i++) {
      matrix[top][i] = count;
      count++;
    }

    top++;

    for (let i = top; i <= bottom; i++) {
      if (!matrix[i]) {
        matrix.push([]);
      }

      matrix[i][right] = count;
      count++;
    }

    right--;

    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = count;
      count++;
    }

    bottom--;

    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = count;
      count++;
    }

    left++;
  }

  return matrix;
}

console.log(generateMatrix(3));
