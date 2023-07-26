// Problem Link: https://www.hackerrank.com/challenges/repeated-string/problem

function repeatedString(s: string, n: number): number {
  const reminder = n % s.length;
  const multiplyBy = (n - reminder) / s.length;

  let aCountInString = 0;
  let aCountInReminderString = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "a") {
      aCountInString++;

      if (i < reminder) {
        aCountInReminderString++;
      }
    }
  }

  return aCountInString * multiplyBy + aCountInReminderString;
}

console.log(repeatedString("aba", 10));
