/* 
    O(n^2)的排序算法

    基础
    编码简单，易于实现，是一些简单情景的首选
    在一些特殊情况下，简单的排序算法更有效
    简单的排序算法思想衍生出复制的排序算法(希尔排序是插入排序的优化)
    作为子过程，改进更复杂的排序算法
*/

// Selection Sort 选择排序

let selectionSort = function(arr, n) {  // n是数组的个数
    for (let i = 0; i < n; i++) {
        // 寻找[i, n)区间里的最小值
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        swap(arr, i, minIndex);
    }
}

function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

// let arr = [10,2,11,9,17,20,1]
// selectionSort(arr, 7);
// console.log(arr)

let n = 10000;
let { randomArray, testSort } = require('./SortHelper');
let arr = randomArray(n, 0, n);
testSort('selectionSort', selectionSort, arr, n);