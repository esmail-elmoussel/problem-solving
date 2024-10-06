// Problem Link: https://leetcode.com/problems/min-stack/

export class MinStack {
  private stack: { num: number; min: number }[];

  constructor() {
    this.stack = [];
  }

  push(val: number): void {
    if (!this.stack.length) {
      this.stack.push({ num: val, min: val });
      return;
    }

    const prevNode = this.stack[this.stack.length - 1];

    const min = Math.min(prevNode.num, prevNode.min);

    this.stack.push({ num: val, min });
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1].num;
  }

  getMin(): number {
    const lastNode = this.stack[this.stack.length - 1];

    return Math.min(lastNode.num, lastNode.min);
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // return -3
minStack.pop();
console.log(minStack.top()); // return 0
console.log(minStack.getMin()); // return -2
