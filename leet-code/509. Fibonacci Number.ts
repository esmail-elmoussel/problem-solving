// Problem Link: https://leetcode.com/problems/fibonacci-number/

const cache = new Map<number, number>();

export function fib(n: number): number {
  if (n <= 1) {
    return n;
  }

  if (!cache.has(n)) {
    cache.set(n, fib(n - 1) + fib(n - 2));
  }

  return cache.get(n) as number;
}

console.log(fib(4));
