/* 
    链表  Linked List 真正的动态数据结构
    - 更深入的理解引用
    - 更深入的理解递归
    - 辅助组成其他数据结构
*/

/* 
    数据存储在“节点”(Node)中
    class Node {
        e,
        next
    }

    优点： 真正的动态，不需要处理固定容量的问题
    缺点： 丧失了随机访问的能力，不能像数组一样
*/

/* 
    数组和链表的对比
    · 数组最好用于索引有语意的情况。scores[2]
    · 最大的优点：支持快速查询

    · 链表不适合用于索引有语意的情况
    · 最大的优点：动态
*/

/* 

    链表的时间复杂度分析    
    - 添加操作  O(n)
        addLast(e)              O(n)
        addFirst(e)             O(1)
        insert(index, e)        O(n/2)=O(n)
    - 删除操作  O(n)
        removeLast()            O(n)
        removeFirst()           O(1)
        remove(index)           O(n/2) = O(n)
    - 修改操作  O(n)
        set(index, e)           O(n)
    - 查找操作  O(n)
        get(index)              O(n)
        contains(e)             O(n) 

    增删改查时间复杂度 都是O(n)  
        增删-> 如果只对链表头进行操作:O(1)
        查-> 只差链表头的元素:O(1)
*/

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    // 插入指定位置新元素
    insert(ele, pos) {
        // 判断边界条件
        if (pos >= 0 && pos <= this.length) {
            let node = new Node(ele),
                current = this.head,
                previous,
                index = 0;

            if (pos === 0) {
                node.next = current;
                this.head = node;
            } else {
                while (index++ < pos) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.length++;

            return true;
        } else {
            return false;
        }
    }
    // 删除指定位置的项,并返回该项
    removeAt(pos) {
        // 判断边界
        if (pos > -1 && pos < this.length) {
            let current = this.head,
                previous,
                index = 0;

            if (pos === 0) {
                this.head = current.next;
            } else {
                while(index++ < pos) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.length--;

            return current.ele; // 返回该项元素
        } else {
            return null;
        }
    }
    // 追加元素
    append(ele) {
        let node = new Node(ele),
            current;
        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }
    indexOf(ele) {
        let current = this.head,
            index = 0;
        
        while (current.next) {
            if (current.ele === ele) {
                return index;
            }
            index++;
        }

        return -1;
    }
    remove(ele) {
        let index = this.indexOf(ele);
        return this.removeAt(index);
    }
    isEmpty() {
        return this.length === 0;
    }
    size() {
        return this.length;
    }
    getHead() {
        return this.head;
    }
}

class Node {
    constructor(ele) {
        this.ele = ele;
        this.next = null;
    }
}