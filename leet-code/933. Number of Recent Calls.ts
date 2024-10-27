// Problem Link: https://leetcode.com/problems/number-of-recent-calls/

export class RecentCounter {
  private requestsTime: number[];
  /**
   * Pointer is used to avoid using shift which could be O(n)!
   */
  private pointer: number;

  constructor() {
    this.requestsTime = [];
    this.pointer = 0;
  }

  ping(t: number): number {
    this.requestsTime.push(t);

    while (this.requestsTime[this.pointer] < t - 3000) {
      this.pointer++;
    }

    return this.requestsTime.length - this.pointer;
  }
}

const obj = new RecentCounter();

console.log(obj.ping(1));
console.log(obj.ping(100));
console.log(obj.ping(3001));
console.log(obj.ping(3002));
