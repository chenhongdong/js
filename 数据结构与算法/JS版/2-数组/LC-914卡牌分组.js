/* 
    给定一副牌，每张牌上都写着一个整数。

    此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：

    每组都有 X 张牌。
    组内所有的牌上都写着相同的整数。
    仅当你可选的 X >= 2 时返回 true。
*/
/**
 * @param {number[]} arr
 * @return {boolean}
 */
/* var hasGroupsSizeX = function(arr) {
    if (arr.length < 2) return false;

    arr.sort((a, b) => a - b);
    let min = Number.MAX_SAFE_INTEGER;
    let res = [];
    let flag = true;
    for (let i = 0, len = arr.length, tmp = []; i < len; i++) {
        tmp.push(arr[i]);
        for (let j = i + 1; j < len - 1; j++) {
            if (arr[i] === arr[j]) {
                tmp.push(arr[j]);
            } else {
                if (min > tmp.length) {
                    min = tmp.length;
                }
                res.push([].concat(tmp));
                tmp.length = 0;
                i = j;
                break;
            }
        }
    }
    console.log('res', res);
    console.log('min', min);
    res.every(item => {
        if (item.length % min !== 0) {
            flag = false;
            return false;
        }
    });
    return flag;
}; */


var hasGroupsSizeX = function(arr) {
    let res = new Array(arr.length).fill(0);
    for (let i = 0; i < arr.length; i++) {
        res[arr[i]]++;
    }
    console.log(res);
    let x = res[arr[0]];
    for (let i = 0; i < arr.length; i++) {
        if (res[i] !== 0) {
            x = is(x, res[i]);
        }
    }

    return x >= 2;
};

function is(a, b) {
    while( a % b !== 0) {
        let tmp = a % b;
        a = b;
        b = tmp;
    }
    return b;
}
// let arr = [0,0,0,0,0,1,1,2,3,4];
let arr = [1,1,2,2,2,2];
let flag = hasGroupsSizeX(arr);
console.log(flag);