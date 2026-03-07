class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int arr [] =  new int[n];
        int prifix [] =  new int [n];
        int suffix = 1;
        prifix[0] = 1;
        for(int i = 1 ; i<n ; i++){
           prifix[i] = prifix[i-1]*nums[i-1];
        }

        for(int i = n-1 ; i>=0 ; i--){
           arr[i] =  prifix[i] * suffix;
           suffix *= nums[i];
        }

        return arr;
    }
}