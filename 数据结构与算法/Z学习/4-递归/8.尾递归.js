/* 
    尾递归: 通常是单个递归调用体作为程序的最后返回
    
*/
// 阶乘 - 递归
function fac(n) {
    if (n === 0) return 1;
    // n*n-1*n-2*n-3*1
    return n * fac(n - 1);
}
// 阶乘 - 尾递归
function factorial(n, f = 1) {
    if (n === 0) return f;
    // 1*2*3*4*n
    return factorial(n - 1, f * n);
}


// 斐波那契数列 - 尾递归
function fib(n, a = 1, b = 1) {
    if (n <= 1) return b;
    return fib(n - 1, b, a + b);
}
console.log('fib', fib(6));


// 快速排序 - 尾递归
function qsort(arr, low = 0, high = arr.length) {
    while (low < high) {
        const pos = partition(arr, low, high);
        qsort(arr, low, pos);
        low = pos + 1;
    }
}