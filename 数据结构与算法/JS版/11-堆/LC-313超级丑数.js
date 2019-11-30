/* 
    编写一段程序来查找第 n 个超级丑数。

    超级丑数是指其所有质因数都是长度为 k 的质数列表 primes 中的正整数。

    示例:
        输入: n = 12, primes = [2,7,13,19]
        输出: 32 
        解释: 给定长度为 4 的质数列表 primes = [2,7,13,19]，前 12 个超级丑数序列为：[1,2,4,7,8,13,14,16,19,26,28,32] 。

    思路：
        1.求解任意整数的质因数
        2.质因数是否在指定质因数范围内
        3.是否达到指定个数n
*/


/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {

};


class Ugly {
    constructor(n, primes) {
        this.n = n;
        this.primes = primes;
    }
    getAll() {
        // 超级丑数列表，1本身就是，先放1进去
        let res = [1];
        let i = 2;
        let primes = this.primes;

        while (res.length < this.n) {
            let arr = Ugly.getPrimes(i);
            let k = 0;
            let l = arr.length;
            for (; k < l; k++) {
                if (!primes.find(item => item === arr[k])) {
                    break;
                }
            }
            // k===l有两种边界情况，一种是当前这个数没有质因数；另一种是所有的质因数都在指定列表中
            if (k === l) {
                if (l === 0) {
                    if (primes.find(item => item === i)) {
                        res.push(i);
                    }
                } else {
                    res.push(i);
                }
            }
            i++;
        }
        return res[this.n - 1];
    }
    // 计算指定正整数n的质因数
    static getPrimes(n) {
        let prime = n => {
            // 存储所有的质因数
            let arr = [];
            for (let i = 2; i <= n / 2; i++) {
                if (n % i === 0 && !prime(i).length) {
                    arr.push(i);
                }
            }
            return arr;
        };

        return prime(n);
    }
}

console.time('1')
const n = 12, primes = [2, 7, 13, 19];
const u = new Ugly(n, primes);
console.log(u.getAll());
console.timeEnd('1')