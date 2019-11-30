class LinkedList {
    constructor() {
        this.head = null;
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
    // 在链表头添加新的元素e
    addFirst(e) {
        let node = new Node(e);
        node.next = this.head;
        this.head = node;
        // 上面三句代码可简写成  this.head = new Node(e, this.head);

        this.size++;
    }
    // 在链表的index位置添加新的元素e
    // 在链表中不是一个常用的操作，练习用:)
    insert(index, e) {
        if (index > 0 && index < this.size) {
            // 在链表头插入
            if (index === 0) {
                this.addFirst(e);
            } else {
                let prev = this.head;
                // 找index前一个位置响应的节点， i < index - 1
                for (let i = 0; i < index - 1; i++) {
                    prev = prev.next;
                }

                let node = new Node(e);
                node.next = prev.next;
                prev.next = node;
                // 简写：  prev.next = new Node(e, prev.next);

                this.size++;
            }
        } else {
            return false;
        }
    }
    addLast(e) {
        this.insert(this.size, e);
    }
}

class Node {
    constructor(e, next = null) {
        this.e = e;
        this.next = next;
    }
}