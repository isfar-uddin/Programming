var searchMatrix = function(matrix, target) {
    let rowLength = matrix.length;
    let columnLength = matrix[0].length;

    let i = 0, j = columnLength - 1;

    while(i < rowLength && j >= 0) {

        if(matrix[i][j] === target) {
            return true;
        }

        if(matrix[i][j] > target) {
            j--;
        } else {
            i++;
        }
    }

    return false;

    /* Another solution which will work only if prev row last column value is less than current row first column value

    if(!matrix.length) return false;

    const m = matrix.length;
    const n = matrix[0].length;

    let start = 0, end = m * n - 1;

    while(start <= end) {
        const mid = Math.floor((start + end)/2);
        let i = Math.floor(mid / n);
        let j = mid % n;
        if(matrix[i][j] === target) return true;
        if(matrix[i][j] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return false;
    */
};
