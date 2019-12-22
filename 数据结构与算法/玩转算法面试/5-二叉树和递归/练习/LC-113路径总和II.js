/* 
给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。
说明: 叶子节点是指没有子节点的节点。
示例:
给定如下二叉树，以及目标和 sum = 22，
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
返回:
[
   [5,4,11,2],
   [5,8,4,5]
]
链接：https://leetcode-cn.com/problems/path-sum-ii
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */

var pathSum = function(root, sum) {
    if (!root) {
        return res;
    }
    // 根节点是一定存在的先放到临时数组中
    tmp.push(root.val);
    // 每次都让sum减去节点的值
    sum -= root.val;

    // 递归终止条件是到达了叶子节点并且sum为0了
    if (!root.left && !root.right && sum === 0) {
        res.push([].concat(tmp));   // 拷贝一份tmp，因为之后递归返回到上一层的时候还要去掉tmp里的最后一个元素
    }

    if (root.left) {
        pathSum(root.left, sum);
    }
    if (root.right) {
        pathSum(root.right, sum);
    }
    tmp.pop();  // 从tmp中删除最后一项
    
    return res;
};

function dfs(root, sum, res, tmp) {
    if (!root) return;
    // 根节点是一定存在的先放到临时数组中
    tmp.push(root.val);
    sum -= root.val;
    // 递归终止条件是到达了叶子节点并且sum为0了
    if (!root.left && !root.right && sum === 0) {
        res.push([...tmp]);   // 拷贝一份tmp，因为之后递归返回到上一层的时候还要去掉tmp里的最后一个元素
    }
    dfs(root.left, sum, res, tmp);
    dfs(root.right, sum, res, tmp);
    // 上面两步结束后出栈进行回溯
    tmp.pop();
}