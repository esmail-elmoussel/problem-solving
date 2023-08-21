// Problem Link: https://leetcode.com/problems/linked-list-cycle-ii/

import { ListNode, createListNode, printListNode } from "./helpers/linked-list";

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

const head = createListNode([3, 2, 0, -4]);

printListNode(detectCycle(head));
