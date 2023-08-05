// Problem Link: https://leetcode.com/problems/add-two-numbers/

import { ListNode, createListNode, printListNode } from "./helpers/linked-list";

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let dummyHead: ListNode | null = new ListNode();
  let currentNode: ListNode | null = dummyHead;
  let carry = 0;

  while (l1 || l2 || carry) {
    let sum = (l1?.val || 0) + (l2?.val || 0) + carry;

    if (sum > 9) {
      sum -= 10;
      carry = 1;
    } else {
      carry = 0;
    }

    const newNode = new ListNode(sum);

    currentNode.next = newNode;

    currentNode = newNode;

    if (l1) {
      l1 = l1.next;
    }

    if (l2) {
      l2 = l2.next;
    }
  }

  return dummyHead.next;
}

const l1 = createListNode([9, 9, 9, 9, 9, 9, 9]),
  l2 = createListNode([9, 9, 9, 9]);

printListNode(addTwoNumbers(l1, l2));
