// 选择排序，依次遍历和最小值做比较，如果比最小值小的就交换位置

function select_sort(arr) {
    let min = -1;
    for (let i = 0, len = arr.length; i < len; i++) {
        min = arr[i];
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < min) {
                let tmp = min;
                min = arr[j];
                arr[j] = tmp;
            }
        }
        arr[i] = min;
    }

    return arr;
}


let arr = [20, 10, 11, 9, 7, 6, 4];
// [4,20,11,10,9,7,6]

// [4,6,20,11,10,9,7]

// [4,6,7,20,11,10,9]

// [4,6,7,9,20,11,10]

// [4,6,7,9,10,20,11]

// [4,6,7,9,10,11,20]
console.log(select_sort(arr));