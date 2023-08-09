// Problem Link: https://leetcode.com/problems/debounce/

type F = (...p: any[]) => any;

export function debounce(fn: F, t: number): F {
  let timeout: number;

  return function (...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => fn(...args), t);
  };
}

const log = debounce(console.log, 1000);

log("Should not see this!");
log("Should not see this!");
log("Hello world!");

setTimeout(() => {
  log("Should not see this!");
  log("Should not see this!");
  log("Should not see this!");
  log("Should not see this!");
  log("Hello world again!");
}, 2000);
