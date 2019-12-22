/*
    给定一个仅包含 0 和 1 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。

    示例:
        输入:
        [
            ["1","0","1","0","0"],
            ["1","0","1","1","1"],
            ["1","1","1","1","1"],
            ["1","0","0","1","0"]
        ]
        输出: 6 
*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (arr) {
    let result = [];
    let reg = /1{2,}/g;
    arr = arr.map(item => {
        let str = item.join('');
        let r = reg.exec(str);  // exec找到一个匹配的之后就不再找了，所以说11111虽然匹配，但是也返回了null
        let res = [];
        while (r) {
            res.push([r.index, r.index + r[0].length - 1]);
            r = reg.exec(str);
        }
        return res;
    });

    let maxRect = (arr, result, n = 1) => {
        let top = arr.pop();    // 第一行
        let next = arr.pop();
        let tt, nn, start, end, width = 1, maxWidth = 1;

        n++;

        for (let i = 0; i < top.length; i++) {
            tt = top[i];
            for (let j = 0; j < next.length; j++) {
                nn = next[j];
                width = Math.min(tt[1], nn[1]) - Math.max(tt[0], tt[0]);
                if (width > maxWidth) {
                    maxWidth = width;
                    start = Math.max(tt[0], nn[0]);
                    end = Math.min(tt[1], nn[1]);
                }
            }
        }

        if (!start || !end) {
            if (n < 3) {
                return false;
            } else {
                width = top[0][1] - top[0][0] + 1;
                if (width > 1) {
                    result.push((n - 1) * width);
                }
            }
        } else {
            arr.push([[start, end]]);
            maxRect(arr, result, n++);
        }

        while(arr.length > 1) {
            maxRect([].concat(arr), result);
            arr.pop();
        }

        // 取最大值
        let max = 0;
        let item = result.pop();
        while (item) {
            if (item > max) {
                max = item;
            }
            item = result.pop();
        }

        return max > 0 ? max : -1;
    };
};

let matrix = [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
];

console.log(maximalRectangle(matrix));