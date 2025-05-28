/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    const map = new Map(); // Stores first index where each prefix sum occurred
    map.set(0, -1); // Important: prefix sum 0 starts before array
    let maxLen = 0;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        // Convert 0 to -1
        sum += nums[i] === 0 ? -1 : 1;

        if (map.has(sum)) {
            // If this sum was seen before, subarray sum between previous index and i is 0
            maxLen = Math.max(maxLen, i - map.get(sum));
        } else {
            // Store first occurrence of this prefix sum
            map.set(sum, i);
        }
    }

    return maxLen;
};
