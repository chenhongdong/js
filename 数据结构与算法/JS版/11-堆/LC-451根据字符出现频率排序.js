/* 
    给定一个字符串，请将字符串里的字符按照出现的频率降序排列。

    输入:
        "cccaaa"
    输出:
        "cccaaa"
    解释:
        'c'和'a'都出现三次。此外，"aaaccc"也是有效的答案。
        注意"cacaca"是不正确的，因为相同的字母必须放在一起。
*/

/* 
    利用堆排序
*/

class Heap {
    constructor(str) {
        let map = new Map();
        str.split('').forEach(item => {
            if (map.has(item)) {
                map.set(item, map.get(item) + 1);
            } else {
                map.set(item, 1);
            }
        });
        this.map = map;
        this.data = Array.from(map.values());   // Array.from转成数组
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

    toString() {
        let arr = this.sort();
        let res = [];
        while (arr.length) {
            let top = arr.pop();
            for (let [key,val] of this.map) {
                if (val === top) {
                    res.push(key.repeat(val));  // e.repeat(2)  ->  ee
                    this.map.delete(key);
                    break;
                }
            }
        }
        return res.join('');
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

const heap = new Heap('cccaaabbobb');
console.log(heap.toString());

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = new Map();
    let arr = [];
    let res = [];
    s.split('').forEach(item => {
        if (map.has(item)) {
            map.set(item, map.get(item) + 1);
        } else {
            map.set(item, 1);
        }
    });
    arr = Array.from(map.values())
    arr.sort((a, b) => a - b);
    while(arr.length) {
        let top = arr.pop();

        for (let [key, val] of map) {
            if (val === top) {
                res.push(key.repeat(val));
                map.delete(key);
                break;
            }
        }
    }
    return res.join('');
};


console.log(frequencySort('chenhongdong'));