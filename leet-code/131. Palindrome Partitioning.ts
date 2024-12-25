// Problem Link: https://leetcode.com/problems/palindrome-partitioning/

const cachedPalindrome = new Set<string>();

function isPalindrome(s: string): boolean {
  if (cachedPalindrome.has(s)) {
    return true;
  }

  let left: number = 0,
    right: number = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }

    left++;
    right--;
  }

  cachedPalindrome.add(s);

  return true;
}

export function partition(s: string): string[][] {
  const result: string[][] = [];

  const backtracking = (i: number, currentPart: string[]) => {
    if (i === s.length) {
      return result.push(currentPart);
    }

    for (let j = i + 1; j <= s.length; j++) {
      const subString: string = s.slice(i, j);

      if (isPalindrome(subString)) {
        backtracking(j, [...currentPart, s.slice(i, j)]);
      }
    }
  };

  backtracking(0, []);

  return result;
}

const s = "abbab";

console.log(partition(s));
