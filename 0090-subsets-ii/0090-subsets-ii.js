/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var solve = function(nums , i , ans , cur){
    if(i==nums.length){
        ans.push([...cur])
        return
    }
    cur.push(nums[i])
    solve(nums, i+1, ans , cur)
    cur.pop()
    while(i+1<nums.length && nums[i]==nums[i+1])i++
    solve(nums, i+1 , ans , cur)
}

var subsetsWithDup = function(nums) {
    nums.sort()
    let ans = []
    let cur = []
    solve(nums , 0 , ans , cur)
    return ans
};