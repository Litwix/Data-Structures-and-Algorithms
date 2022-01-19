// LeetCode Problem #98

/*
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:
- The left subtree of a node contains only nodes with keys less than the node's key.
- The right subtree of a node contains only nodes with keys greater than the node's key.
- Both the left and right subtrees must also be binary search trees.

EXAMPLES:
Input: root [2, 1, 3]
          2
         / \
        1   3
Output: true

Input: root = [5, 1, 4, null, 3, 6]
          5
         / \
        1   4
           / \
          3   6
Output: false
*/

/*
Time Complexity: O(n), where n is the number of nodes in the BST
Space Complexity: O(d), where d is the depth of the BST
*/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function isValidBST(root) {
  return validateHelper(root, Infinity, -Infinity);
}

function validateHelper(root, max, min) { // Can also just use this as the answer if we can add parameters to original function
  if (!root) return true;
  if (root.value >= max || root.value < min) return false;

  const isLeftValid = validateHelper(root.left, root.value, min);
  const isRightValid = validateHelper(root.right, max, root.value);

  return isLeftValid && isRightValid;
}
