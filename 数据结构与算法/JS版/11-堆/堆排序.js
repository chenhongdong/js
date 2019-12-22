class Heap {
    constructor(data) {
        this.data = data;
    }
    sort() {
        let arr = this.data;
        let len = arr.length;

        if (len <= 1) {
            return arr;
        } else {
            // 从最后一个父节点索引开始(就是长度除以2)
            for (let i = Math.floor(len / 2); i >= 0; i--) {
                Heap.maxHeapify(arr, i, len);
            }
            for (let j = 0; j < len; j++) {
                Heap.swap(arr, 0, len - 1 - j);
                Heap.maxHeapify(arr, 0, len - 1 - j - 1);
            }
            return arr;
        }
    }

    static swap(arr, i, j) {
        if (i === j) return '';
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    // 构建最大堆
    static maxHeapify(arr, i, size) {
        // 左右节点(索引)
        let left = 2 * i + 1,
            right = 2 * i + 2,
            largest = i;
        // 父节点i和左节点left做比较，取最大值
        if (left <= size && arr[left] > arr[largest]) {
            largest = left;
        }
        // 右节点right和最大值比较，更新最大值
        if (right <= size && arr[right] > arr[largest]) {
            largest = right;
        }

        if (largest !== i) {
            Heap.swap(arr, i, largest);
            Heap.maxHeapify(arr, largest, size);
        }
    }
}


const arr = [10,2,8,88,33,47,50,100];
const heap = new Heap(arr);
console.log(heap.sort())