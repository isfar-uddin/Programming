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
};
