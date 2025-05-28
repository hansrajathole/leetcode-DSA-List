/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (!matrix.length || !matrix[0].length) return 0;

    let maxArea = 0;
    const cols = matrix[0].length;
    const heights = new Array(cols).fill(0);

    for (let row of matrix) {
        // Step 1: Update heights
        for (let i = 0; i < cols; i++) {
            heights[i] = row[i] === '1' ? heights[i] + 1 : 0;
        }

        // Step 2: Calculate max area for current row as histogram
        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }

    return maxArea;
};

// Helper: Largest Rectangle in Histogram (from previous problem)
function largestRectangleArea(heights) {
    let stack = [];
    let maxArea = 0;
    heights = [0, ...heights, 0]; // Add sentinels

    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
            let h = heights[stack.pop()];
            let w = i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, h * w);
        }
        stack.push(i);
    }

    return maxArea;
}
