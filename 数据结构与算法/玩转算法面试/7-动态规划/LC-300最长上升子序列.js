/*
给定一个无序的整数数组，找到其中最长上升子序列的长度。
示例:
    输入: [10,9,2,5,3,7,101,18]
    输出: 4 
解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。

链接：https://leetcode-cn.com/problems/longest-increasing-subsequence
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

/* 
        10,  9,  2,  5,  3,  7,  101,  18
value   1    1   1   1   1   1   1     1
->      1    1   1   2                    解释：遍历到了5，5比10、9小，比2大，可以跟在2的后面。值加1，变为2
->      1    1   1   2   2                解释：3比2大，比5小，值也是2，不过不能继续接着作为上升子序列
->      1    1   1   2   2   3            解释：7比2大值加1为2，7又比5大值加1为3，接着上升子序列
->      1    1   1   2   2   3   4     4  解释：101比7都大值为3+1是4，18也比7大值也是4，最长上升子序列的最大值101和18都行  
*/

var lengthOfLIS = function(nums) {
    // 边界情况
    if (nums.length === 0) 
        return 0;
    // memo[i] 表示以 nums[i] 为结尾的最长上升子序列的长度
    let memo = new Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                memo[i] = Math.max(memo[i], 1 + memo[j]);
            }
        }
    }
    let num = 1;
    for (let i = 0; i < nums.length; i++) {
        num = Math.max(num, memo[i]);
    }
    return num; // 时间负责度：O(n^2)
};