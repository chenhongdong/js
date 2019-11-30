/* 
    编写一个算法来判断一个数是不是“快乐数”。
    一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到 1。如果可以变为 1，那么这个数就是快乐数。

    示例: 
        输入: 19
        输出: true
        解释: 
        1^2 + 9^2 = 82
        8^2 + 2^2 = 68
        6^2 + 8^2 = 100
        1^2 + 0^2 + 0^2 = 1
*/



/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if (n === 1 || n === 0) {
        return true;
    }
    n = n < 10 ? '0' + n : '' + n;
    let map = new Map();
    let res = 0;
    let calc = (n) => {
        let s = n + '';
        // res这里计算有问题
        // let res = s.split('').reduce((prev, next) => {
        //     return Math.pow(prev, 2) + Math.pow(next, 2);
        // }, 0) + '';


        console.log('res', res)
        if (map.has(res)) {
            map.set(res, map.get(res) + 1);
            return;
        } else {
            map.set(res, 1);
        }
        if (res === '1') {
            return;
        }
        calc(res);
    }

    calc(n)
    return map.has('1');
};



// 参考答案
// 利用快慢指针
// var isHappy = function(n) {
//     function total (n) {
//         let sum = 0;
//         while (n > 0) {
//             let num = n % 10;
//             sum += num * num;
//             n = Math.floor(n / 10);
//         }
//         return sum;
//     }
//     let slow = n, fast = n;
    
//     console.log(slow, fast);

//     do {
//         slow = total(slow);
//         fast = total(fast);
//         fast = total(fast);     // 快指针比慢指针多走一步
//     } while (slow !== fast);

//     console.log('new',slow, fast)
//     return slow === 1;
// };
console.log(isHappy(19));

/* 
    78
    7^2+8^2 = 49+64=113
    1^2+1+3^2=11

*/