/* 
请判断一个链表是否为回文链表。
示例 1:
    输入: 1->2
    输出: false
示例 2:
    输入: 1->2->2->1
    输出: true

    链接：https://leetcode-cn.com/problems/palindrome-linked-list/
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (head === null) {
        return null;
    }
    let dummyHead = new ListNode(0);
    dummyHead.next = head;

    let slow = dummyHead, fast = dummyHead;
    // 慢指针走一步，快指针走两步
    // 快指针走到null了，慢指针就正好走到中间
    while (slow && fast) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // 设置后半段起点
    fast = slow.next;
    slow.next = null;
    // 设置前半段起点
    slow = dummyHead.next;

    // 反转后半段链表
    let pre = null;
    while (fast) {
        let next = fast.next;
        fast.next = pre;
        pre = fast;
        fast = next;
    }

    // 遍历两个链表比较
    while (pre) {
        if (pre.val !== slow.val) {
            return false;
        }
        pre = pre.next;
        slow = slow.next;
    }
    return true;
};