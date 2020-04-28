/*  
    全排列
    abc的全排列
    abc acb bac bca cba cab    3!阶乘 6种

    全排列n个元素
    - 分别将第n,n-1,n-2,...,1个元素交换到最后一个位置
    - 然后分别全排列前n-1个元素
*/
function permutation(A, k) {
    if (k === 1) {
        return [...A];
    }
    for (let i = A.length - 1; i >= 0; i--) {
        swap(A, i, k - 1);
        permutation(A, k - 1);
        swap(A, i, k - 1);
    }
}

function swap(A, i, j) {
    let tmp = A[i];
    A[i] = A[j];
    A[j] = tmp;
}

let s = ['a', 'b', 'c'];
permutation(s, 3);
console.log('s', s);
