/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = new Array(height.lenght)
    let right = new Array(height.length)
    let leftMax = height[0]
    let rightMax = height[height.length-1]
    let totalWater = 0

    for(let i = height.length-1 ; i>=0 ; i--){
        
        rightMax = Math.max(rightMax,height[i])
        right[i] = rightMax
    }

    for(let i = 0 ; i<height.length ; i++){
        
        leftMax = Math.max(leftMax,height[i])
        left[i] = leftMax
    }

    for(let i = 0 ; i<height.length ; i++){
        totalWater += Math.min(left[i],right[i])-height[i]
    }

    return totalWater
};