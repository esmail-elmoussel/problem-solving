// Problem Link: https://leetcode.com/problems/string-to-integer-atoi/

export function myAtoi(s: string): number {
  let isNegative = false;

  let i = 0;

  while (s[i] === " ") {
    i++;
  }

  if (s[i] === "-" || s[i] === "+") {
    if (s[i] === "-") {
      isNegative = true;
    }

    i++;
  }

  let number = "";

  while (i < s.length && Number.isInteger(parseInt(s[i]))) {
    number += s[i];

    i++;
  }

  if (number === "") {
    return 0;
  }

  if (parseInt(number) > Math.pow(2, 31) - 1) {
    number = isNegative
      ? Math.pow(2, 31).toString()
      : (Math.pow(2, 31) - 1).toString();
  }

  return isNegative ? -parseInt(number) : parseInt(number);
}

const s = "2147483648";

console.log(myAtoi(s));
