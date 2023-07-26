// Problem Link: https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem

function rotLeft(a: number[], d: number): number[] {
  const splitFrom = d % a.length;

  return [...a.slice(splitFrom), ...a.slice(0, splitFrom)];
}

console.log(rotLeft([1, 2, 3, 4, 5], 6));
