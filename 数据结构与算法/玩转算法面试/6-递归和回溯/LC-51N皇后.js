/* 
n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
上图为 8 皇后问题的一种解法。
给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。
每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
示例:
输入: 4
输出: [
 [".Q..",  // 解法 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // 解法 2
  "Q...",
  "...Q",
  ".Q.."]
]
解释: 4 皇后问题存在两个不同的解法。

链接：https://leetcode-cn.com/problems/n-queens
*/


/**
 * @param {number} n
 * @return {string[][]}
 */
// 结果数组
let res = [];
let col = [];   // 列
let dia1 = [];  // 对角线
let dia2 = [];  // 对角线

var solveNQueens = function (n) {
    if (n === 0) {
        return [[]];
    }
    col = new Array(n).fill(false);
    dia1 = new Array(2 * n - 1).fill(false);
    dia2 = new Array(2 * n - 1).fill(false);

    putQueen(n, 0, []);

    // return res;
};
// index处理行数
// row每一行放在第几列
// 尝试在一个n皇后问题中，摆放第index行的皇后位置
function putQueen(n, index, row) {
    // 终止条件，index等于n的时候，就得到了n皇后的解了
    if (index === n) {
        res.push(chessBoard(n, row));
        return;
    }

    for (let i = 0; i < n; i++) {
        // 尝试将第index行的皇后摆放在第i列
        if (!col[i] && !dia1[index + i] && !dia2[index - i + n - 1]) {
            row.push(i);
            col[i] = true;
            dia1[index + i] = true;
            dia2[index - i + n - 1] = true;
            putQueen(n, index + 1, row);
            // putQueen执行完后，要进行回溯,不再把index行的皇后放在第i列了
            row.pop();
            col[i] = false;
            dia1[index + i] = false;
            dia2[index - i + n - 1] = false;
        }
    }
    return;
}

// 棋盘数组
function chessBoard(n, row) {
    let board = new Array(n);
    let str = '';
    for (let i = 0; i < n; i++) {
        str += '.';
    }
    console.log(board)
    for (let i = 0; i < n; i++) {
        board[i] = str;
        let inner = board[i].split('');
        inner[row[i]] = 'Q';
        board[i] = inner.join('');
    }
    console.log('new',board)

    return board;
}


console.log(solveNQueens(4));