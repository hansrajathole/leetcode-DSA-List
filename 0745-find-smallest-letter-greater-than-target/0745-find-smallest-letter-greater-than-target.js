/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let start = 0
    let end = letters.length-1
    let code = target.charCodeAt()
  
    while(start<=end){
        let mid = Math.floor((start+end)/2)
        let ascii = letters[mid].charCodeAt()

        if(ascii <= code ){
            start = mid+1
        }else{
            end = mid-1
        }
    }
    let ans = start%letters.length
    return letters[ans]
};