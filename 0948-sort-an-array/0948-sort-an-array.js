/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(arr) {
    
    divide(arr, 0 , arr.length-1)
    return arr  
};

function divide(arr, first , last) {
    if(first<last){
        let mid = first + Math.floor((last-first)/2)
        divide(arr, first, mid)
        divide(arr, mid+1, last)
        conquer(arr, first, mid, last)
    }
    
}

function conquer(arr, first, mid, last) {
    let newArr = new Array(last-first+1)
    let i = first
    let j = mid+1
    let k = 0

    while(i<=mid && j<=last){
    
        if(arr[i]<arr[j]){
            newArr[k++] = arr[i++]
        }else{
            newArr[k++] = arr[j++]
        }
    }

    while(i<=mid){
        newArr[k++] = arr[i++]
    }
    
    while(j<=last){
        newArr[k++] = arr[j++]
    }

    
    for(let i = 0 ,j = first ; i<newArr.length ; i++, j++){
        arr[j] = newArr[i]
    }
    
}