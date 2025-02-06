/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let map = new Map();
    
    // Count frequency of even numbers
    for (let num of nums) {
        if (num % 2 === 0) {
            map.set(num, (map.get(num) || 0) + 1);
        }
    }

    if (map.size === 0) return -1; // No even numbers present

    let maxFrequency = 0;
    let result = Infinity;

    for (let [num, freq] of map) {
        if (freq > maxFrequency || (freq === maxFrequency && num < result)) {
            maxFrequency = freq;
            result = num;
        }
    }

    return result;
};
