// Problem Link: https://leetcode.com/problems/rotating-the-box/

export function rotateTheBox(box: string[][]): string[][] {
  const columns = box[0].length;
  const rows = box.length;

  const result: string[][] = [];

  // Generate the new box and fill it with empty (".")
  for (let i = 0; i < columns; i++) {
    const row = [];

    for (let j = 0; j < rows; j++) {
      row.push(".");
    }

    result.push(row);
  }

  // Rotate the box
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      result[column][rows - 1 - row] = box[row][column];
    }
  }

  // Move the stones ("#")
  for (let column = 0; column < rows; column++) {
    let firstEmptyRow = columns - 1;

    for (let row = columns - 1; row >= 0; row--) {
      switch (result[row][column]) {
        case "*": {
          firstEmptyRow = row - 1;
          break;
        }

        case "#": {
          result[row][column] = ".";
          result[firstEmptyRow][column] = "#";
          firstEmptyRow--;

          break;
        }
      }
    }
  }

  return result;
}

const box = [
  ["#", ".", "*", "."],
  ["#", "#", "*", "."],
];

console.log(rotateTheBox(box));
