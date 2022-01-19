// LeetCode Problem #21

/*
You are given the heads of two sorted linked lists, list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

EXAMPLES:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Input: list1 = [], list2 = []
Output: []

Input: list1 = [], list2 = [0]
Output: [0]
*/

/*
Time Complexity: O(n), where n is the total number of nodes between list1 and list2
Space Complexity: O(1)
*/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function mergeTwoLists(list1, list2) {
  if (!list1 && !list2) return null;
  if (!list1) return list2;
  if (!list2) return list1;

  let newHead = new ListNode();
  let tail = newHead;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      tail.next = list1;
      tail = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      tail = list2;
      list2 = list2.next;
    }
  }

  if (!list1) tail.next = list2;
  if (!list2) tail.next = list1;

  return newHead.next;
}
