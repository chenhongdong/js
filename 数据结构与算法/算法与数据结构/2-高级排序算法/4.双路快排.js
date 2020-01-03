let { insertionSort2 } = require('../1-排序基础/2.插入排序');


function partition(arr, l, r) {
    let v = arr[Math.floor((l + r) / 2)];
    // arr[l+1...i] <= v ; arr[j...r] >= v
    let i = l + 1, j = r;

    while (true) {
        while (i <= r && arr[i] < v) i++;
        while (j >= l + 1 && arr[j] > v) j--;

        if (i > j) {
            break;
        }

        swap(arr, i, j);
        i++;
        j--;
    }

    swap(arr, l, j);

    return j;
}

// 对arr[l...r]部分进行快速排序
function sort(arr, l, r) {
    // if (l >= r) 
    //     return;
    if (r - l <= 15) {
        insertionSort2(arr, l, r);
        return;
    }

    let p = partition(arr, l, r);
    sort(arr, l, p - 1);
    sort(arr, p + 1, r);
}
// 交换
function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

let quickSort = function (arr, n) {
    sort(arr, 0, n - 1);
}


// 测试用例
let n = 1000000;
let { randomArray, testSort, orderedArray } = require('../1-排序基础/SortHelper');
let arr = randomArray(n, 0, 10);     // 插入排序处理近乎有序的数组来说，性能会更好，时间复杂度O(n)
// let arr = orderedArray(n, 100);
testSort('quickSort2', quickSort, arr, n);