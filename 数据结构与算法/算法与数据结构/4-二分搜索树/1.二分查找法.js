/* 
    算法复杂度： O(logn)
*/

let binarySearch = function (arr, target) {
    let l = 0, r = arr.length - 1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (target > arr[mid]) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }

    return -1;
};


let arr = [99, 30, 43, 32, 28, 60, 12, 1];
console.log(binarySearch(arr, 32))