/* 
给定一个没有重复数字的序列，返回其所有可能的全排列。
示例:
输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

链接：https://leetcode-cn.com/problems/permutations
*/

// 递归+回溯

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 结果数组
let res = [];

function findPermute(nums, index, arr) {
    if (index === nums.length) {
        res.push([...arr]); // 要用到拷贝arr后的数组，不能直接用arr
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if (!arr.includes(nums[i])) {
            arr.push(nums[i]);
            findPermute(nums, index + 1, arr);
            arr.pop();
        }
    }
    return;
}

var permute = function (nums) {
    if (nums.length === 0) {
        return res;
    }
    findPermute(nums, 0, []);
    return res;
};

console.log(permute([1,2,3]));