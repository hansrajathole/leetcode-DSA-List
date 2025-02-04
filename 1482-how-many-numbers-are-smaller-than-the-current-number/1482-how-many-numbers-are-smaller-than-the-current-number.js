/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let arr = new Array(nums.length-1).fill(0)

    for(let i = 0 ; i<nums.length ; i++){
        let count = 0
        for(let j = 0 ; j<nums.length ; j++){
            if(nums[i]>nums[j]) count++
        }

        arr[i] = count
    }

    return arr



};