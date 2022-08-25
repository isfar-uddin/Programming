/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let temp = [];
    if(s.length %2) return false;

    for(let i = 0; i< s.length; i++) {
        if(s[i] === "(" || s[i] === "{" || s[i] === "[") {
            temp.push(s[i]);
        } else {
            const lastItem = temp.pop();
            if(lastItem === '(' && s[i] === ')') continue;
            if(lastItem === '[' && s[i] === ']') continue;
            if(lastItem === '{' && s[i] === '}') continue;

            return false;
        }
    }

    return temp.length === 0;
};

//Clean solution
var isValid = function(s) {
    let temp = [];
    if(s.length %2) return false;

    for(let i = 0; i< s.length; i++) {
        if(s[i] === "(") {
            temp.push(")");
        } else if(s[i] === "{") {
            temp.push("}");
        } else if(s[i] === "[") {
            temp.push("]");
        } else {
            if(temp.pop() !== s[i]) return false;
        }
    }

    return temp.length === 0;
};
