// 斐波那契数列 O(2^n)
// 动态规划实现   O(n)
function fib(n) {
    let a = 1, b = 1;
    for (let i = 2; i < n; i++) {
        [b, a] = [a + b, b];
    }
    return b;
}

console.log(fib(4));


// 爬楼梯问题  上台阶数是2^(n-1)
function steps(n) {
    const step = [1, 1];
    for (let i = 2; i <= n; i++) {
        step[i] = step.reduce((a, b) => a + b, 1);
    }
    console.log(step)
    return step.pop();
}

console.log(steps(3));