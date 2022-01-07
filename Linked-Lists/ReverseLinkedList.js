// LeetCode Problem #206

/*
Given the head of a singly linked list, reverse the list, and return the reversed list.
Example:
    Input: [1,2,3,4,5]
    Output: [5,4,3,2,1]
*/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function reverseList(head) {
  let newHead = null;

  while (head) {
    let nextNode = head.next;
    head.next = newHead;
    newHead = head;
    head = nextNode;
  }

  return newHead;
}
