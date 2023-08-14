// Problem Link: https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

export function kidsWithCandies(
  candies: number[],
  extraCandies: number
): boolean[] {
  let greatest = Math.max(...candies);

  return candies.map((candy) => {
    if (candy + extraCandies < greatest) {
      return false;
    }

    return true;
  });
}

const candies = [2, 3, 5, 1, 3],
  extraCandies = 3;

console.log(kidsWithCandies(candies, extraCandies));
