function diagonalDifference(arr) {
    // Write your code here
    let length = arr.length;
    let leftSum = 0;
    let rightSum = 0;

    for(let i = 0; i < length; i++) {
        leftSum += arr[i][i];
        rightSum += arr[i][length - 1 - i];
    }

    return Math.abs(leftSum - rightSum);

}
