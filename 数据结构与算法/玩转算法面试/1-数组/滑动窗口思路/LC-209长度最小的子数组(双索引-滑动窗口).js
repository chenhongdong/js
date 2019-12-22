/* 
    给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组。如果不存在符合条件的连续子数组，返回 0。

    示例: 
        输入: s = 7, nums = [2,3,1,2,4,3]
        输出: 2
        解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。


    什么叫子数组？
        [0,1,2,3,4,5,6,7,8,9]
        [1,3,6]就算
    连续子数组  [1,2,3]

*/


// 时间复杂度： O(n)
// 空间复杂度： O(1)
var minSubArrayLen = function(s, nums) {
    let l = 0, r = -1;   // nums[l...r]为我们的滑动窗口
    let sum = 0;
    let res = nums.length + 1;  // 记录寻找到的连续子数组的最小的长度，初始化一个最大值

    while (l < nums.length) {
        if (sum < s && r + 1 < nums.length) {   // r+1<nums.length处理边界
            r++;
            sum += nums[r];
        } else {
            sum -= nums[l++];
        }

        if (sum >= s) {
            res = Math.min(res, r - l + 1);
        }
    }
    // 没有解的情况
    if (res === nums.length + 1) {
        return 0;
    }

    return res;
};
let s = 7, nums = [2,3,1,2,4,3];
console.log(minSubArrayLen(s, nums))