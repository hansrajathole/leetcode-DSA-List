/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(arr, target) {
    let l = 0 
    let r = arr.length-1

    while(l<=r){
        let mid = Math.floor((l+r)/2)
        if(arr[mid]===target) return mid

        else if(arr[l]<= arr[mid]){
            if(arr[l]<=target && target <= arr[mid]){
                r = mid
            }else{
                l = mid+1
            }
        }else{
            if(arr[mid]<=target && target <= arr[r]){
                l = mid+1
            }else{
                r = mid
            }
        }
    }

    return -1
};