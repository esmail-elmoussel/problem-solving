/**
 * Definition for singly-linked list.
 */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export const createListNode = (nums: number[]): ListNode | null => {
  if (!nums.length) {
    return null;
  }

  let head: ListNode = new ListNode(nums[nums.length - 1]);

  for (let i = nums.length - 2; i >= 0; i--) {
    const newNode = new ListNode(nums[i], head);

    head = newNode;
  }

  return head;
};

export const printListNode = (head: ListNode | null): void => {
  let current = head;

  const result: number[] = [];

  while (current) {
    result.push(current.val);

    current = current.next;
  }

  console.log(result.join(" -> "));
};
