// let MaxHeap = require('./1.maxHeap');


let heapSort = function (arr, n) {
    // heapify
    for (let i = (n - 1) / 2; i >= 0; i--) {
        shiftDown(arr, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        // 开头和最后的元素进行交换
        swap(arr, 0, i);
        shiftDown(arr, i, 0);
    }
}

function shiftDown(arr, n, k) {
    while (2 * k + 1 < n) {
        let j = 2 * k + 1;
        if (j + 1 < n && arr[j + 1] > arr[j]) {
            j += 1;
        }
        if (arr[k] >= arr[j])
            break;

        swap(arr, k, j);
        k = j;
    }
}

function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}



// 测试用例
let n = 1000000;
let { randomArray, testSort, orderedArray } = require('../1-排序基础/SortHelper');
// let arr = randomArray(n, 0, n);
let arr = [15, 17, 19, 13, 22, 16, 28, 30, 41, 62];
testSort('Heap Sort 3', heapSort, arr, 10);