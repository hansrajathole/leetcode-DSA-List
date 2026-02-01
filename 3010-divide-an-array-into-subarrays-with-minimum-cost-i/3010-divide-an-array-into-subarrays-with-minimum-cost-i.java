class Solution {
    public int minimumCost(int[] nums) {
        
        int first = nums[0];

        nums = Arrays.copyOfRange(nums, 1, nums.length);
        Arrays.sort(nums);
        
        return first+nums[0]+nums[1];
    }
}