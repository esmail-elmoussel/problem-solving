// Problem Link: https://leetcode.com/problems/validate-binary-search-tree/

import { TreeNode } from "./helpers/tree";

export function isValidBST(root: TreeNode | null): boolean {
  const validateNode = (
    node: TreeNode | null,
    min: number,
    max: number
  ): boolean => {
    if (!node) {
      return true;
    }

    if (node.val >= max || node.val <= min) {
      return false;
    }

    return (
      validateNode(node.left, min, node.val) &&
      validateNode(node.right, node.val, max)
    );
  };

  return validateNode(root, -Infinity, Infinity);
}

const node3 = new TreeNode(3);
const node1 = new TreeNode(1);
const node2 = new TreeNode(2, node1, node3);

console.log(isValidBST(node2));
