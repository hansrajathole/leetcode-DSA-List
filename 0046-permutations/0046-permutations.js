/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    const permutation = [];
    const used = new Array(nums.length).fill(false);

    function backtrack() {
        if (permutation.length === nums.length) {
            result.push([...permutation]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;

            used[i] = true;
            permutation.push(nums[i]);
            backtrack();
            permutation.pop();
            used[i] = false;
        }
    }

    backtrack();
    return result;
};
