// Problem Link: https://leetcode.com/problems/partition-list/

import { ListNode, createListNode, printListNode } from "./helpers/linked-list";

export function partition(head: ListNode | null, x: number): ListNode | null {
  const dummy: ListNode = new ListNode(-Infinity, head);

  let pointer: ListNode = dummy;
  let current: ListNode = dummy;

  while (current.next) {
    if (current.val < x && current.next.val < x) {
      pointer = current.next;
      current = current.next;
    } else if (current.next.val < x) {
      let node = current.next;

      current.next = node.next;
      node.next = pointer.next;
      pointer.next = node;
      pointer = node;
    } else {
      current = current.next;
    }
  }

  return dummy.next;
}

const head = createListNode([1, 4, 3, 1, 2, 5, 2]),
  x = 3;

printListNode(partition(head, x));
