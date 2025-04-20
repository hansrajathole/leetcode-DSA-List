/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {

  let max = nums[0]
  let min = nums[0]

  for(let i = 0 ; i< nums.length ; i++){
    if(nums[i]>max) max = nums[i]
    if(nums[i]<min) min = nums[i]
  }  
  let divisor = 1
  for(let i = 1 ; i<=max ; i++){
    if(max%i === 0 && min%i ===0){
        divisor = i
    }
  }

  return divisor
};