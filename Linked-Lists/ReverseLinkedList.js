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

// ITERATIVE
function reverseList1(head) {
  let newHead = null;

  // Essentially having 3 pointers in following order: newHead, head, nextNode
  // Once head becomes null, newHead is pointing to the last node in the original linked list
  // and every direction has been reversed
  while (head) {
    let nextNode = head.next;
    head.next = newHead; // reversing the direction here
    newHead = head; // then increment pointers
    head = nextNode;
  }

  return newHead;
}

// RECURSIVE
function reverseList2(head) {
  return reverseListRecursive(head, null);
}

// Similar logic here where pointers are in same order
// However, here we terminate when nextNode is null (rather than head) and return the head
function reverseListRecursive(head, newHead) {
  if (head === null) {
    return newHead;
  } else {
    let nextNode = head.next;
    head.next = newHead; // reversing direction here
    return reverseListRecursive(nextNode, head); // incrementing here by putting in new positions for the pointers
  }
}
