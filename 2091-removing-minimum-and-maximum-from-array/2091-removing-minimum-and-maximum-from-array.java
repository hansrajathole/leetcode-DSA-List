class Solution {
    public int minimumDeletions(int[] nums) {
        int n = nums.length;

        int minIndex = 0;
        int maxIndex = 0;

        // Step 1: find min and max index
        for (int i = 0; i < n; i++) {
            if (nums[i] < nums[minIndex]) {
                minIndex = i;
            }
            if (nums[i] > nums[maxIndex]) {
                maxIndex = i;
            }
        }

        // Ensure minIndex < maxIndex
        int left = Math.min(minIndex, maxIndex);
        int right = Math.max(minIndex, maxIndex);

        // Step 2: calculate 3 cases
        int deleteFromLeft = right + 1;
        int deleteFromRight = n - left;
        int deleteBothSides = (left + 1) + (n - right);

        // Step 3: return minimum
        return Math.min(deleteFromLeft, Math.min(deleteFromRight, deleteBothSides));
    }
}
