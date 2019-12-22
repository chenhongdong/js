/* 
    给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

    '.' 匹配任意单个字符
    '*' 匹配零个或多个前面的那一个元素
    示例5：
        输入:
        s = "mississippi"
        p = "mis*is*p*."
        输出: false



    第一步：筛选无模式和有模式
        ([a-z.]\*)|([a-z]+(?=([a-z.]\*|$))) -----> ['mi','s*','i','s*','p*']
    第二步： 模式匹配结果分类
    ['mi','s*','i','s*','p*'].forEach(item => {

    })
    第三步：模式遍历与原始字符串匹配
    case1: .* 直接返回true
    case2: a* 直接移动原始字符串光标
    case3: cdef 挨个匹配，如果不匹配直接返回false
*/


/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    // 对模式遍历进行正则筛选
    let arr = p.match(/([a-z.]\*)|([a-z]+(?=([a-z.]\*)|$))/g);
    if (arr === null)
        return false;

    let cur = 0;
    let strLen = s.length;
    
    for (let i = 0, len = arr.length, m; i < len; i++) {
        // 对于模式分为三类，.*|a*|cdef 
        m = arr[i].split('');
        // 如果第二位是*，表示是有模式的
        if (m[1] === '*') {
            if (m[0] === '.') {
                cur = strLen;
                break;
            } else {
                while(s[cur] === m[0]) {
                    cur++;
                }
            }
        } else {    // 无模式的，一一对比
            for (let j = 0; j < m.length; j++) {
                if (m[j] !== s[cur]) {
                    return false;
                } else {
                    cur++;
                }
            }
        }
    }
    return cur === strLen;
};
var s = "mississippi";
var p = "mis*is*ip*.";
console.log(isMatch(s, p));