// Problem Link: https://leetcode.com/problems/binary-tree-level-order-traversal/

import { TreeNode } from "./helpers/tree";

export function levelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }

  const result = [];
  const queue: TreeNode[] = [root];

  while (queue.length) {
    const level: number[] = [];

    const initialQueueLength = queue.length;

    for (let count = 0; count < initialQueueLength; count++) {
      const node = queue.shift() as TreeNode;

      level.push(node.val);

      if (node.left) {
        queue.push(node.left as TreeNode);
      }

      if (node.right) {
        queue.push(node.right as TreeNode);
      }
    }

    result.push(level);
  }

  return result;
}

const node7 = new TreeNode(7);
const node15 = new TreeNode(15);
const node20 = new TreeNode(20, node15, node7);
const node9 = new TreeNode(9);
const node3 = new TreeNode(3, node9, node20);

console.log(levelOrder(node3));
