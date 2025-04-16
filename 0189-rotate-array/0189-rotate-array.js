/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function reverse(nums , i , j){
    while(i<j){
        let temp = nums[j]
        nums[j] = nums[i]
        nums[i] = temp
        i++
        j--
    }

}

var rotate = function(nums, k) {
    let n = nums.length
    k = k%n
    reverse(nums,0 ,n-1)
    reverse(nums,0 , k-1)
    reverse(nums,k, n-1)
};