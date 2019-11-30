/* 

*/
// 求数字n的阶乘
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// 汉诺塔
function moveTower(n, from, to, use) {
    if (n === 1) {      // 递归的初始条件
        moveDisk(from, to);
        return;
    }   
    // n > 1 递归条件
    moveTower(n - 1, from, use, to);
    moveDisk(from, to);
    moveTower(n - 1, use, to, from);
}