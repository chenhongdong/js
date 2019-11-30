/* 
    快速排序       类似合并排序  
        相同点（分治策略）
          1.都会先拆解问题
          2.然后分别处理
          3.平均执行时间O(nlgn)
        不同点
          1.快速排序空间复杂度是O(1)
          2.快速排序常数时间更少
          3.合并排序更适合并发环境
*/
function swap(A, i, j) {
	let tmp = A[i];
	A[i] = A[j];
	A[j] = tmp;
}

function partition(A, lo, hi) {
	const pivot = A[hi - 1];	// 中心点
	let i = lo, j = hi - 1;
	// 小于中心点范围：[lo, i)
	// 未确认范围：[i, j)
	// 大于中心点范围：[j, hi - 1)
	while (i !== j) {
		A[i] <= pivot ? i++ : swap(A, i, --j);
	}
	swap(A, j, hi - 1);	// 把中心点也进行交换
	return j;
}

function qsort(A, lo = 0, hi = A.length) {
	if (hi - lo <= 1) return;
	const p = partition(A, lo, hi);
	qsort(A, lo, p);
	qsort(A, p + 1, hi);
}

/* 
	如何优化快速排序
		让拆分更加平均
		- 随机打乱原数组O(n)
		- 使用中位数做中点O(n)累计
		- 找3个数，取中间数O(1)累计
*/

const arr = [10, 80, 30, 90, 40, 50, 70];
qsort(arr)
console.log(arr);