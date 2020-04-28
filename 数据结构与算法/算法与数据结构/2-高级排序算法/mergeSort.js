// 时间复杂度O(nlogn)

// 在数组小的时候引入插入排序来处理排序时间复杂度是O(n)
const { insertionSortRange } = require('./insertionSort');

let mergeSort = function (arr) {
    __mergeSort(arr, 0, arr.length - 1);
};

// 递归调用归并排序，在arr[l...r]的范围里排序
function __mergeSort(arr, l, r) {
    // l大于等于r的话，就没有可以排序的了了
    // if (l >= r) {
    //     return;
    // }

    // 当数组长度比较小的时候，数组近乎有序的概率就比较大
    // 此时插入排序就有优势了，近乎有序的数组插入排序时间复杂度就降到O(n)了
    console.log(r-l)
    if (r - l <= 15) {
        insertionSortRange(arr, l, r);
        return;
    }

    // 取中间一分为二进行排序
    let mid = Math.floor((l + r) / 2);
    __mergeSort(arr, l, mid);
    __mergeSort(arr, mid + 1, r);

    // 合并排序好的数组
    if (arr[mid] > arr[mid + 1]) {  // 处理近乎有序数组时的  优化条件
        __merge(arr, l, mid, r);
    }
}

// 合并排好序的两部分,arr[l...mid]和arr[mid+1...r]
function __merge(arr, l, mid, r) {
    // 需要辅助数组
    let res = arr.slice(l, r + 1);
    // 初始化i指向左半部分的起始索引l，j指向右半部分的起始索引mid+1
    let i = l, j = mid + 1;
    // l为数组的偏移量，需要减去才能对应数组的索引
    for (let k = l; k <= r; k++) {
        // 如果左半边的数都经过比较放到arr中了，就只剩下右半边的没放了
        if (i > mid) {
            arr[k] = res[j - l];
            j++
        }
        // 如果右半边的数都放到arr中了，k还没循环完，那就把左半边的都放过去
        else if (j > r) {
            arr[k] = res[i - l];
            i++;
        }
        // 两边的值比较，谁更小就先放到arr上
        else if (res[i - l] < res[j - l]) {
            arr[k] = res[i - l];
            i++;
        } else {
            arr[k] = res[j - l];
            j++;
        }
    }
}

let arr = [8, 3, 6, 2, 7, 1, 5, 4, 10, 9, 15, 12, 16, 11, 13, 17, 20, 19, 18, 14];
mergeSort(arr);
console.log(arr);