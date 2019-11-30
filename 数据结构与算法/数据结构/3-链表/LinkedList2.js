class LinkedList {
    constructor() {
        this.dummyHead = new Node(null);    // 虚拟头节点
        this.size = 0;
    }
    // 获取链表中的元素个数
    getSize() {
        return this.size;
    }
    // 链表是否为空
    isEmpty() {
        return this.size === 0;
    }
    // 在链表的index位置添加新的元素e
    // 在链表中不是一个常用的操作，练习用:)
    insert(index, e) {
        if (index >= 0 && index <= this.size) {
            let prev = this.dummyHead;
            
            for (let i = 0; i < index; i++) {
                prev = prev.next;
            }

            prev.next = new Node(e, prev.next);

            this.size++;
        } else {
            return false;
        }
    }
    // 在链表头添加新的元素e
    addFirst(e) {
        this.insert(0, e);
    }
    // 在链表尾添加新的元素e
    addLast(e) {
        this.insert(this.size, e);
    }
    
    // 获得链表的第index位置上的元素
    // 在链表中不是一个常用的操作，练习用:)
    get(index) {
        if (index >= 0 && index <= this.size) {
            let cur = this.dummyHead.next;  // 索引为0的位置开始
            for (let i = 0; i < index; i++) {
                cur = cur.next;
            }
            return cur;
        }
    }
    // 获取链表的第一个元素
    getFirst() {
        return this.get(0);
    }
    // 获取链表的最后一个元素
    getLast() {
        return this.get(this.size - 1);
    }

    // 修改链表的第index位置的元素e
    // 在链表中不是一个常用的操作，练习用:)
    set(index, e) {
        if (index >= 0 && index <= this.size) {
            let cur = this.dummyHead.next;
            for (let i = 0; i < index; i++) {
                cur = cur.next;
            }
            cur.ele = e;
        }
    }
    // 查找链表中是否存在元素e
    contains(e) {
        let cur = this.dummyHead.next;
        while(cur) {
            if (cur.ele === e)
                return true;
            cur = cur.next;
        }
        return false;
    }

    // 从链表中删除index位置的元素，返回删除的元素
    // 在链表中不是一个常用的操作，练习用:)
    remove(index) {
        if (index >= 0 && index <= this.size) {
            let prev = this.dummyHead;
            for (let i = 0; i < index; i++) {
                prev = prev.next;
            }
            // let delNode = prev.next;
            // prev.next = delNode.next;
            // delNode.next = null;
            prev.next = prev.next.next;
            this.size--;

            return prev.next.ele;
        }
    }
    removeFirst() {
        this.remove(0);
    }
    removeLast() {
        this.remove(this.size - 1);
    }

    toString() {
        let cur = this.dummyHead.next,
            str = '';

        while (cur !== null) {
            str += cur.ele + '->';
            cur = cur.next;
        }
        str += 'NULL';

        return str;
    }
}

class Node {
    constructor(e, next = null) {
        this.ele = e;
        this.next = next;
    }
}

module.exports = {
    LinkedList,
    Node
};


// test
let lList = new LinkedList();
for (let i = 0; i < 5; i++) {
    lList.addFirst(i);
    console.log(lList.toString());
}


lList.insert(2, 666);
console.log(lList.toString());

// lList.remove(2);
// console.log(lList.toString());

// lList.removeFirst();
// console.log(lList.toString());

// lList.removeLast();
// console.log(lList.toString());