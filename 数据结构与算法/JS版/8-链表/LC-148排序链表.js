class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// 声明链表的数据结构
class NodeList {
    constructor(arr) {
        // 声明链表的头部节点
        let head = new Node(arr.shift());
        let next = head;
        arr.forEach(item => {
            next.next = new Node(item);
            next = next.next;
        });
        return head;
    }
}

// 交换两个节点的值
let swap = (p, q) => {
    let tmp = p.val;
    p.val = q.val;
    q.val = tmp;
};

// 找到基准元素
let partion = (start, end) => {
    let val = start.val;
    let p = start;
    let q = start.next;

    while (q !== end) {
        if (q.val < val) {
            p = p.next;
            swap(p, q);
        }
        q = q.next;
    }
    // 让基准元素跑到中间去
    swap(p, start);
    return p;
};


function sort(start, end) {
    if (start !== end) {
        let part = partion(start, end);
        sort(start, part);
        sort(part.next, end);
    }
}


var sortList = function(head) {
    head = new NodeList([-1,5,3,4,0]);
    sort(head);
};

console.log(sortList);