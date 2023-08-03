// Problem Link: https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/

const binarySearch = (arr: number[], number: number): number => {
  let low = 0;
  let high = arr.length - 1;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);

    if (mid === low) {
      if (arr[high] <= number) {
        return high;
      }
      return low;
    }

    if (arr[mid] > number) {
      high = mid - 1;
    } else {
      low = mid;
    }
  }

  return low;
};

export function longestObstacleCourseAtEachPosition(
  obstacles: number[]
): number[] {
  const result = Array(obstacles.length);
  const dynamicProgramming = Array(obstacles.length).fill(Math.pow(10, 10));

  for (let i = 0; i < obstacles.length; i++) {
    let index = binarySearch(dynamicProgramming, obstacles[i]);

    dynamicProgramming[index + 1] = Math.min(
      dynamicProgramming[index + 1],
      obstacles[i]
    );

    result[i] = index + 1;
  }

  return result;
}

console.log(longestObstacleCourseAtEachPosition([1, 2, 3, 2]));
