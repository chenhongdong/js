let mergeSortBU = function (arr, n) {
    for (let sz = 1; sz <= n; sz += sz) {
        for (let i = 0; i + sz < n; i += sz + sz) {
            // 对arr[i...i+sz-1]和arr[i+sz...i+2*sz-1] 进行归并
            merge(arr, i, i + sz - 1, Math.min(i + sz + sz - 1, n-1));
        }
    }
}

function merge(arr, l, mid, r) {
    let tmp = arr.slice(l, r + 1);

    let i = l, j = mid + 1;
    for (let k = l; k <= r; k++) {
        if (i > mid) {
            arr[k] = tmp[j - l];
            j++;
        } else if (j > r) {
            arr[k] = tmp[i - l];
            i++;
        } else if (tmp[i - l] < tmp[j - l]) {
            arr[k] = tmp[i - l];
            i++;
        } else {
            arr[k] = tmp[j - l];
            j++;
        }
    }
}

// 测试用例
let n = 100000;
let { randomArray, testSort, orderedArray } = require('../1-排序基础/SortHelper');
let arr = randomArray(n, 0, n);     // 插入排序处理近乎有序的数组来说，性能会更好，时间复杂度O(n)
testSort('mergeSortBU', mergeSortBU, arr, n);