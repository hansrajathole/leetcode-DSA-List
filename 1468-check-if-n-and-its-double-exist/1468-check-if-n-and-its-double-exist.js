/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    // for(let i = 0 ; i<arr.length ; i++){
    //     for(let j = 0 ; j<arr.length ; j++){
    //         if(i!=j && arr[i]== (2*arr[j])){
    //             return true
    //         }
    //     }
    // }


    let map = new Map()
    for(let i = 0 ; i<arr.length ; i++){
        map.set(arr[i],i)
    }

    for(let i = 0 ; i<arr.length ; i++){
        if(map.has(arr[i]*2) && i!= map.get(arr[i]*2)) return true
    }

    return false
};