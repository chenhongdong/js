/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
    let result = code(n);
    result = result.map(item => parseInt(item, 2));
    return result;
};

// 递归，用来算输入为n的格雷编码序列
function code(n) {
    if (n === 0) {
        return [0];
    }

    if (n === 1) {
        return [0, 1];
    } else {
        let prev = code(n - 1);
        let max = Math.pow(2, n) - 1;
        let res = [];
        for (let i = 0; i < prev.length; i++) {
            res[i] = `0${prev[i]}`;
            res[max - i] = `1${prev[i]}`;
        }

        return res;
    }
}

// 这个方法性能更快
var grayCode = function(n){
    let res = [];
    for (let i = 0; i < Math.pow(2, n); i++) {
        res[i] = i ^ (i / 2);
    }
    return res;
}

console.log(grayCode(4));