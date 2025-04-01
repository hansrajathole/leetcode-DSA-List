/**
 * @param {string} digits
 * @return {string[]}
 */

var solve = function(dig,i, cur,ans,map ){
    if(i==dig.length){
        if(cur.length>0)ans.push(cur)
        return
    }
    let s = map.get(dig.charAt(i))
    for(let j = 0 ; j<s.length ; j++){
        solve(dig,i+1,cur+s.charAt(j), ans , map)
    }
   
}
var letterCombinations = function(digits) {

    let ans = []
    let map = new Map()
    map.set('2',"abc")
    map.set('3',"def")
    map.set('4',"ghi")
    map.set('5',"jkl")
    map.set('6',"mno")
    map.set('7',"pqrs")
    map.set('8',"tuv")
    map.set('9',"wxyz")
    solve(digits, 0 ,"", ans , map)
    return ans
};