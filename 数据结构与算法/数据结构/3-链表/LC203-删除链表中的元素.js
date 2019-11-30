/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// 方法1 利用虚拟头节点，省去了head为0的情况处理
var removeElements = function(head, val) {
    let dummyHead = new ListNode(null);
    dummyHead.next = head;
    let prev = dummyHead;

    while(prev.next !== null) {
        if (prev.next.val === val) {
            prev.next = prev.next.next;
        } else {
            prev = prev.next;
        }
    }

    return dummyHead.next;
};

// 方法2 没有虚拟头节点
var removeElements = function(head, val) {
    while (head !== null && head.val === val) {
        head = head.next;
    }

    if (head === null) {
        return null;
    }

    let prev = head;
    while(prev.next) {
        if (prev.next.val === val) {
            prev.next = prev.next.next;
        } else {
            prev = prev.next;
        }
    }
    return head;
};

// 方法3 通过递归
var removeElements = function(head, val) {
    if (head === null) {
        return null;
    }
    head.next = removeElements(head.next, val);
    return head.val === val ? head.next : head;
};