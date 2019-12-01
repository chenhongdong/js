/* 
    将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
    示例：
        输入：1->2->4, 1->3->4
        输出：1->1->2->3->4->4

    链接：https://leetcode-cn.com/problems/merge-two-sorted-lists
*/

// 方法1：迭代
var mergeTwoLists = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let cur = dummyHead;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }

    cur.next = !l1 ? l2 : l1;
    return dummyHead.next;
};



// 方法2：递归
var mergeTwoLists = function(l1, l2) {
    if (!l1) {      // 如果l1链表为空，就返回l2链表
        return l2;
    }
    if (!l2) {      // 如果l2链表为空，就返回l1链表
        return l1;
    }
    // 递归去比较链表的值
    if (l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};