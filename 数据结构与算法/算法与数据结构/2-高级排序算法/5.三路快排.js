let { insertionSort2 } = require('../1-排序基础/2.插入排序');


// 对arr[l...r]部分进行快速排序
function sort(arr, l, r) {
    if (r - l <= 15) {
        insertionSort2(arr, l, r);
        return;
    }

    // partition
    let v = arr[Math.floor((l + r) / 2)];
    let lt = l;         // arr[l+1...lt] < v
    let gt = r + 1;     // arr[gt...r] > v
    let i = l + 1;      // arr[lt+1...i) === v

    while (i < gt) {
        if (arr[i] < v) {
            swap(arr, i, lt + 1);
            lt++;
            i++;
        } else if (arr[i] > v){
            swap(arr, i, gt - 1);
            gt--;
        } else {
            i++;
        }
    }
    swap(arr, l, lt);


    sort(arr, l, lt - 1);
    sort(arr, gt, r);
}
// 交换
function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

let quickSort3Ways = function (arr, n) {
    sort(arr, 0, n - 1);
}


// 测试用例
let n = 1000000;
let { randomArray, testSort, orderedArray } = require('../1-排序基础/SortHelper');
// let arr = randomArray(n, 0, n);     // 插入排序处理近乎有序的数组来说，性能会更好，时间复杂度O(n)
let arr = orderedArray(n, 100);
testSort('quickSort3Ways', quickSort3Ways, arr, n);