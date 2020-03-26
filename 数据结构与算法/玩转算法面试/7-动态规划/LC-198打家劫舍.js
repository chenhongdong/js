/* 
你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。
示例 1:
输入: [1,2,3,1]
输出: 4
解释: 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。
示例 2:
输入: [2,7,9,3,1]
输出: 12
解释: 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。

链接：https://leetcode-cn.com/problems/house-robber
*/


/**
 * @param {number[]} nums
 * @return {number}
 */


// 递归
function tryRob(nums, index) {
    if (index >= nums.length) {
        return 0;
    }
    let res = 0;
    for (let i = index; i < nums.length; i++) {
        // nums[i]  nums[i+2]
        res = Math.max(res, nums[i] + tryRob(nums, i + 2));
    }
    return res;
}

// 递归修改为记忆化搜索
let memo = [];
function tryRob2(nums, index) {
    if (index >= nums.length) {
        return 0;
    }
    if (memo[index] !== -1) {
        return memo[index];
    }
    let res = 0;
    for (let i = index; i < nums.length; i++) {
        res = Math.max(res, nums[i] + tryRob2(nums, i + 2));
    }
    memo[index] = res;
    return res;
}


var rob = function (nums) {
    // 1.递归
    // return tryRob(nums, 0);

    // 2.记忆化搜索
    memo = new Array(nums.length).fill(-1);
    return tryRob2(nums, 0);
};


// 动态规划
var rob = function (nums) {
    if (nums.length === 0) {
        return 0;
    }
    let n = nums.length;
    let memo = new Array(n).fill(-1);

    memo[n - 1] = nums[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        for (let j = i; j < n; j++) {

            memo[i] = Math.max(memo[i], nums[j] + (j + 2 < n ? memo[j + 2] : 0));
            console.log(memo[i]);
        }
    }

    return memo[0];
};


// 第3种解法
var rob = function(nums) {
    let cur = 0, pre = 0, tmp = 0;
    for (let i = 0; i < nums.length; i++) {
        tmp = cur;
        if (pre + nums[i] > cur) {
            cur = pre + nums[i];
        }
        pre = tmp;
    }
    return cur;
};

