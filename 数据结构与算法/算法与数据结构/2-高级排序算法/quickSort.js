let quickSort = function(arr) {
    __quickSort(arr, 0, arr.length - 1);
}

function __quickSort(arr, l, r) {
    if (l >= r) {
        return;
    }

    let p = __partition(arr, l, r);
    __quickSort(arr, l, p - 1);
    __quickSort(arr, p + 1, r);
}

function __partition(arr, l, r) {
    let mid = Math.floor(l + (r - l) / 2);
    swap(arr, l, mid)
    let v = arr[l];
    // arr[l+1...j] < v    arr[j + 1...i] > v
    let j = l;
    for (let i = l + 1; i <= r; i++) {
        if (arr[i] < v) {
            swap(arr, j + 1, i);
            j++;
        }
    }
    // v和j交换位置
    swap(arr, l, j);
    // j就是分割点
    return j;
}

function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}


let arr = [20, 2, 19, 11, 8, 7, 6, 10, 21, 15, 29, 30, 27, 1, 3, 4, 5, 12, 13, 18, 14, 9];

quickSort(arr);
console.log(arr);