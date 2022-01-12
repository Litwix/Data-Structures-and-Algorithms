// LeetCode Problem #56

/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
and return an array of the non-overlapping intervals that cover all the intervals in the input.

EXAMPLES:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/

/*
Time Complexity: O(nlog(n)) -- since we need to sort the array first
Space Complexity: O(n) -- where n is the length of the input array
*/

function mergeIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [];
    let current = intervals[0];
    
    for (let i = 0; i < intervals.length - 1; i++) {
        if (current[1] < intervals[i+1][0]) { // in the case of no overlap between adjacent intervals, no merging occurs
                                              // can push current interval directly into result
            result.push(current);
            current = intervals[i+1];
        } else {
            if (current[1] >= intervals[i+1][1]) continue; // if next array is contained within the current, we can just ignore it
            else {
                current = [current[0], intervals[i+1][1]]; // otherwise merge and update current interval
            }
        }
    }
    result.push(current); // push the remaining interval after iterating
                          // current will be either the last interval itself from the original input array or merged with the last interval
    
    return result;
}

console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]));
console.log(mergeIntervals([[1,4],[4,5]]));