/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let oprations = 0 

    while(true){
        let nonZero = nums.filter(num => num > 0 )
        if(nonZero.length === 0) break 
        let minVal = Math.min(...nonZero)
        nums = nums.map(num => num > 0 ? num -= minVal : num)
        oprations++
    }

    return oprations

};