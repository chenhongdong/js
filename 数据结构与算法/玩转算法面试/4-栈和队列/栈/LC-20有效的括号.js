/* 
    给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
    有效字符串需满足：
    左括号必须用相同类型的右括号闭合。
    左括号必须以正确的顺序闭合。
    注意空字符串可被认为是有效字符串。

    示例 1:
        输入: "()"
        输出: true
    示例 2:
        输入: "()[]{}"
        输出: true

    链接：https://leetcode-cn.com/problems/valid-parentheses
*/


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // 栈顶元素反映了在嵌套的层次关系中，最近的 需要匹配的元素
    let stack = []; // 栈
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '{' || s[i] === '[' || s[i] === '(') {
            stack.push(s[i]);   // 将左括号统统入栈
        } else {
            if (stack.length === 0) {
                return false;
            }
            let top = stack.pop();  // 拿出最近入栈的值以做比较用,出栈
            let match = '';
            if (s[i] === '}') {
                match = '{';
            } else if (s[i] === ']') {
                match = '[';
            } else {    // s[i] === ')'
                match = '(';
            }

            if (top !== match) {
                return false;
            }
        }
    }

    if (stack.length !== 0) {
        return false;
    }
    return true;
};


console.log(isValid("{[]}"));
