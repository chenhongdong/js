/* 
    一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
    机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
    现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

    
    状态转移方程：  F(m*n) = F(m-1*n) + F(m*n-1)
*/


/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (arr) {
    let m = arr.length,
        n = arr[0].length;
    
    arr[0][0] = arr[0][0] === 1 ? 0 : 1;

    console.log(arr);
    // 遍历第一行
    for (let i = 1; i < n; i++) {
        arr[0][i] = arr[0][i] === 1 ? 0 : arr[0][i-1];
    }
    // 遍历第一列
    for (let i = 1; i < m; i++) {
        arr[i][0] = arr[i][0] === 1 ? 0 : arr[i-1][0];
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (arr[i][j] === 0) {
                arr[i][j] = arr[i-1][j] + arr[i][j-1];
            } else {
                arr[i][j] = 0;
            }
        }
    }

    return arr[m-1][n-1];
};

let res = [
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0]
];

console.log(uniquePathsWithObstacles([
    [0,0,0],
    [0,1,0],
    [0,0,0]
  ]));

let arr = [
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0]
];

var uniquePathsWithObstacles2 = function (arr) {
    let m = arr.length,
        n = arr[0].length;

    let dp = (m, n) => {
        /* 
            m=2,n=2边界条件
            [
                [0, 0]
                [1, 0]
            ]

            单行或单列
            [
                [0, 0]
            ]
            [
                [0],
                [0]
            ]

            状态转移方程
            F(m,n) = F(m-1,n) + F(m, n-1)
        */
        if (m === 2 && n === 2) {
            return (arr[0][0] === 1 || arr[1][1] === 1 || arr[0][1] + arr[1][0] === 2) ? 0 : (arr[1][0] === 1 || arr[0][1] === 1) ? 1 : 2;
        } else if (m < 2 || n < 2) {
            if (m < 2) {
                return arr[m - 1].includes(1) ? 0 : 1;
            } else {
                for (let i = 0; i < m; i++) {
                    if (arr[i][0] === 1) {
                        return 0;
                    }
                }
                return 1;
            }
        } else {
            return dp(m - 1, n) + dp(m, n - 1);
        }
    };

    return dp(m, n);
};