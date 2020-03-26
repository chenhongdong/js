/* 
给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。
示例 1:
    输入: n = 12
    输出: 3 
    解释: 12 = 4 + 4 + 4.
示例 2:
    输入: n = 13
    输出: 2
    解释: 13 = 4 + 9.

链接：https://leetcode-cn.com/problems/perfect-squares


可以理解为这是求无权图的最短路径问题
*/

/**
 * @param {number} n
 * @return {number}
 */

function Pair(num, dis) {
    this.num = num;
    this.dis = dis;
}

var numSquares = function (n) {
    let q = [];
    q.push(new Pair(n, 0));
    let visited = new Array(n + 1).fill(false);
    visited[n] = true;

    while (q.length) {
        let { num, dis } = q.shift();

        for (let i = 1; ; i++) {
            let distance = num - i * i;
            if (distance < 0) {
                break;
            }
            if (distance === 0) {
                return dis + 1;
            }
            if (!visited[distance]) {
                q.push(new Pair(distance, dis + 1));
                visited[distance] = true;
            }
        }
    }
};

console.log(numSquares(13))