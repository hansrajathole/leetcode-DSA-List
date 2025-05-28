/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    const combination = [];

    function backtrack(start, target) {
        if (target === 0) {
            result.push([...combination]);
            return;
        }
        if (target < 0) return;

        for (let i = start; i < candidates.length; i++) {
            combination.push(candidates[i]);
            backtrack(i, target - candidates[i]);  // Not i+1 because we can reuse same element
            combination.pop();
        }
    }

    backtrack(0, target);
    return result;
};
