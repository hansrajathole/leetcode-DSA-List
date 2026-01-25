class Solution {
    public int missingNumber(int[] nums) {
        int sum = 0;

        for(int i = 0 ; i<nums.length; i++){
            sum += nums[i];
        }   


        int mul = nums.length * (nums.length+1);

        System.out.println(nums.length);
        System.out.println(mul);
        int hulf = mul/2;
        System.out.print(hulf);
        return hulf-sum;
    }
}