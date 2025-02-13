/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(arr, search) {
   let l = 0 
    let r = arr.length-1
    while(l<=r){
        let mid = Math.floor((l+r)/2)
        if(arr[mid]===  search) return mid
        else if(arr[mid]>search){
            r = mid-1
        }else{
            l = mid +1
        } 
    }
    return -1  
};