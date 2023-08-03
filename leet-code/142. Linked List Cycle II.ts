// Problem Link: https://leetcode.com/problems/linked-list-cycle-ii/

/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function detectCycle(head: ListNode | null): ListNode | null {
  let fast = head;
  let slow = head;

  while (fast?.next) {
    slow = slow!.next;
    fast = fast.next.next;

    if (fast === slow) {
      slow = head;

      while (slow !== fast) {
        slow = slow!.next;
        fast = fast!.next;
      }

      return fast;
    }
  }

  return null;
}

const nodeMins4 = new ListNode(-4);
const node0 = new ListNode(0, nodeMins4);
const node2 = new ListNode(2, node0);
const node3 = new ListNode(3, node2);

nodeMins4.next = node2;

console.log(detectCycle(node3));
