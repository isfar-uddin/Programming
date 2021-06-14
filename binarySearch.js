function BinarySearch(arr, start, end, num) {

    if(start > end) return false;

    var mid = Math.floor((start + end)/2);

    if(arr[mid] === num) return true;

    if(arr[mid] > num) {
        return BinarySearch(arr, start, mid - 1, num);
    } else {
        return BinarySearch(arr, mid + 1, end, num);
    }

}

var arr = [10, 5, 2, 11, 8, 20, 40, 35, 37, 25, 100, 60, 50, 45];

arr.sort((a,b) => a - b);

console.log('isFound: ', BinarySearch(arr, 0, arr.length - 1, 10));
