/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(num==1)return true
    let n = 2
    while(n<=num/2){
        if(n*n == num) return true
        else n++
    }

    return false

};