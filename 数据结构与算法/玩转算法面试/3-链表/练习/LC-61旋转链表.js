/* 
    给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。
    示例 1:
        输入: 1->2->3->4->5->NULL, k = 2
        输出: 4->5->1->2->3->NULL
    解释:
        向右旋转 1 步: 5->1->2->3->4->NULL
        向右旋转 2 步: 4->5->1->2->3->NULL

    链接：https://leetcode-cn.com/problems/rotate-list
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (head === null) {
        return null;
    }
    let p = head;
    let len = 0;
    while(p) {
        p = p.next;
        len++;
    }
    k = k % len;
    if (k === 0) {
        return head;
    }
    let node = head;    // 保存头节点
    let q = head;
    while (k > 0) {
        k--;
        q = q.next;
    }

    while(q.next) {
        head = head.next;
        q = q.next;
    }
    // 记录next的位置，
    let res = head.next;
    head.next = null;   // 断开
    // 后一段的末尾指向前一段的开头
    q.next = node;  // 闭环
    return res;
};