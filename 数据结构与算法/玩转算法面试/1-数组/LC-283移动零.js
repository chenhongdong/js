/* 
    给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

    示例:
        输入: [0,1,0,3,12]
        输出: [1,3,12,0,0]
*/


// 时间复杂度: O(n)
// 空间复杂度: O(n)
var moveZeroes = function (nums) {
    let str = '';
    for (let i = 0; i < nums.length; i++) {
        let item = nums[i];
        if (item === 0) {
            str += nums.splice(i, 1);
            i--;
        }
    }
    for (let i = 0; i < str.length; i++) {
        nums.push(Number(str[i]));
    }
};

var nums = [0, 10, 0, 3, 12];
moveZeroes(nums);


// 优化一下
// 时间复杂度: 0(n)
// 空间复杂度变为: O(1)
var moveZeroes = function (nums) {
    let k = 0;  // 在nums中，[0...k)的元素均为非0元素

    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) {          // 非0元素按照顺序排列在了[0...k)中
            nums[k] = nums[i];
            k++;
        }
    }

    // 遍历剩余位置，然后都赋为0
    for (let i = k; i < nums.length; i++) {
        nums[i] = 0;
    }
};

moveZeroes(nums);


// 再优化一下
var moveZeroes = function (nums) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) {  // 取非0元素
            if (k !== i) {
                swap(nums, k, i);
                k++;
            } else {    // k === i
                k++;
            }
        }
    }

    // swap交换函数
    function swap(arr, i, j) {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }

    console.log('再', nums)
};
moveZeroes(nums);
