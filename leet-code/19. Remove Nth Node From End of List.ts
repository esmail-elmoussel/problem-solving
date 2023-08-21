// Problem Link: https://leetcode.com/problems/remove-nth-node-from-end-of-list/

import { ListNode, createListNode, printListNode } from "./helpers/linked-list";

export function removeNthFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {
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

const head = createListNode([1, 2, 3, 4, 5]),
  n = 2;

printListNode(removeNthFromEnd(head, n));
