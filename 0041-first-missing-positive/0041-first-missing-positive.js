/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(arr) {
     let n = arr.length
    let i = 0
    while( i < n) {
        let correctIndex = arr[i]-1
        if(arr[i]>0){
            if ( (arr[i]< n) && (arr[i] != arr[correctIndex])) {
                let temp = arr[i]
                arr[i] = arr[correctIndex]
                arr[correctIndex] = temp
                correctIndex = arr[i]
            }else{
                i++
            }
        }else{
            i++
        }

    }
    console.log(arr)
    let count = 1 
    for(let j = 0 ; j<arr.length ; j++){
        if(arr[j] != count){
            return count
        }
        count++
    }
    return count 
};