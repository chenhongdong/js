// 1.解法-决策树 递归
function sumN(A, n, m, i = 0, decisions = []) {
    if (m === 0) {
        return decisions;
    }
    if (i === A.length || n === 0 || m < 0) {
        return null;
    }

    return sumN(A, n - 1, m - A[i], i + 1, decisions.concat(A[i]))
        || sumN(A, n, m, i + 1, decisions);
}
console.log(sumN([4,3,1,10,8,30], 2, 31));

// 这个解法性能稍微好些，不过没有1解法写的好
function sum(A, n, m) {
    // 最终结果
    let r = null;
    // 决策
    let decisions = [];

    function inner(i = 0, n, m) {
        if (r) return;

        if (m === 0) {
            r = decisions.slice();
            return;
        }

        if (i === A.length || n === 0 || m < 0) {
            return null;
        }
        decisions.push(A[i]);
        inner(i+1, n-1, m - A[i]);
        decisions.pop(A[i]);
        inner(i+1, n, m);
    }
    inner(0, n, m);
    return r;
}
console.log(sum([4,3,1,10,8,30], 2, 31));
