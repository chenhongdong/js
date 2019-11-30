/* 
    给定一个字符串s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。
    重复出现的子串要计算它们出现的次数。

    输入: "00110011"
    输出: 6
    解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。

    输入: "10101"
    输出: 4
    解释: 有4个子串：“10”，“01”，“10”，“01”，它们具有相同数量的连续1和0。
*/

/* var countBinarySubstrings = function (s) {
    let res = []
    // 给定任意子输入都返回第一个符合条件的子串
    let match = (s) => {
        let j = s.match(/^(0+|1+)/)[0];
        console.log('j', j, j.length, 'j[0]', j[0]);
        let o = (j[0] ^ 1).toString().repeat(j.length);         // 向右右移一位
        console.log('o', (j[0] ^ 1).toString(), typeof o);
        let reg = new RegExp(`^(${j}${o})`);
        console.log('reg', reg);
        if (reg.test(s)) {
            console.log(RegExp.$1);
            return RegExp.$1;
        } else {
            return '';
        }
    }
    // 通过for循环控制程序运行的流程
    for (let i = 0, len = s.length - 1; i < len; i++) {
        let sub = match(s.slice(i));
        if (sub) {
            res.push(sub)
        }
    }
    return res.length;
}; */

var countBinarySubstrings = function(s) {
    let res = [];
    let num = 0;
    res[0] = 1;
    for (let i = 1; i < s.length; i++) {
        if (s.charAt(i - 1) !== s.charAt(i)) {
            res[++num] = 1;
        } else {
            res[num]++;
        }
    }
    console.log('num', num);
    let count = 0;
    for (let i = 1; i <= num; i++) {
        count += Math.min(res[i - 1], res[i]);
    }
    return count;
};


let s = "00110011";
// let s = "10101";
let len = countBinarySubstrings(s);
console.log('len', len);
