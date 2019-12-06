/* 
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
示例:
输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

链接：https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
*/


/**
 * @param {string} digits
 * @return {string[]}
 */
// 结果数组
let res = [];
// 数字按键对应字母
let numbers = [' ', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

function letterFn (digits, index, str) {
    console.log(`digits: ${index} : ${str}`)
    if (index === digits.length) {
        res.push(str);
        return;
    }
    let s = digits[index];
    let letters = numbers[s];

    for (let i = 0; i < letters.length; i++) {
        console.log(`digits<<<: ${index} : ${letters[i]}`)
        letterFn(digits, index + 1, str + letters[i]);
    }
    return;
}

var letterCombinations = function(digits) {
    if (digits === '') {
        return res;
    }
    letterFn(digits, 0, '');
    return res;
};

console.log(letterCombinations(''));