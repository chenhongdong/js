/* 
    bubble_sort(A)
    A: 需要排序的数组
    返回: 无
*/
function swap(A, i, j) {
    const t = A[i];
    A[i] = A[j];
    A[j] = t;
}
function bubble_sort(A) {
    for (let i = A.length - 1; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            A[j-1] > A[j] && swap(A, j-1, j);
        }
    }
}

const A = [2,1,5,3,9,8,7,10];
bubble_sort(A);
console.log(A);
