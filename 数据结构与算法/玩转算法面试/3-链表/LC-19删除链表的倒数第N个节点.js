/* 
    给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
    示例：
    给定一个链表: 1->2->3->4->5, 和 n = 2.
    当删除了倒数第二个节点后，链表变为 1->2->3->5.

    链接：https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list
*/



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


/* 
解法1：
    先遍历一遍计算链表长度为l
    再遍历一遍删除倒数第n个节点（正着数就是l-n个节点）

    时间复杂度： O(n)
    空间复杂度： O(1)
*/
var removeNthFromEnd = function (head, n) {
    if (head === null) {
        return null;
    }
    let len = 0;
    let cur = head;
    while (cur.next) {
        len++;
    }
    console.log(len);
};


/* 
解法2：
    利用双指针（快慢指针）
    p, q 
    p走一步
    q走n+1步，
    p和q指针之间始终保持着n的距离
    最后当q指针走到null的时候，p就走到了待删除节点的前一个节点
    然后p.next = 待删除节点.next，就把待删除节点删掉了

    只遍历了链表一次
*/

var removeNthFromEnd = function (head, n) {
    let dummyHead = new ListNode(null);
    dummyHead.next = head;

    let p = dummyHead;
    let q = dummyHead;
    // q向后指向n+1
    for (let i = 0; i < n + 1; i++) {
        q = q.next;
    }
    // 直到q为null的时候，p就到了待删除节点的前一个位置
    while (q) {
        p = p.next;
        q = q.next;
    }

    let delNode = p.next;
    p.next = delNode.next;
    delNode = node;

    return dummyHead.next;
};