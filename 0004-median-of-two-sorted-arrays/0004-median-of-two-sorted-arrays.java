class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        
        int n = nums1.length;
        int m = nums2.length;
        int marged [] = new int[n+m];

        int i = 0;
        int j = 0;
        int k = 0;

        while(i<n && j<m){
            if(nums1[i]<nums2[j]){
                marged[k++] = nums1[i++];
            }else{
                marged[k++] = nums2[j++];

            }
        }

        while(i<n){
             marged[k++] = nums1[i++];
        }


        while(j<m){
             marged[k++] = nums2[j++];
        }

        if(marged.length %2 == 1){
            return marged[marged.length/2];
        }else{

            return  (marged[(marged.length/2)]+  marged[(marged.length/2)-1])/2.0;
        }
        
    }
}