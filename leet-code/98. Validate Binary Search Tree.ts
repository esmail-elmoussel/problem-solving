// Problem Link: https://leetcode.com/problems/validate-binary-search-tree/

/**
 * Definition for a binary tree node.
 */
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

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
