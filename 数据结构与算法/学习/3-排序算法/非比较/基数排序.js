/* 
    基数排序
    - 非比较型排序算法（需要知道具体数字是多少）
    - 按照相同位有效数字的值分组排序整数（从最后一位开始比较，从右向左的进行位比较）
        - 比较位值相同，维持当前顺序
        - 比较位值不同，排序
    - Time ~ O(wn)  w代表有效数字的个数，n是整个数组的规模
    - Space ~ O(w+n)
*/
/* 
    抽象
    function radix_sort(A) {
        for (let i = 1; i <= A中数字的位数; i++) {
            根据左边数第i位有效数字排序A
        }
    }
*/


function radix_sort(A) {
    const max = Math.max(...A);     // 最大值的位数代表着最外层循环的次数
    const buckets = Array.from({length: 10}, () => []);     // 定义10个元素的桶
    // 有效数位
    let m = 1;
    while (m < max) {
        // 将数放入桶中
        A.forEach(num => {
            const digit = ~~((num % (m * 10)) / m);
            buckets[digit].push(num);
        });
        // 从桶中取出元素
        let j = 0;
        buckets.forEach(bucket => {
            while(bucket.length > 0) {
                A[j++] = bucket.shift();    // 相同位的先进先出shift，341,745，先shift取出341
            }
        });
        // 下一个位置
        m *= 10;    // m有效位是乘10的进位
    }
}

// const A = [10,200,13,11,7,87,99,23];
const A = [10,200,4,15,23,8];
radix_sort(A)
console.log(A);