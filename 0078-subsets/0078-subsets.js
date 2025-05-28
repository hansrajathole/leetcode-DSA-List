/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [];
    const subset = [];

    function backtrack(index) {
        // Add a copy of the current subset
        result.push([...subset]);

        for (let i = index; i < nums.length; i++) {
            subset.push(nums[i]);      // Include nums[i]
            backtrack(i + 1);          // Move on to next element
            subset.pop();              // Backtrack, remove nums[i]
        }
    }

    backtrack(0);
    return result;
};
