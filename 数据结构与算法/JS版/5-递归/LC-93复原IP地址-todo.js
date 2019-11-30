/* 
    给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。

    示例:
        输入: "25525511135"
        输出: ["255.255.11.135", "255.255.111.35"]
*/

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    let res = [];
    let search = (cur, str) => {
        // 边界条件
        if (cur.length === 4 && cur.join('') === s) {
            res.push(cur.join('.'));
        } else {
            let len = Math.min(3, str.length),
                tmp;
            for (let i = 0; i < len; i++) {
                tmp = str.substr(0, i + 1);
                console.log(tmp, cur);
                if (tmp < 256) {
                    search(cur.concat([tmp]), str.substr(i+1));
                }
            }
        }
    };

    search([], s);
    return res;
};

console.log(restoreIpAddresses("25525511135"));