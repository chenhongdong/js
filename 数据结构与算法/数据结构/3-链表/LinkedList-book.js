/* 
    学习自《学习js数据结构与算法》
    链表
    - 动态的数据结构
    - 任意添加或删除项，它会按需进行扩容
    - 存储有序的元素集合

    优点：添加or删除元素快，不需要移动其他元素
    缺点：无法像数组那样快速访问元素
*/

// 创建链表
function LinkedList() {
    // Node类，表示要加入链表的项
    let Node = function(ele) {
        this.ele = ele;
        this.next = null;
    };

    let length = 0;     // 链表项的数量
    let head = null;    // 存储第一个节点的引用（指针）

    // 在指定位置pos插入一个新项ele
    this.insert = function(pos, ele) {
        // 检查越界值
        if (pos >= 0 && pos <= length) {
            let node = new Node(ele),
                current = head,     // 列表中第一个元素的引用
                prev,
                index = 0;
            
            if (pos === 0) {    // 在第一个位置添加
                node.next = current;
                head = node;
            } else {
                while(index++ < pos) { // 循环链表找到目标位置
                    prev = current;
                    current = current.next;
                }
                node.next = current;
                prev.next = node;
            }
            length++;   // 更新链表长度
            return true;
        } else {
            return false;
        }
    };

    // 向链表最后添加一项
    // 有两种情况：1链表为空，添加的是第一项。2不为空，追加项
    this.append = function(ele) {
        let node = new Node(ele),
            current;
        
        if (head === null) {    // 链表中第一个节点
            head = node;
        } else {
            current = head;
            // 循环链表，直到找到最后一项
            while(current.next) {
                current = current.next;
            }
            // 找到最后一项，将其next赋为node，建立链接
            current.next = node;
        }
        length++;   // 更新链表长度
    };

    // 移除指定位置的项
    this.removeAt = function(pos) {
        // 检查越界值
        if (pos > -1 && pos < length) {
            let current = head,
                prev,
                index = 0;
            
            if (pos === 0) {    // 移除第一项
                head = current.next;
            } else {    // 移除任意一项
                while(index++ < pos) {
                    prev = current;
                    current = current.next;
                }
                // 将prev和current.next链接起来，跳过current，从而移除它
                prev.next = current.next;
            }
            length--;
            return current.ele;
        } else {
            return null;
        }
    }
}


// test
let list = new LinkedList();
list.append(15);
list.append(10);
console.log(list);