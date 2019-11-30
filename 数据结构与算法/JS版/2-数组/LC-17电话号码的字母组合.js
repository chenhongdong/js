/* 
    给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
    给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

    输入："23"
    输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
*/
var letterCombinations = function(digits) {
    if (digits.length === 0) return [];
    let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

    if (digits.length < 2) {
        return map[digits].split('');
    }

    let num = digits.split('');
    let code = num.map(item => {
        if (map[item]) {
            return map[item];
        }
    });
    let comb = arr => {
        // 临时存储前两个组合的结果
        let tmp = [];
        // 外层循环遍历第一个元素，内层循环遍历第二个元素
        for (let i = 0; i < arr[0].length; i++) {
            for (let j = 0; j < arr[1].length; j++) {
                tmp.push(arr[0][i] + arr[1][j]);
            }
        }
        arr.splice(0, 2, tmp);

        if (arr.length > 1) {
            comb(arr);
        } else {
            return tmp;
        }

        return arr[0];
    }

    return comb(code);
};

console.log(letterCombinations('3'))