/* 
    桶排序
    - 非比较排序
    - 排序键为数字的集合
    - 计数排序是一种特殊的桶排序
    桶的数量 = 数组中元素最大值+1

    时间复杂度
    - 最好情况 Ω(n + k)
    - 最坏情况 O(n^2)
    - 平均情况 θ(n + k)
    
    空间复杂度
    - 最坏情况 O(n + k)
*/

function bucket_sort(A, k, s) {
    const buckets = Array.from({ length: k }, () => []);
    // 放入桶中
    for (let i = 0; i < A.length; i++) {
        const index = ~~(A[i] / s);
        buckets[index].push(A[i]);
    }
    // 排序每只桶
    for (let i = 0; i < buckets.length; i++) {
        insertion_sort(buckets[i]);
    }
    // 取出数据
    return [].concat(...buckets);
}

function insertion_sort(A) {
    for (let i = 1; i < A.length; i++) {
        let p = i - 1;
        const x = A[p+1];
        while (p >= 0 && A[p] > x) {
            A[p + 1] = A[p];
            p--;
        }
        A[p + 1] = x;
    }
}

/* function insert(A, i, x) {
    let p = i - 1;
    while (p >= 0 && A[p] > x) {
        A[p+1] = A[p];
        p--;
    }
    A[p+1] = x;
}
function insertion_sort(A) {
    for (let i = 1; i < A.length; i++) {
        insert(A, i, A[i]);
    }
} */

const arr = [29, 25, 3, 49, 9, 37, 21, 43];
console.log(bucket_sort(arr, 5, 10));

