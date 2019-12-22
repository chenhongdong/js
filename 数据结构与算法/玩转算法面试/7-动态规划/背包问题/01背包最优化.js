var knapsack01 = function (w, v, C) {
    let n = w.length;

    if (n === 0 || C === 0) {
        return 0;
    }

    let memo = new Array(C + 1).fill(-1);

    for (let j = 0; j <= C; j++) {
        memo[j] = j >= w[0] ? v[0] : 0;
    }

    for (let i = 1; i < n; i++) {
        for (let j = C; j >= w[i]; j--) {
            memo[j] = Math.max(memo[j], v[i] + memo[j-w[i]]);
        }
    }

    return memo[C];
}