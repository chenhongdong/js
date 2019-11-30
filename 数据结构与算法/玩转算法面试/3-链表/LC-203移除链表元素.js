/* 
删除链表中等于给定值 val 的所有节点。

示例:
输入: 1->2->6->3->4->5->6, val = 6
输出: 1->2->3->4->5
*/



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
var removeElements = function (head, val) {
    // 利用虚拟头节点
    let dummyHead = new ListNode(0);
    dummyHead.next = head;
    let cur = dummyHead;
    
    while (cur.next) {
        if (cur.next.val === val) {
            let delNode = cur.next;
            cur.next = delNode.next;
            delNode = null;
        } else {
            cur = cur.next;
        }
    }

    return dummyHead.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}