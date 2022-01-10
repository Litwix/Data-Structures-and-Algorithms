// LeetCode Problem #283

/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.
Do not return anything, modify nums in-place instead.
*/

// Both of the following solutions are O(n) in time and O(1) in space

function moveZeroes1(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) continue;
    else {
      let j = i + 1;
      while (nums[j] === 0 && j < nums.length) j++; // find next non-zero number to swap with 0 (nums[i])
      if (j === nums.length) break; // if no more non-zero numbers, break
      else {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
}

function moveZeroes2(nums) {
  let left = 0; // slow pointer -- keeps track of the 0s position to swap with next non-zero number
  for (let right = 0; right < nums.length; right++) { // fast pointer
    if (nums[right] !== 0 && nums[left] === 0) {
      nums[left] = nums[right];
      nums[right] = 0;
    }
    if (nums[left] !== 0) left++;
  }
}

// Test Cases:
console.log(moveZeroes1([0,1,0,3,12]));
console.log(moveZeroes1([0,1,2,3,4]));
console.log(moveZeroes1([0]));
console.log(moveZeroes2([0,1,0,3,12]));
console.log(moveZeroes2([0,1,2,3,4]));
console.log(moveZeroes2([0]));