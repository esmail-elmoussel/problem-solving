// Problem Link: https://leetcode.com/problems/reverse-linked-list/

import { ListNode, createListNode, printListNode } from "./helpers/linked-list";

export function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;

  while (head) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
}

const head = createListNode([1, 2, 3, 4, 5]);

printListNode(reverseList(head));
