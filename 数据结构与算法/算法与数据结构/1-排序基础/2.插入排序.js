/* 
    O(n^2)
    插入排序在近乎有序的数组里排序的效率非常非常高，可以达到O(n)复杂度
*/
// 插入排序
let insertionSort = function (arr, n) {
    // 不用考虑第0个元素，从第1个元素开始
    for (let i = 1; i < n; i++) {
        // 寻找元素arr[i]合适的插入位置

        // 优化，一次交换三次赋值
        let e = arr[i];
        let j;      // j保存元素e应该插入的位置
        for (j = i; j > 0 && arr[j - 1] > e; j--) {
            // swap(arr, j, j - 1);
            arr[j] = arr[j - 1];    // 前一个位置的元素向后挪
        }
        arr[j] = e;
    }
}


function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}


function insertionSort2(arr, l, r) {
    for (let i = l + 1; i <= r; i++) {
        let e = arr[i];
        let j;
        for (j = i; j > l && arr[j-1] > e; j--) {
            arr[j] = arr[j-1];
        }
        arr[j] = e;
    }
    return;
}


// 测试用例
let n = 50000;
let { randomArray, testSort, orderedArray } = require('./SortHelper');
let arr = randomArray(n, 0, n);     // 插入排序处理近乎有序的数组来说，性能会更好，时间复杂度O(n)
// testSort('insertionSort', insertionSort, arr, n);


module.exports = {
    insertionSort2
}