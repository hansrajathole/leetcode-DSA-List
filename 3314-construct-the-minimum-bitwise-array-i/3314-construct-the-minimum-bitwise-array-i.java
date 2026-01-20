class Solution {
    public int[] minBitwiseArray(List<Integer> nums) {
        int n = nums.size();
        int[] ans = new int[n];

        for (int i = 0; i < n; i++) {
            int v = nums.get(i);

            // even -> impossible
            if ((v & 1) == 0) {
                ans[i] = -1;
                continue;
            }

            // count trailing 1s
            int t = Integer.numberOfTrailingZeros(~v);
            int k = t - 1;

            ans[i] = v - (1 << k);
        }
        return ans;
    }
}
