// Problem Link: https://leetcode.com/problems/zigzag-conversion/

export function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }

  const result = Array(numRows).fill("");

  let pointer = 0;
  let dir = "UP";

  for (let i = 0; i < s.length; i++) {
    result[pointer] += s[i];

    if (pointer === numRows - 1) {
      pointer--;
      dir = "DOWN";
    } else if (pointer === 0) {
      pointer++;
      dir = "UP";
    } else if (dir === "UP") {
      pointer++;
    } else {
      pointer--;
    }
  }

  return result.join("");
}

const s = "PAYPALISHIRING",
  numRows = 2;

console.log(convert(s, numRows));
