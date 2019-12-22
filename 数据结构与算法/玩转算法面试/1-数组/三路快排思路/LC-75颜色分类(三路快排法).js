/* 
    75题 Sort Colors
    给定一个有n个元素的数组，数组中元素的取值只有0，1，2三种可能。为这个数组排序

    计数排序： 分别排序0，1，2的个数

    示例:
        输入: [2,0,2,1,1,0]
        输出: [0,0,1,1,2,2]
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 时间复杂度： O(n)
// 空间复杂度： O(k),  k为元素的取值范围
var sortColors = function (nums) {
    let count = [0, 0, 0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0 && nums[i] <= 2) { // 边界判断
            count[nums[i]]++;
        }
    }
    let index = 0;
    for (let i = 0; i < count[0]; i++) {
        nums[index++] = 0
    }
    for (let i = 0; i < count[1]; i++) {
        nums[index++] = 1;
    }
    for (let i = 0; i < count[2]; i++) {
        nums[index++] = 2;
    }
};
let arr = [2, 0, 2, 1, 1, 0];
sortColors(arr);





// 优化一下
// 时间复杂度： O(n)
// 空间复杂度： O(1)
// 只遍历一遍数组
var sortColors = function (nums) {
    let zero = -1;              // nums[0...zero] === 0
    let two = nums.length;      // nums[two...n-1] === 2
    for (let i = 0; i < two; ){
        if (nums[i] === 1) {
            i++;
        } else if (nums[i] === 2) {
            two--;
            swap(nums, i, two);
        } else {    // nums[i] === 0
            zero++;
            swap(nums, zero, i);
            i++;
        }
    }
    console.log(nums);
};
function swap(arr,i,j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
sortColors(arr);