/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(arr, k) {
  
        if(k>arr.length) return -1
        let l = arr[0] , r= arr[0]
        for(let i = 1 ;i<arr.length ; i++){
            l = Math.max(l,arr[i])
            r = r+ arr[i]
        }
        
        let ans = -1
        while(l<=r){
            let mid = Math.floor((l+r)/2)
            if(isValid(arr , k , mid)){
                ans = mid
                r= mid-1
            }else {
                l = mid+1
            }
        }
        
        return ans
     
};


 function isValid( arr, k , mid ){
     let count = 1 , sum = 0 
     for(let i = 0 ; i<arr.length ; i++){
         if(sum + arr[i]>mid){
             count++
             sum = arr[i]
         }else sum += arr[i]
     }
     
     return count<=k
 }