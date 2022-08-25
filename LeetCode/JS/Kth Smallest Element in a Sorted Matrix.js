/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */

// Using binary search
var kthSmallest = function(matrix, k) {
    if(matrix.length === 0) return;
    const m = matrix.length, n = matrix[0].length;
    let low = matrix[0][0], high = matrix[m - 1][n - 1];
    while(low <= high) {
        let mid = Math.floor((low + high)/2);
        const count = getSmallestCount(mid, m, n, matrix);
        if(count >= k ) {
            high = mid - 1;
        } else {
            low = mid + 1
        }
    }

    return low;
};

const getSmallestCount = (mid, m, n, matrix) => {
    let count = 0;
    let row = m - 1, col = 0;

    while(col < n && row >= 0) {
        if(matrix[row][col] <= mid) {
            count += row + 1;
            col++
        } else {
            row--;
        }
    }

    return count;
}

// JS built-in method
/*var kthSmallest = function (matrix, k) {
    return matrix.reduce((accum,cur)=>accum=accum.concat(cur),[]).sort((a,b)=>a-b)[k-1];
}*/
