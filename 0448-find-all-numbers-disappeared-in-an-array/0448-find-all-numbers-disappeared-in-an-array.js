/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let i = 0 
    let n = nums.length
    while(i<n){
        let current = nums[i]-1
        if(nums[i]!= nums[current]){
            let temp = nums[i]
            nums[i] = nums[current]
            nums[current] = temp
        }else{
            i++
        }
    }

    let count = 1
    let arr = []
    console.log(nums)
    for(let i = 0 ; i<nums.length ; i++){
        if(nums[i]!=count){
            arr.push(count)
            
        }
        count++
    }

    return arr
};