/* 
    示例 1:
        输入: head = [4,5,1,9], node = 5
        输出: [4,1,9]
        解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
*/


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
    if (node === null) return;
    if (node.next === null) {
        node = null;
        return;
    }
    let delNode = node.next;
    node.val = delNode.val;
    node.next = delNode.next;
};