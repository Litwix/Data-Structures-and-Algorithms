// LeetCode Problem #24

/*
Given a linked list, swap every two adjacent nodes and return its head. 
You must solve the problem without modifying the values in the list's nodes 
(i.e., only nodes themselves may be changed.)

EXAMPLES:
Input: head = [1,2,3,4]
Output: [2,1,4,3]

Input: []
Output: []

Input: [1]
Output: [1]
*/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// RECURSIVE SOLUTION
/*
Time Complexity: O(n) - where n is the number of nodes in the linked list
Space Complexity: O(n) - stack space for recursion
*/

function swapPairs(head) {
  if (!head || !head.next) return head;

  let nodeA = head;
  let nodeB = head.next;
  let nodeC = head.next.next;

  nodeB.next = nodeA;
  nodeA.next = swapPairs(nodeC);

  return nodeB;
}

// ITERATIVE SOLUTION
/*
Time Complexity: O(n) - where n is the number of nodes in the linked list
Space Complexity: O(1)
*/

function swapPairs2(head) {
  if (!head || !head.next) return head;

  let nodeA = head;
  let newHead = head.next;
  while (nodeA && nodeA.next) {
    let nodeB = nodeA.next;
    let nodeC = nodeA.next.next;
    nodeB.next = nodeA;
    nodeA.next = nodeC && nodeC.next ? nodeC.next : nodeC;
    nodeA = nodeC;
  }
  return newHead;
}
