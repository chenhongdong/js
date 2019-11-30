/* 
    数网格中的路径
    ？小虫子从A到B，只能沿着网格走，每次只能向右或向下。求有多少种走法？
*/

// 普通解法，x,y会被重复计算
function f(x, y) {
    if (x > 0 && y > 0) {
        return f(x-1, y) + f(x, y - 1);
    } else if (x > 0) {
        return f(x - 1, y);
    } else if (y > 0) {
        return f(x, y - 1);
    } else {
        return 1;
    }
}

console.log(f(4, 3));

// 缓存解法, dp缓存x,y
function f2(x, y, dp = []) {
    if (!dp[y]) {
        dp[y] = [];
    }
    if (dp[y][x] !== undefined) {   // 处理缓存，防止x,y重复计算
        return dp[y][x];
    }
    if (x > 0 && y > 0) {
        dp[y][x] = f2(x - 1, y) + f2(x, y - 1);
    } else if (x > 0) {
        dp[y][x] = f2(x - 1, y);
    } else if (y > 0) {
        dp[y][x] = f2(x, y - 1);
    } else {
        dp[y][x] = 1;
    }

    return dp[y][x];
}

console.log(f2(4, 3));


// 动态规划
function f3(w, h) {
    const dp = [];
    for (let y = 0; y <= h; y++) {
        dp[y] = [];
        for (let x = 0; x <= w; x++) {
            if (x === 0 && y === 0) {
                dp[y][x] = 1;
            } else if (x === 0) {
                dp[y][x] = dp[y-1][x];
            } else if (y === 0) {
                dp[y][x] = dp[y][x-1];
            } else {
                dp[y][x] = dp[y][x-1] + dp[y-1][x];
            }
        }
    }
    return dp[h][w];
}
console.log(f3(4, 3));