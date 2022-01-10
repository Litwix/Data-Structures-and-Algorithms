/*
GH ALGO PRACTICE

PROMPT:
Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.
A subsequence of an array is a set of numbers that aren’t necessarily adjacent in the array but that are in the same order as they appear in the array. 
For instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so do [2, 4]. 
Note that a single number in an array and the array itself are both valid subsequences of the array.

EXAMPLE:
Array = [5, 9, 6, 8, -1, 7, 2]
Subsequence = [6, -1, 7]
Expected Output: true
*/

/*
Time Complexity: O(n) -- despite the double for loop, we're not starting at the beginning of the array, and we're only doing a single pass
Space Complexity: O(1)
*/

function isSubsequence1(array, sequence) {
    let start = 0; 
    for (let i = 0; i < sequence.length; i++) {
        for (let j = start; j < array.length; j++) {
            if (array[j] === sequence[i]) {
                start = j+1;
                break;
            } else if (j === array.length - 1) {
                return false;
            }
        }
    }
    return true;
}

// Just a nicer way to do the above:
function isSubsequence2(array, sequence) {
    let arrIdx = 0;
    let seqIdx = 0;
  
    while (arrIdx < array.length && seqIdx < sequence.length) {
      if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
      arrIdx++;
    }
    return seqIdx === sequence.length;
  }

console.log(isSubsequence1([5,9,6,8,-1,7,2], [6,-1,7]));
console.log(isSubsequence2([5,9,6,8,-1,7,2], [6,-1,7]));