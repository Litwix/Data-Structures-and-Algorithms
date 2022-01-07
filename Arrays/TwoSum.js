// LeetCode Problem #1

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/

/*
TWO POINTERS
Time Complexity:
    - O(nlog(n)) if unsorted
    - O(n) if sorted
Space Complexity: 
    - O(n) since we need to copy the original array as we cannot mutate it since we're returning the original indices
    - O(1) if we can simply return the values
*/

function twoSum1(nums, target) {
  const copyNums = nums.slice();
  copyNums.sort((a, b) => a - b); // Need to sort if input array is unsorted

  // Set up left and right pointers
  let left = 0;
  let right = copyNums.length - 1;

  while (left < right) {
    let sum = copyNums[left] + copyNums[right];

    if (sum === target) {
      let index1 = 0;
      let index2 = 0;

      // Need to search original array to find original index
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] === copyNums[left]) index1 = i;
        if (nums[i] === copyNums[right]) index2 = i;
      }

      return [index1, index2];
    } else if (sum < target) left++; // Increase left pointer to increase sum since it's below target
    else right--; // Decrease right pointer to decrease sum since it's above target
  }

  // If no solution exists:
  return [];
}

/*
MEMOIZATION
Time Complexity: O(n)
Space Complexity: O(n)
*/

function twoSum2(nums, target) {
  // Set up a hash table / object
  const memo = {};

  // Iterate through array to see if complement was already seen
  // If it wasn't, add the current number into the object as a key with the index position as its value
  // If it was, return the index of current number and along with the index of its complement
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (memo[complement] !== undefined) return [memo[complement], i];
    else {
      memo[nums[i]] = i;
    }
  }

  // If no solution exists:
  return [];
}

// Test Cases:
console.log(twoSum1([2, 7, 11, 15], 9));
console.log(twoSum1([3, 2, 4, 6], 9));
console.log(twoSum2([2, 7, 11, 15], 9));
console.log(twoSum2([3, 2, 4, 6], 9));
