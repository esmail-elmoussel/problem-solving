// Problem Link: https://leetcode.com/problems/check-if-n-and-its-double-exist/

export function checkIfExist(arr: number[]): boolean {
  const matches = new Set<number>();

  for (let i = 0; i < arr.length; i++) {
    if (matches.has(arr[i] / 2) || matches.has(arr[i] * 2)) {
      return true;
    }

    matches.add(arr[i]);
  }

  return false;
}

const arr = [10, 2, 5, 3];

console.log(checkIfExist(arr));
