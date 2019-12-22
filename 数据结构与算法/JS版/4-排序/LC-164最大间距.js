/* 
    给定一个无序的数组，找出数组在排序之后，相邻元素之间最大的差值。
    如果数组元素个数小于 2，则返回 0。

    示例 1:
        输入: [3,6,9,1]
        输出: 3
        解释: 排序后的数组是 [1,3,6,9], 其中相邻元素 (3,6) 和 (6,9) 之间都存在最大差值 3。

    
    解题思路：
        1.先进行一下排序，在排好序以后
        2.让两两元素进行差值的比较
        3.通过一个max变量来去和比较完的差值再去比一下，如果比max还大，就替换max的最大值
        4.返回max这个比较后的最大差值
*/
let nums = [3, 6, 9, 1,17,20,99,98,100,77,64,39,22,11,33,42,55,66,77,88,91,41,23,44,19,30,13,70,60,50,40,39,78,5];


var maximumGap = function (arr) {
    if (arr.length < 2)
        return 0;
    // 用它来保存相邻元素的最大差值
    let max = 0;
    let len = arr.length - 1;
    let space;
    // 自己通过冒泡排序实现的最大差值比较计算
    for (let i = len; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
        // 从第二轮遍历开始就知道两个相邻元素的差值
        if (i < len) {
            space = arr[i + 1] - arr[i];
            if (space > max) {
                max = space;
            }
        }
    }
    return Math.max(max, arr[1] - arr[0]);
};

console.time('冒泡');
console.log(maximumGap(nums));
console.timeEnd('冒泡');

// 用nums.sort排序时间复杂度上会快一些
var maximumGap2 = function (nums) {
    if (!nums && nums.length < 2)
        return 0;
    nums.sort((a, b) => a - b);
    let max = 0;
    let tmp;
    for (let i = 0; i < nums.length - 1; i++) {
        tmp = nums[i + 1] - nums[i];
        if (tmp > max) {
            max = tmp;
        }
    }
    return max;
};
console.time('sort');
console.log(maximumGap2(nums));
console.timeEnd('sort');