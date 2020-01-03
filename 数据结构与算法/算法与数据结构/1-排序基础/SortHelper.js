// 生成随机数组
function randomArray(n, rangeL, rangeR) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * (rangeR - rangeL) + rangeL));
    }
    return arr;
}

// 生成近乎有序随机数组
function orderedArray (n, swapTimes) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(i);
    }

    for (let i = 0; i < swapTimes; i++) {
        let posx = Math.random() * n;
        let posy = Math.random() * n;
        swap(arr, posx, posy);
    }

    return arr;
}

// 测试排序性能
function testSort(sortName, sort, arr, n) {
    console.time(sortName)
    sort(arr, n);
    console.timeEnd(sortName);

    return;
}

function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

module.exports = {
    randomArray,
    testSort,
    orderedArray
};