/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(arr) {


    let n = arr.length
    let i = 0
    while( i < n) {
        let correctIndex = arr[i]

        if (arr[i]<arr.length && arr[i] != arr[correctIndex]) {
            let temp = arr[i]
            arr[i] = arr[correctIndex]
            arr[correctIndex] = temp
            correctIndex = arr[i]
        }else{
            i++
        }

    }
    console.log(arr)
    let j = 0
    for(j ; j<arr.length ; j++){
        if(arr[j] != j){
            return j
        }
    }

    return j




    // let set = new Set(nums)

    // for(let i = 0 ; i<= nums.length ; i++){
    //     if(!set.has(i)){
    //         return i
    //     }
    // }
    // return 1

};