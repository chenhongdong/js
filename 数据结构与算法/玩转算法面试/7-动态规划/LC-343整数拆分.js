/* 
给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。
示例 1:
    输入: 2
    输出: 1
    解释: 2 = 1 + 1, 1 × 1 = 1。
示例 2:
    输入: 10
    输出: 36
    解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。

链接：https://leetcode-cn.com/problems/integer-break
*/

/* 
                        分割4获得最大乘积
                    1+? /      | 2+?  \  3+?
                     分割3    分割2    分割1


    最优子结构： 通过求子问题的最优解，可以获得原问题的最优解
*/

/**
 * @param {number} n
 * @return {number}
 */

// 递归实现
function breakInterger(n) {
    if (n === 1) {
        return 1;
    }
    let max = -1;
    for (let i = 1; i <= n - 1; i++) {
        // i * (n - i)
        max = Math.max(max, i * (n - i), i * breakInterger(n - i));
    }
    return max;
}

// 记忆化搜索
let memo = [];
function breakInterger(n) {
    if (n === 1) {
        return 1;
    }
    if (memo[n] !== -1) {
        return memo[n];
    }
    let max = -1;
    for (let i = 1; i <= n - 1; i++) {
        max = Math.max(max, i * (n - i), i * breakInterger(n - i));
    }
    memo[n] = max;
    return max;
}

var integerBreak = function (n) {
    memo = new Array(n + 1).fill(-1);
    return breakInterger(n);
};

// 动态规划
var integerBreak2 = function (n) {
    // memo[i]表示将数字i分割(至少分割成两部分)后得到的最大乘积
    let memo = new Array(n + 1).fill(-1);

    memo[1] = 1;
    for (let i = 2; i <= n; i++) {
        // 求解memo[i]
        for (let j = 1; j <= i - 1; j++) {
            // j + (i-j)
            memo[i] = Math.max(memo[i], j * (i - j), j * memo[i - j]);
        }
    }

    return memo[n];
};

console.log(integerBreak2(18))