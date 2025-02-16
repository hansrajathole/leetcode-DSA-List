/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 function find(nums,start,end,target,findEndex){
   
   let ans = -1
   while(start<=end){
    let mid = Math.floor((start+end)/2)
    if(nums[mid]===target){
        ans = mid

        if(findEndex){
           end = mid-1 
        }else{
            start = mid+1
        }
    }else if(nums[mid] <target){
        start = mid+1
    }else{
        end = mid-1
    }
   }

   return ans
 }

var searchRange = function(nums, target) {
    let start = 0
    let end = nums.length-1
    
    let first = find(nums,start, end,target,true)
    let last = find(nums,start, end,target,false)


    return [first , last]
};