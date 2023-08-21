// Problem Link: https://leetcode.com/problems/merge-two-sorted-lists/

import { ListNode, createListNode, printListNode } from "./helpers/linked-list";

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let dummy = new ListNode();
  let tempTail = dummy;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      tempTail.next = list2;
      list2 = list2.next;
    } else {
      tempTail.next = list1;
      list1 = list1.next;
    }

    tempTail = tempTail.next;
  }

  if (list1) {
    tempTail.next = list1;
  }

  if (list2) {
    tempTail.next = list2;
  }

  return dummy.next;
}

const list1 = createListNode([1, 2, 4]),
  list2 = createListNode([1, 3, 4]);

printListNode(mergeTwoLists(list1, list2));
