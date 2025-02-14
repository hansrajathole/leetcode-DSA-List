/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    nums.sort((a, b) => a - b); // Sort nums in ascending order

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === original) {
            original *= 2;
        }
    }

    return original;
};