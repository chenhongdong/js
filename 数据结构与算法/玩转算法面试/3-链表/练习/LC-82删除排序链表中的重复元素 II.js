/* 
    给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。
    示例 1:
        输入: 0->1->2->4->4->5
        输出: 1->2->5
    示例 2:
        输入: 0->1->1->1->2->3
        输出: 2->3

    链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii
*/



var deleteDuplicates = function(head) {
    if (head === null) {
        return null;
    }
    // 虚拟头节点
    let dummyHead = new ListNode(0);
    dummyHead.next = head;
    // 快慢指针
    let slow = dummyHead;
    let fast = head;

    while (fast) {
        if ((fast.next && fast.val !== fast.next.val) || fast.next === null) {
            // slow的next节点和fast节点相等，表示他们没有相同元素
            // 将slow移动到fast位置
            if (slow.next === fast) {
                slow = fast;
            } else {
                slow.next = fast.next;
            }
        }
        fast = fast.next;
    }

    return dummyHead.next;
};