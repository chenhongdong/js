/* 
    数组中的问题其实最常见

    排序： 选择排序；插入排序；归并排序；快速排序
    查找： 二分查找法
    数据结构： 栈；队列；堆

*/

// 二分查找法   O(logn)
let binarySearch = function (arr, target) {
    let l = 0, r = arr.length - 1;   // 限定两个边界值   

    while (l <= r) {   // 当 l===r时，区间[l...r]依然是有效的
        // (l + r) / 2这种写法是有一个不容易被发现的问题的，如果n特别大，就会造成整型溢出
        // let mid = Math.floor((l + r) / 2);

        // 改写成下面这种形式 l + (r-l)/2 防止整型溢出
        let mid = Math.floor(l + (r - l) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] > target) {
            r = mid - 1;   // target在[l...mid+1]中
        } else {
            l = mid + 1;   // target在[mid+1...r]中
        }
    }
    // 没有找到target就返回-1
    return -1;
};

let n = 1000000;
let arr = [];
for (let i = 0; i < n; i++) {
    arr.push(i);
}
console.time('binarySearch')
for (let i = 0; i < n; i++) {
    binarySearch(arr, i);
}
console.timeEnd('binarySearch');


var search = function(nums, target) {
    // l和r确定的是nums[l...r]的查找范围
    let l = 0, r = nums.length - 1;

    while (l <= r) {
        // l+r这种会在l和r都非常大的时候造成整型溢出，所以不使用加法操作改成l + (r - l) / 2
        let mid = Math.floor(l + (r - l) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] > target) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    // 如果最后都没有查到就是-1了
    return -1;
};  



let nums = [-1,0,3,5,9,12], target = 9;
console.log(search(nums, target));;