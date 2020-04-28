/* 
    nlogn比n^2快多少？
                n^2     nlogn   faster
    n=10        100      33         3 
    n=100      10000     664       15
    n=1000      10^6     9966     100
    n=10000     10^8    132877    753
    n=100000    10^10   1660964   6020
*/


let {insertionSort2} = require('../1-排序基础/2.插入排序');

// 递归使用归并排序，对arr[l...r]的范围进行排序
function sort(arr, l, r) {
    // if (l >= r)
    //     return;

    if (r - l <= 15) {
        insertionSort2(arr, l, r);
        return;
    }

    let mid = (l + r) / 2;
    sort(arr, l, mid);
    sort(arr, mid + 1, r);
    // 优化点,处理近乎有序的数组
    if (arr[mid] > arr[mid+1]) {
        merge(arr, l, mid, r);
    }
}
// 将arr[l...mid]和arr[mid+1...r]两部分进行归并
function merge(arr, l, mid, r) {
    let aux = arr.slice(l, r + 1);

    // 初始化i指向左半部分的起始索引l，j指向右半部分的起始索引mid+1
    let i = l, j = mid + 1;
    for (let k = l; k <= r; k++) {

        if (i > mid) {  // 如果左半部分元素已经全部处理完毕
            arr[k] = aux[j - l];
            j++;
        } else if (j > r) {   // 如果右半部分元素已经全部处理完毕
            arr[k] = aux[i - l];
            i++;
        } else if (aux[i - l] < aux[j - l]) {   // 左半部分所指元素 < 右半部分所指元素
            arr[k] = aux[i - l];
            i++;
        } else {
            arr[k] = aux[j - l];
            j++;
        }
    }
}

let mergeSort = function (arr, n) {
    sort(arr, 0, n - 1);
}

let arr = [8, 3, 6, 2, 7, 1, 5, 4];
mergeSort(arr, arr.length);
console.log(arr);


// 测试用例
// let n = 100000;
// let { randomArray, testSort, orderedArray } = require('../1-排序基础/SortHelper');
// let arr = randomArray(n, 0, n);     // 插入排序处理近乎有序的数组来说，性能会更好，时间复杂度O(n)
// testSort('mergeSort', mergeSort, arr, n);