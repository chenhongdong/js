/* 
给定一个只包含正整数的非空数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
注意:
每个数组中的元素不会超过 100
数组的大小不会超过 200
示例 1:
    输入: [1, 5, 11, 5]
    输出: true
    解释: 数组可以分割成 [1, 5, 5] 和 [11].
示例 2:
    输入: [1, 2, 3, 5]
    输出: false
    解释: 数组不能分割成两个元素和相等的子集.

链接：https://leetcode-cn.com/problems/partition-equal-subset-sum
*/


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    // 和是可以被平分的
    if (sum % 2 !== 0) {
        return false;
    }

    let n = nums.length;
    let C = sum / 2;
    let memo = new Array(C+1).fill(false);

    for (let i = 0; i <= C; i++) {
        memo[i] = (nums[0] === i);
    }
    // 动态规划状态转移
    for (let i = 1; i < n; i++) {
        for (let j = C; j >= nums[i]; j--) {
            memo[j] = memo[j] || memo[j-nums[i]];
        }
    }

    return memo[C];
};

// 使用nums[0...index]，是否可以完全填充一个容量为sum的背包
function tryPartition(nusm, index, sum) {
    if (sum === 0) {
        return true;
    }

    if (sum < 0 || index < 0) {
        return false;
    }

    return tryPartition(nums, index - 1, sum) || tryPartition(nums, index - 1, sum - nums[index]);
}