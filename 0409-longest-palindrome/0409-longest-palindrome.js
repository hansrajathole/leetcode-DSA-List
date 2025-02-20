/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map = new Map()

    for(let i = 0 ; i<s.length ; i++){
        if(map.has(s.charAt(i))){
            map.set(s.charAt(i),map.get(s.charAt(i))+1)
        }else{
            map.set(s.charAt(i),1)
        }
    }

    let sum = 0
    console.log(map)
    for(let key of map.keys()){
        if(map.get(key)%2===0){
            sum+=map.get(key)
        }else if(map.get(key)>=3){
            sum += map.get(key)-1
        }
    }

    if(s.length >sum){
        sum = sum +1
    }

    return sum
};