// 时间复杂度O(n^2)
var insertionSort = function(arr) {
    for (let i = 1; i < arr.length; i++) {
        let e = arr[i];
        let j;
        for (j = i; j > 0; j--) {
            if (arr[j - 1] >= e) {
                arr[j] = arr[j - 1];
            } else {
                break;
            }
        }
        arr[j] = e;
    }
};


// 对arr[l...r]范围的数组进行插入排序
// 对于近乎有序的数组，插入排序的时间复杂度会降到O(n)
var insertionSortRange = function(arr, l, r) {
    console.log('这里是有范围的插入排序')
    for (let i = l + 1; i <= r; i++) {
        let e = arr[i];
        let j;

        for (j = i; j > l; j--) {
            if (arr[j - 1] >= e) {
                arr[j] = arr[j - 1];
            } else {
                break;
            }
        }
        arr[j] = e;
    }
}

module.exports = {
    insertionSort,
    insertionSortRange
}