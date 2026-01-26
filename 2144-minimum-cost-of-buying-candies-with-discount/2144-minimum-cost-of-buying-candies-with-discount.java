import java.util.*;

class Solution {
    public int minimumCost(int[] cost) {

        Arrays.sort(cost); // ascending
        int sum = 0;
        int count = 0;

        for (int i = cost.length - 1; i >= 0; i--) {
         
               count++;
            if (count == 3) {
                count = 0; // 3rd candy free
            } else {
                sum += cost[i];
            }
            
        }

        return sum;
    }
}
