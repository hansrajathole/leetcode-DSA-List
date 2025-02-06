/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let ans = 0
    let j = height.length-1
    let i = 0
    while (i < j) {
            let currentArea = Math.min(height[i], height[j]) * (j - i);
            ans = Math.max(ans, currentArea);

            if (height[i] < height[j]) {
                i++;
            } else {
                j--;
            }
        }

        return ans;

};