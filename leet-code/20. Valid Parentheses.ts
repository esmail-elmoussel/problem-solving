// Problem Link: https://leetcode.com/problems/valid-parentheses/

export function isValid(s: string): boolean {
  const prenticesMap = new Map([
    ["[", "]"],
    ["(", ")"],
    ["{", "}"],
  ]);

  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (prenticesMap.has(s[i])) {
      stack.push(s[i]);
    } else {
      const lastElement = stack.pop() as string;

      if (s[i] !== prenticesMap.get(lastElement)) {
        return false;
      }
    }
  }

  if (stack.length) {
    return false;
  }

  return true;
}

const s = "(([]){}";

console.log(isValid(s));
