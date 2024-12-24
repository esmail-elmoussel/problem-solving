// Problem Link: https://leetcode.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day/

export function canEat(candiesCount: number[], queries: number[][]): boolean[] {
  const minCandies: number[] = [1];
  const maxCandies: number[] = [candiesCount[0]];

  for (let i = 1; i < candiesCount.length; i++) {
    minCandies.push(candiesCount[i - 1] + minCandies[i - 1]);
    maxCandies.push(candiesCount[i] + maxCandies[i - 1]);
  }

  const result: boolean[] = [];

  for (let i = 0; i < queries.length; i++) {
    const [favoriteType, favoriteDay, dailyCap] = queries[i];

    if (minCandies[favoriteType] > (favoriteDay + 1) * dailyCap) {
      result.push(false);

      continue;
    }

    if (maxCandies[favoriteType] < favoriteDay + 1) {
      result.push(false);

      continue;
    }

    result.push(true);
  }

  return result;
}

const candiesCount = [5, 2, 6, 4, 1],
  //[favoriteType, favoriteDay, dailyCap]
  queries = [
    [3, 1, 2],
    [4, 10, 3],
    [3, 10, 100],
    [4, 100, 30],
    [1, 3, 1],
  ];

console.log(canEat(candiesCount, queries));

// candies = [    5,    2,    6,    4,      1]
// min     = [    1,    6,    8,   14,     18]
// max     = [    5,    7,   13,   17,     18]
// result  = [false, true, true, false, false]
