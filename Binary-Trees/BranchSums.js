/*
Write a function that takes in a Binary Tree and returns a list of it's branch sums ordered from leftmost branch sum to rightmost branch sum. 

A branch sum is the sum of all values in a Binary Tree branch. 
A Binary Tree branch is a path of nodes in a tree that starts at the root node and ends at any leaf node.

Each BinaryTree node has a value, left child node, and right child node.
Children nodes can either be Binary Tree nodes themselves or None/null.

EXAMPLE:
Input:
tree =        1
            /   \
          2       3
        /   \    /  \
      4      5  6    7
     / \     /
    8   9  10

Output: [15, 16, 18, 10, 11]
*/

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  const sums = [];
  calculateSum(root, sums, 0);
  return sums;
}

function calculateSum(node, sums, sum) {
  sum += node.value;
  if (!node.left && !node.right) {
    sums.push(sum);
    return sums;
  } else {
    if (node.left) calculateSum(node.left, sums, sum);
    if (node.right) calculateSum(node.right, sums, sum);
  }
  return sums;
}
