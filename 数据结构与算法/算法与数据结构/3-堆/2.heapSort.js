let MaxHeap = require('./1.maxHeap');


// 堆排序 O(nlogn)
/* let heapSort = function(arr, n) {
    let maxheap = new MaxHeap();
    for (let i = 0; i < n; i++) {
        maxheap.insert(arr[i]);
    }
    // 从小到大排序
    for (let i = n - 1; i >= 0; i--) {
        arr[i] = maxheap.extractMax();
    }
} */


// 测试用例
/* let n = 1000000;
let { randomArray, testSort, orderedArray } = require('../1-排序基础/SortHelper');
let arr = orderedArray(n, 10);

testSort('Heap Sort', heapSort, arr, n); */


// 利用heapify性能提升更大
let heapSort2 = function (arr, n) {
    let maxheap = new MaxHeap(arr, n);
    // 从小到大排序
    for (let i = n - 1; i >= 0; i--) {
        arr[i] = maxheap.extractMax();
    }
}

// 测试用例
let n = 1000000;
let { randomArray, testSort, orderedArray } = require('../1-排序基础/SortHelper');
let arr = randomArray(n, 0, n);
// let arr = [15, 17, 19, 13, 22, 16, 28, 30, 41, 62];
testSort('Heap Sort 2', heapSort2, arr, n);