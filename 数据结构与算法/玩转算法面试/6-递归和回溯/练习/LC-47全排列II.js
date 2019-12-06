/* 
给定一个可包含重复数字的序列，返回所有不重复的全排列。

示例:
输入: [1,1,2]
输出:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]

链接：https://leetcode-cn.com/problems/permutations-ii
*/

// 递归+回溯+剪枝(去重)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */


var permuteUnique = function(nums) {
    let res = [];

    if (nums.length === 0) {
        return res;
    }
    let used = new Array(nums.length).fill(false);
    nums.sort((a,b) => a - b);
    findPermuteU(nums, 0, []);
    return res;


    function findPermuteU(nums,index,arr) {
        if (index === nums.length) {
            console.log(arr)
            res.push([...arr]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (!used[i]) {
                // 去重复
                if (i > 0 && nums[i] === nums[i-1] && !used[i-1]) {
                    continue;
                }
                used[i] = true;
                arr.push(nums[i]);
                findPermuteU(nums, index + 1, arr);
                arr.pop();
                used[i] = false;
            }
        }
        return;
    }
};


console.log(permuteUnique([1,1,2]));