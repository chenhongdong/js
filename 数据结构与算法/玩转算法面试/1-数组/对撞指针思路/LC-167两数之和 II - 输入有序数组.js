/* 
    给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
    函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。

    说明:
    返回的下标值（index1 和 index2）不是从零开始的。
    你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
    示例:

    输入: numbers = [2, 7, 11, 15], target = 9
    输出: [1,2]
    解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
*/

let numbers = [2, 7, 11, 15], target = 22;

// 暴力求解法
// 时间复杂度： O(n^2)
var twoSum = function(numbers, target) {
    let index1 = -1;
    let index2 = -1;

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                index1 = j;
                index2 = i;
            }
        }
    }

    return [index1 + 1, index2 + 1];
};
console.time('暴力')
console.log(twoSum(numbers, target));
console.timeEnd('暴力')


// 优化一下，对撞指针
// 时间复杂度： O(n)
// 空间复杂度： O(1)
var twoSum2 = function(numbers, target) {
    let i = 0, j = numbers.length - 1;

    while (i < j) {
        if (numbers[i] + numbers[j] === target) {
            return [i+1, j+1];
        } else if (numbers[i] + numbers[j] < target) {
            i++;
        } else {    // numbers[i] + numbers[j] > target
            j--;
        }
    }
};
console.time('对撞指针')
console.log(twoSum2(numbers, target));
console.timeEnd('对撞指针')
