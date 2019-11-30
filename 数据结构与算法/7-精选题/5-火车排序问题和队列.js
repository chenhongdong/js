/* 
    o 原始的顺序
    t 重排的顺序
        x 重排后的一节车厢
*/

function isTrans(o, t) {
    const q = [];
    for (let x of t) {
        if (q[q.length - 1] === x) {
            q.pop();
        }
        let y;
        while(o.length > 0 && (y = o.shift()) !== x) {
            q.unshift(y);
        }
        // 循环不变式：o中下一个要么和x匹配，要么o为空
    }
    return q.length === 0;
}

// 通过队列的形式改写，性能更好

function isTransQueue(o, t) {
    const q = new Queue();
    for (let x of t) {
        if (q.peek() === x) {
            q.dequeue();
        }
        let y;
        while(o.size() > 0 && (y = o.dequeue()) !== x) {
            q.enqueue(y);
        }
    }
    return q.size() === 0;
}