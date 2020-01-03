/* 
    O(nlogn)
    主要是找基准点，比基准点元素小的都在左边，比基准点元素大的都在右边

    数组近乎有序的情况下，快速排序会退化为O(n^2)
    不过快速排序退化为O(n^2)是非常非常低的
*/

let { insertionSort2 } = require('../1-排序基础/2.插入排序');


// 对arr[l...r]部分进行partition操作
// 返回p，使得arr[l...p-1] < arr[p] ; arr[p+1...r] > arr[p]
function partition(arr, l, r) {
    // 选取中间点的元素这样可以不退化到O(n^2)
    let v = arr[Math.floor(l + (r - l) / 2)];
    // arr[l+1...j] < v ; arr[j+1...i) > v
    let j = l;
    for (let i = l + 1; i <= r; i++) {
        if (arr[i] < v) {
            swap(arr, j + 1, i);
            j++;
        }
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
let arr = randomArray(n, 0, n);     // 插入排序处理近乎有序的数组来说，性能会更好，时间复杂度O(n)
// let arr = orderedArray(n, 100);
testSort('quickSort', quickSort, arr, n);