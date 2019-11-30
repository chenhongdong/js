/* 
    关键问题： 合并两个有序数组
    [3,27,38,43] | [9,10,82]
        [0-4)        [4-7)
    p: 左半边开始,p=0   q: 左半边结束,右半边开始,q=4
    r: 右半边结束,r=7

        抽象
    function merge(A, p, q, r)
    A: 数组
    p: 左半边开始位置
    q: 左半边结束，右半边开始位置
    r: 右半边结束
*/

// 方法1   对p-r的元素执行插入排序      O((r-p)^2)    O(n^2)

// 方法2   对p-r的元素执行Array.sort    O((r-p)lg(r-p))     O(nlgn)

// 方法3    
/* 
    拆分 O(n)       
    合并 O(nlgn)    
        Time~O(nlgn)
    
    拆分 O(1)   拆分的时候都是在原数组上，所以没有占空间
    合并 O(n)
        Space~O(n)
*/
function merge(A, p, q, r) {
    let A1 = A.slice(p, q); // 存放左半边的临时数组
    let A2 = A.slice(q, r); // 存放右半边的临时数组
    // 追加哨兵
    A1.push(Number.MAX_SAFE_INTEGER);
    A2.push(Number.MAX_SAFE_INTEGER);

    for (let k = p, i = 0, j = 0; k < r; k++) {
        // 循环不变式
        // k: 下一个写入位置
        // i: A1中回写位置
        // j: A2中回写位置
        A[k] = A1[i] < A2[j] ? A1[i++] : A2[j++];
    }
}

const A = [1, 3, 5, 2, 4, 6];
const B = [2, 4, 6, 1, 3, 5];
const C = [2, 1];
merge(A, 0, 3, 6);
merge(B, 1, 3, 5);
merge(C, 0, 1, 2);
console.log(A);
console.log(B);
console.log(C);

/* 
    归并排序执行过程
    1.将原数组不断拆分，直到长度为1
    2.不断将已排序数据合并到再次合并成原数组
*/
function merge_sort(A, p, r) {
    if (r - p < 2) return;
    const q = Math.ceil((p + r) / 2);
    merge_sort(A, p, q);
    merge_sort(A, q, r);
    merge(A, p, q, r);
}

const D = [9, 8, 1, 7, 98, 66, 11, 101, 100];
merge_sort(D, 0, D.length);
console.log('D', D);