/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const myMap = new Map();
    if(s.length !== t.length) return false;
    for(let i = 0; i < s.length; i++) {
        const mapValue = myMap.get(s[i]);
        if(!mapValue) {
            for(let value of myMap.values()) {
                if(value === t[i]) return false;
            }
            myMap.set(s[i], t[i]);
        } else if(mapValue !== t[i]){
            return false;
        }
    }
    return true;
};
