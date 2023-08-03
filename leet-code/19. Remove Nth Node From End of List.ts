// Problem Link: https://leetcode.com/problems/remove-nth-node-from-end-of-list/

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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) {
    return null;
  }

  let left: ListNode = head;
  let right: ListNode | null = head;

  while (n > 0 && right) {
    right = right.next;
    n--;
  }

  if (!right) {
    head = head.next;
  }

  while (right && right.next) {
    right = right.next;
    left = left.next as ListNode;
  }

  left.next = left.next?.next || null;

  return head;
}

const node5 = new ListNode(5);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

console.log(removeNthFromEnd(node1, 2));
