/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {


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

    for(let i = 0 ; i<nums.length ; i++){
        if(nums[i]!=i+1){
           return [nums[i], i+1] 
        }
    }

    return arr









//    let set = new Set()
//    let dup = 0 
//    for(let i = 0 ; i<nums.length ; i++){
//         if(set.has(nums[i])){
//             dup = nums[i]
//         }else{
//             set.add(nums[i])
//         }
//    }
//    let count = 1

//     for(let i = 0; i<set.size ; i++){
//         if(!set.has(count)) return [dup,count]
//         else count ++
//     }
//     return [dup , count]
};