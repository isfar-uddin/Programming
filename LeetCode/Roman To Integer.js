/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let baseMap = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000],]);

    let convertedValue = 0;

    for(let i = 0; i < s.length; i++) {
        let currentStringValue = baseMap.get(s[i]);
        let nextStringValue = baseMap.get(s[i + 1]);
        if(nextStringValue && currentStringValue < nextStringValue) {
            convertedValue += nextStringValue - currentStringValue;
            i++;
        } else {
            convertedValue += currentStringValue;
        }
    }

    return convertedValue;
};
