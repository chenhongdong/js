/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    let dummyHead = new ListNode(null);
    dummyHead.next = node;

    let prev = dummyHead;
    while (prev.next) {
        if (prev.next.val === node.val) {
            prev.next = prev.next.next
        }
    }
};