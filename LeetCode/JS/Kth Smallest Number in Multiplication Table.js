/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(m, n, k) {
    let low = 1, high = m * n;
    while(low <= high) {
        let mid = Math.floor((low + high)/2);
        const count = getSmallestNumberCount(mid, m, n);
        if(count >= k) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
};

const getSmallestNumberCount = (mid, m, n) => {
    let count = 0;
    for(let i = 1; i<=m; i++) {
        count += Math.min(Math.floor(mid/i), n);
    }
    return count;
}
