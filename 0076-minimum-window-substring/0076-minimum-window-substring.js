/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let map = new Map()
    let minLength = Infinity  , count = 0 , minStart = 0


    for(let i = 0 ; i<t.length ; i++){
        let ch = t.charAt(i)
        map.set(ch , (map.get(ch) || 0)+1)
    }

    let i = 0 , j = 0 

    while(j<s.length){
        let ch = s.charAt(j)
        if(map.has(ch)){
            map.set(ch ,map.get(ch)-1)
            if(map.get(ch)>=0)count++
        }

        while(count === t.length){
            if(minLength > j-i+1){
                minLength = j-i+1
                minStart = i
            }

            let ch1 = s.charAt(i)
            map.set(ch1 , map.get(ch1)+1)
            if(map.get(ch1)>0)count--

            i++

        }

        j++
    }

    if(minLength == Infinity) return ""
    return s.substring(minStart , minStart+minLength)


};