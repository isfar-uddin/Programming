function miniMaxSum(arr) {
    // Write your code here
    let sum = 0;
    let min = arr[0];
    let max = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(min > arr[i]) min = arr[i];
        if(max < arr[i]) max = arr[i];
        sum += arr[i];
    }
    console.log(sum - max,sum - min);
}
