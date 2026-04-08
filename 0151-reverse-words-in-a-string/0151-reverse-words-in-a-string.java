class Solution {
    public String reverseWords(String s) {
        s = s.trim();
        String arr[] = s.split(" +");
        String str = "";

        for(int i = arr.length-1 ; i>= 0 ; i--){
            str += arr[i]+" ";
        }

        return str.trim();
    }
}