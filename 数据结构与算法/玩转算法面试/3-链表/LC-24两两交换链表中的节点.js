/* 
    给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
    你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
    示例:
        给定 1->2->3->4, 你应该返回 2->1->4->3.

    链接：https://leetcode-cn.com/problems/swap-nodes-in-pairs
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
 * @return {ListNode}
 */


// 时间复杂度： O(n)
// 空间复杂度： O(1)
var swapPairs = function (head) {
    let dummyHead = new ListNode(0); // 虚拟头节点
    dummyHead.next = head;

    let prev = dummyHead;

    while (prev.next && prev.next.next) {
        let node1 = prev.next;
        let node2 = node1.next;
        let next = node2.next;
        // 交换过程
        node2.next = node1;
        node1.next = next;
        prev.next = node2;
        // 现在node1为一对节点中靠后的那个节点了
        prev = node1;
    }

    return dummyHead.next;
};



/*
解题思路：
    1的前一个节点指向2
    2指向1
    1的后一个节点指向2的后一个节点

   pre  node1    node2      next
    0    1   ->    2     ->  3      ->  4  ->null
    node2.next = node1
    node1.next = next
    pre.next = node2


*/