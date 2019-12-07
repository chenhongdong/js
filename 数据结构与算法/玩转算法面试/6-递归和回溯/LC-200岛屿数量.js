/* 
给定一个由 '1'（陆地）和 '0'（水）组成的的二维网格，计算岛屿的数量。一个岛被水包围，并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。你可以假设网格的四个边均被水包围。
示例 1:
    输入:
    11110
    11010
    11000
    00000
    输出: 1
示例 2:
    输入:
    11000
    11000
    00100
    00011
    输出: 3

链接：https://leetcode-cn.com/problems/number-of-islands
*/



/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    if (grid.length === 0) {
        return 0;
    }
    let d = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let m = grid.length, n = grid[0].length;
    let used = [];
    for (let i = 0; i < m; i++) {
        used[i] = [];
        for (let j = 0; j < n; j++) {
            used[i][j] = false;
        }
    }

    let num = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1' && !used[i][j]) {
                num++;
                dfs(grid, i, j);    // 深度优先遍历
            }
        }
    }
    return num;

    // 从grid[x][y]的位置开始，进行floodfill
    // 保证(x,y)合法，且grid[x][y]没有被访问过的陆地('1'表示陆地)
    function dfs(grid, x, y) {
        used[x][y] = true;
        for (let i = 0; i < 4; i++) {
            let newx = x + d[i][0];
            let newy = y + d[i][1];

            if (inArea(newx,newy) && !used[newx][newy] && grid[newx][newy] === '1') {
                dfs(grid, newx, newy);
            }
        }
        return;
    }

    // 检查是否越界
    function inArea(x, y) {
        return x >= 0 && x < m && y >= 0 && y < n;
    }
};

console.log(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]));