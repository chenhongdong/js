/**
    给定一个未排序的整数数组，找出其中没有出现的最小的正整数。

    示例 1:
        输入: [1,2,0]
        输出: 3
    示例 2:
        输入: [3,4,-1,1]
        输出: 2
    示例 3:
        输入: [7,8,9,11,12]
        输出: 1

    解题思路：
        1.正整数是从1开始数的，12345这样
        2.利用选择排序是从左依次拿到最小值，如果这个第一个元素不是1的话就直接返回1，
        3.如果是1的话就继续遍历比较相邻元素的差值，正整数的差值是1，大于1的话就返回相邻元素里小的那个值+1就是未出现的最小正整数
 */


let nums = [3,4,-1,1,2,8,7,9,5,10,6,20,18,19,17,15,13,16,11,12];

// 方法1 sort排序比较消耗性能
var firstMissingPositive = function (nums) {
    // 过滤掉非正整数
    nums = nums.filter(item => item > 0);
    // 数组里的正整数是不是为空
    if (nums.length) {
        // 升序，方便从左到右取最小值
        nums.sort((a, b) => a - b);

        if (nums[0] !== 1) {    // 最小的正整数都是从1开始的
            return 1;
        } else {
            // 从左开始遍历，只有下一个元素和当前元素差值大于1
            // 说明当前元素的下一个值就是未出现过的最小正整数
            for (let i = 0; i < nums.length; i++) {
                if (nums[i + 1] - nums[i] > 1) {
                    return nums[i] + 1;
                }
            }
            // 如果数组是连续的正整数[1,2,3,4,5,6] 就直接返回最后
            return nums.pop() + 1;
        }
    } else {
        return 1;
    }
};
console.time('sort');
console.log(firstMissingPositive(nums));
console.timeEnd('sort');


// 方法2 利用选择排序，从左到右会依次找最小值，排到最左侧
var firstMissingPositive2 = function (nums) {
    nums = nums.filter(item => item > 0);
    // 实现选择排序，先拿到最小值；如果第一个元素不是1直接返回1，如果是1，就要比相邻元素差值
    let min = -1;
    for (let i = 0, len = nums.length; i < len; i++) {
        min = nums[i];
        for (let j = i + 1; j < len; j++) {
            if (nums[j] < min) {
                let tmp = min;
                min = nums[j];
                nums[j] = tmp;
            }
        }
        nums[i] = min;  // 选择排序到这里就结束了

        if (i > 0) {    // 从左开始遍历，i从0开始遍历，i>0表示遍历至少两次了
            if (nums[i] - nums[i - 1] > 1) {
                return nums[i - 1] + 1;
            }
        } else {
            if (min !== 1) {
                return 1;
            }
        }
    }
    return nums.length ? nums.pop() + 1 : 1;
};
console.time('选择');
console.log(firstMissingPositive2([2,1]));
console.timeEnd('选择');