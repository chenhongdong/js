// 优化合并排序


function merge_sort(A) {
    for (let i = 1; i < A.length; i++) {
        const step = i * 2;
        for (let start = 0; start < A.length; start += step) {
            const end = Math.min(start + step, A.length);
            if (end - start > 1) {
                const mid = start + i;
                merge(A, start, mid, end);
            }
        }
    }
}


function merge_sort(A) {
    const p2 = floor_power_of2(A.length);
    const scale = A.length / p2;

    for (let i = 1; i < p2; i += i) {
        for (let j = 0; j < p2; j += i * 2) {
            const start = Math.floor(j * scale);
            const mid = Math.floor((j + i) * scale);
            const end = Math.floor((j + i * 2) * scale);
            merge(A, start, mid, end);
        }
    }
}


