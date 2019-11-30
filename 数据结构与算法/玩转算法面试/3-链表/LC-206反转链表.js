/* 
    反转一个单链表。
    示例:
        输入: 1->2->3->4->5->NULL
        输出: 5->4->3->2->1->NULL
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

//  时间复杂度： O(n)
//  空间复杂度： O(1)
var reverseList = function(head) {
    let pre = null;
    let cur = head;
    // cur不为null的时候
    while (cur) {
        let next = cur.next;
        
        cur.next = pre;
        pre = cur;
        cur = next;
    }

    return pre;
};