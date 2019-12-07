/* 
给定一个二维网格和一个单词，找出该单词是否存在于网格中。
单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
示例:
board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
给定 word = "ABCCED", 返回 true.
给定 word = "SEE", 返回 true.
给定 word = "ABCB", 返回 false.

链接：https://leetcode-cn.com/problems/word-search
*/


/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    // 四个方向的二维数组，顺时针
    let d = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    let m = board.length, n = board[0].length;   // 记录行与列
    let used = [];      // m * n的数组，内容都为false

    for (let i = 0; i < m; i++) {
        used[i] = [];
        for (let j = 0; j < n; j++) {
            used[i][j] = false;
        }
    }
  
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (searchWord(board, word, 0, i, j)) {
                return true;
            }
        }
    }
    // 没有找到
    return false;


    // 从board[startx][starty]开始，寻找word[index...word.length]
    function searchWord(board, word, index, startx, starty) {
        // 要找的内容就是字符串的最后一个字符
        if (index === word.length - 1) {
            return board[startx][starty] === word[index];
        }

        if (board[startx][starty] === word[index]) {
            used[startx][starty] = true;
            // 从startx,starty出发，向4个方向寻找
            for (let i = 0; i < 4; i++) {
                let newx = startx + d[i][0];
                let newy = starty + d[i][1];

                if (inArea(newx, newy) && !used[newx][newy]) {
                    if (searchWord(board, word, index + 1, newx, newy)) {
                        return true;
                    }
                }
            }
            used[startx][starty] = false;   // 向4个方向寻找，如果都没有找到就放弃这个位置重新置为false
        }
        return false;
    }
    // 在二维数组里，保证不越界
    function inArea(x, y) {
        return x >= 0 && x < m && y >= 0 && y < n;
    }
};



let board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
], word = 'ABCCED';



var exist = function (board, word) {
    if (board.length === 0) {
        return false;
    }
    // 定义四方向的二维数组,顺时针
    let d = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    // 定义行和列
    let m = board.length, n = board[0].length;
    let used = [];  // 定义个m * n的二维数组，用来记录是否访问过该位置
    for (let i = 0; i < m; i++) {
        used[i] = [];
        for (let j = 0; j < n; j++) {
            used[i][j] = false;
        }
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (search(board, word, 0, i, j)) { // 找到对应的单词返回true
                return true;
            }
        }
    }

    return false;

    // search递归函数
    function search(board, word, index, startX, startY) {
        // 递归终止条件,index正好是单词的长度了
        if (index === word.length - 1) {
            return board[startX][startY] === word[index];
        }
        // 如word[0]是A,board[0][0]也是A
        if (board[startX][startY] === word[index]) {
            used[startX][startY] = true;    // 表示访问过该位置了
            // 顺时针方向再去寻找下一个匹配的字符
            for (let i = 0; i < 4; i++) {
                let newX = startX + d[i][0];
                let newY = startY + d[i][1];
                // 首先保证新的位置是不越界的，然后还得保证没有访问过新的位置
                if (inArea(newX,newY) && !used[newX][newY]) {
                    if (search(board, word, index + 1, newX, newY)) {
                        return true;
                    }
                }
            }

            // 如果没有寻找到匹配的就把该位置重新置为false，放弃该位置
            used[startX][startY] = false;
        }

        return false;
    }

    // 检查是否越界
    function inArea(x, y) {
        return x >= 0 && x < m && y >= 0 && y < n;
    }
};

console.log(exist([["C","A","A"],["A","A","A"],["B","C","D"]], 'AAB'));
