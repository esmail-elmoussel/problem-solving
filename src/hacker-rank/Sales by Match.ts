// Problem Link: https://www.hackerrank.com/challenges/sock-merchant/problem

function sockMerchant(n: number, ar: number[]): number {
  const matches = new Set();
  let count = 0;

  for (let i = 0; i < ar.length; i++) {
    const number = ar[i];

    if (!matches.has(number)) {
      matches.add(number);
      continue;
    }

    count++;
    matches.delete(number);
  }

  return count;
}

const n = 9,
  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

console.log(sockMerchant(n, ar));
