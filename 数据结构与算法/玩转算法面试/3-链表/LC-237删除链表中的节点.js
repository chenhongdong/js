/* 
    请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点，你将只被给定要求被删除的节点。
    现有一个链表 -- head = [4,5,1,9]，它可以表示为:

        4   ->   5   ->   1   ->   9

    示例 1:
    输入: head = [4,5,1,9], node = 5
    输出: [4,1,9]
    解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.

    链接：https://leetcode-cn.com/problems/delete-node-in-a-linked-list
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
    if (node === null) {
        return;
    }
    if (node.next === null) {
        node = null;
        return;
    }

    let delNode = node.next;
    node.val = delNode.val;
    node.next = delNode.next;
    // 释放掉delNode
    delNode = null;
};


/* 
解题思路：


    4   ->   5   ->   1   ->   9        node=5


    想要删除node为5的节点，因为不能直接拿到节点5前面的节点
    也就不能直接通过前面节点4.next=1这样直接跳过节点5
    所以先把节点5的next节点的值赋给5的val，
    然后再把节点5的next指向1的next，也就是9，从而删除了达到了删除的效果

    node.val = node.next.val
    node.next = node.next.next
*/