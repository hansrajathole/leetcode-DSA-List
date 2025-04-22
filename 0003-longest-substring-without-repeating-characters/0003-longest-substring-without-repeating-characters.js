/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest = 0
    let set = new Set()
    let i = 0 , j = 0 
    while(j<s.length){
        let ch = s.charAt(j)
        if(set.has(ch)){
            set.delete(s.charAt(i))
            i++
        }else {
            set.add(ch)
            longest = Math.max(longest , set.size)
            j++
        }
    }

    return longest
};