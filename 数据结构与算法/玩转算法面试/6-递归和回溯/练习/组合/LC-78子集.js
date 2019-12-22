/* 
给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
说明：解集不能包含重复的子集。
示例:
    输入: nums = [1,2,3]
    输出:
        [
          [3],
          [1],
          [2],
          [1,2,3],
          [1,3],
          [2,3],
          [1,2],
          []
        ]

链接：https://leetcode-cn.com/problems/subsets
*/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];
    if (nums.length === 0) {
        return res;
    }
    let tmp = [];
    for (let i = 0; i <= nums.length; i++) {
        findSub(nums, 0, tmp, i);
    }
    
    return res;


    function findSub(nums, index, arr, k) {
        if (arr.length === k) {
            res.push([...arr]);
            return;
        }
        // 剪枝 i < nums.length - (k - arr.length) + 1
        for (let i = index; i < nums.length - (k - arr.length) + 1; i++) {
            arr.push(nums[i]);
            findSub(nums, i + 1, arr, k);
            arr.pop();
        }
        return;
    }
};


console.log(subsets([1,2,3]));