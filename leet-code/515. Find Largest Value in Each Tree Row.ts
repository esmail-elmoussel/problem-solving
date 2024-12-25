// Problem Link: https://leetcode.com/problems/find-largest-value-in-each-tree-row/

import { TreeNode } from "./helpers/tree";

export function largestValues(root: TreeNode | null): number[] {
  const result: number[] = [];

  const setLevelLargestValue: (node: TreeNode | null, level: number) => void = (
    node: TreeNode | null,
    level: number
  ): void => {
    if (!node) {
      return;
    }

    console.log(node.val);

    result[level] = Math.max(result[level] ?? -Infinity, node.val);

    setLevelLargestValue(node.left, level + 1);
    setLevelLargestValue(node.right, level + 1);
  };

  setLevelLargestValue(root, 0);

  return result;
}

const node5 = new TreeNode(5);
const node9 = new TreeNode(9);
const node3 = new TreeNode(3);
const node3Parent = new TreeNode(3, node5, node3);
const node2 = new TreeNode(2, null, node9);
const node1 = new TreeNode(1, node3Parent, node2);

console.log(largestValues(node1));
