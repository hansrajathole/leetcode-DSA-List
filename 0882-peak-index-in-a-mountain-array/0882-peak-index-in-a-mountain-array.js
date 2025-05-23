/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let l = 0 
    let r = arr.length-1

    while(l<= r){
        let mid = Math.floor((l+r)/2)
        if(arr[mid]>arr[mid-1]&& arr[mid]>arr[mid+1])return mid
        if(arr[mid]>arr[mid-1]){
            l = mid+1
        }else{
            r = mid-1
        }
    }

    return 1
};