/* 
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
注意：给定 n 是一个正整数。
示例 1：
输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶

链接：https://leetcode-cn.com/problems/climbing-stairs
*/

/* 
                        爬上n阶台阶
                再爬1阶  /       \  再爬2阶
                       /         \
                爬上n-1阶台阶      爬上n-2阶台阶
                  /    \              /     \
                 /      \            /       \
        爬上n-2阶台阶  爬上n-3阶   爬上n-3阶   爬上n-4阶台阶


    动态规划会把大量的重叠子问题给去掉
    记忆化搜索
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let memo = new Array(n+1).fill(-1);
    
   memo[0] = 1;
   memo[1] = 1;

   for (let i = 2; i <= n; i++) {
       memo[i] = memo[i-1] + memo[i-2];
   }

   return memo[n];
};

console.log(climbStairs(10));