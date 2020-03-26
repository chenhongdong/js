/* 
假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。对每个孩子 i ，都有一个胃口值 gi ，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j ，都有一个尺寸 sj 。如果 sj >= gi ，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。

注意：
你可以假设胃口值为正。
一个小朋友最多只能拥有一块饼干。

示例 1:
    输入: [1,2,3], [1,1]
    输出: 1
示例 2:
    输入: [1,2], [1,2,3]
    输出: 2

链接：https://leetcode-cn.com/problems/assign-cookies
*/
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    // 先给两个数组排序，由大到小，O(nlgn)
    g.sort((a,b) => b - a);
    s.sort((a,b) => b - a);
    // si表示数组s里的索引， gi表示数组g里的索引， res表示满足小朋友的数量
    let si = 0, gi = 0, num = 0;

    while (si < s.length && gi < g.length) {
        // 如果最大的饼干   满足了  最贪心的小朋友
        // 就继续下一位
        if (s[si] >= g[gi]) {
            num++;
            si++;
            gi++;
        } else {    // 最大的饼干都没满足最贪心的那个小朋友的话，就去找第2贪心的小朋友，看看能不能满足他
            gi++;
        }
    }

    return num;
};


let num = findContentChildren([1,2,3], [1,1]);



// let s="aabcccccaa";
let s = 'aabb';
var compressString = function(S) {
    if (S === '') return '';

    let str = S.replace(/([a-zA-Z])\1*/g, function($0, $1) {
        return $1 + $0.length;
    });
    
    return str.length >= S.length ? S : str;
};

console.log(compressString(s));