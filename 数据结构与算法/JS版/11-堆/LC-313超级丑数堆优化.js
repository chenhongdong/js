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
    let ugly = new Ugly(n, primes);
    return ugly.getAll();
};


class Ugly {
    constructor(n, primes) {
        this.n = n;
        this.primes = new Heap(primes);
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
                if (!primes.find(arr[k])) {
                    break;
                }
            }
            // k===l有两种边界情况，一种是当前这个数没有质因数；另一种是所有的质因数都在指定列表中
            if (k === l) {
                if (l === 0) {
                    if (primes.find(i)) {
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

class Heap {
    constructor(data) {
        this.data = data;
        this.max = data.length;
        this.sort();
    }
    sort() {
        let arr = this.data;
        let len = arr.length;

        if (len <= 1) {
            return arr;
        } else {
            // 从最后一个父节点索引开始(就是长度除以2)
            for (let i = Math.floor(len / 2); i >= 0; i--) {
                Heap.maxHeapify(arr, i, len);
            }
            return arr;
        }
    }
    // 查找
    find(val, i = 0) {
        let arr = this.data;
        if (val > arr[i] || i > this.max) { // 边界条件
            return false;
        } else if (val === arr[i]) {
            return val;
        } else {
            // 继续去左子树(2n+1)和右子树(2n+2)找
            return this.find(val, 2 * i + 1) || this.find(val, 2 * i + 2);
        }
    }

    static swap(arr, i, j) {
        if (i === j) return '';
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    // 构建最大堆
    static maxHeapify(arr, i, size) {
        // 左右节点(索引)
        let left = 2 * i + 1,
            right = 2 * i + 2,
            largest = i;
        // 父节点i和左节点left做比较，取最大值
        if (left <= size && arr[left] > arr[largest]) {
            largest = left;
        }
        // 右节点right和最大值比较，更新最大值
        if (right <= size && arr[right] > arr[largest]) {
            largest = right;
        }

        if (largest !== i) {
            Heap.swap(arr, i, largest);
            Heap.maxHeapify(arr, largest, size);
        }
    }
}

console.time('heap')
const n = 12, primes = [2, 7, 13, 19];
// const u = new Ugly(n, primes);
console.log(nthSuperUglyNumber(n, primes));
// console.log(u.getAll());
console.timeEnd('heap')