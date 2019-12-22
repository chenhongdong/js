/* 
    在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

    示例 1:
        输入: [3,2,1,5,6,4] 和 k = 2
        输出: 5
    示例 2:
        输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
        输出: 4 
*/

// 第一种方式
// 全部排序完才做处理，没必要，性能不好（针对这道题）
var findKthLargest1 = function (nums, k) {
    return nums.sort((a, b) => b - a)[k - 1];
};

// 第二种方式
// 通过冒泡排序去找到最大的值，如果k是1的话，那就直接找的就是最大的值length-1的位置
// k=2的话，那就是找length-1-1的位置的值
// k=3的话，那就是找length-1-1-1的位置的值
// 推算： k个最大值就是length-k位置的值
var findKthLargest2 = function (nums, k) {
    let len = nums.length - 1;
    for (let i = len, tmp; i > len - k; i--) {
        for (let j = 0; j < i; j++) {
            if (nums[j] > nums[j + 1]) {
                tmp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = tmp;
            }
        }
    }
    return nums[len + 1 - k];
};

// let arr = [3,2,1,5,6,4], k = 2;     // len = 5, i = 5; i > len - k = 3
let arr = [3, 2, 3, 1, 2, 4, 5, 5, 6, 10, 12, 9, 22, 23, 30, 47, 50, 43, 99, 100], k = 4;
console.time('sort');
console.log(findKthLargest1(arr, k));    // 1需要完全排序，比较耗时
console.timeEnd('sort');

console.time('冒泡截断');
console.log(findKthLargest2(arr, k));   // 2比1用时少很多
console.timeEnd('冒泡截断');




