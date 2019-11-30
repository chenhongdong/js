/* 
    A代表数组
    x表示查找的元素
*/

function bsearch(A, x) {
    let l = 0;  // 查找范围左边界
    let r = A.length - 1;   // 查找范围右边界
    let guess;  // 猜测位置

    while (l <= r) {
        guess = Math.floor((l + r)/2);
        // 循环不变式
        // guess等于l,r中间位置
        // l:查找范围左 r:查找范围右
        if (A[guess] === x) {
            return guess;
        } else if (A[guess] > x) {
            r = guess - 1;
        } else {
            l = guess + 1;
        }
        // 循环不变式
        // l:新查找范围左 r:新查找范围右
    }
    return -1;
}

const A = [3,5,19,22,25,33,45,47,57,66,71,78];
console.log(bsearch(A, 88));
console.log(bsearch(A, 68));
console.log(bsearch(A, 22));


// 二分查找递归写法 TODO写完后，验证好像有问题呢
function bsearch2(A, p, r, x) {
    const guess = Math.floor((r-p)/2);
    console.log('guess', guess);
    if (p >= r) {return -1}
    if (A[guess] === x) return guess;

    return A[guess] > x ? bsearch2(A, guess + 1, r, x) : bsearch2(A, p, guess - 1, x);
}
const B = [3,5,19,22,25,33,45,47,57,66,71,78];
console.log(bsearch2(B, 0, B.length, 22));