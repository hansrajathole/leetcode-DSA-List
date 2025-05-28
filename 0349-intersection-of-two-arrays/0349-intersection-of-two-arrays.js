/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const resultSet = new Set();

    for (let num of nums2) {
        if (set1.has(num)) {
            resultSet.add(num);
        }
    }

    return [...resultSet]
};
