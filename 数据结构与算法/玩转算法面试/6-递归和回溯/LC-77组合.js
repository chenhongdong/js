/* 
给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
示例:
输入: n = 4, k = 2
输出:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]

链接：https://leetcode-cn.com/problems/combinations
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = [];
    if (n < 0 || k < 0 || k > n) {
        return res;
    }
    findCombine(n, k, 1, []);
    return res;

    // 求解C(n,k)，当前已经找到的组合存储在arr中，需要从start开始搜索新的元素
    function findCombine(n, k, start, arr) {
        if (arr.length === k) {
            res.push([...arr]);
            return;
        }
        // 剪枝
        // 还有(k - arr.length)个空位，所以[i...n]中至少要有(k - arr.length)个元素
        // i最多为 n - (k - arr.length) + 1
        for (let i = start; i <= n - (k - arr.length) + 1; i++) {
            arr.push(i);
            findCombine(n, k, i + 1, arr);
            arr.pop();
        }
        return;
    }
};

console.log(combine(4,2));