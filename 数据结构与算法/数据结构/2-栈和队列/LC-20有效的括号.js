const Stack = require('./Stack');

/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s) {
    let stack = new Stack();
    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        if (c === '(' || c === '[' || c === '{') {
            stack.push(c);
        } else {
            if (stack.isEmpty()) return false;

            let top = stack.pop();
            if (c === ')' && top !== '(') return false;
            if (c === ']' && top !== '[') return false;
            if (c === '}' && top !== '{') return false;
        }
    }

    return stack.isEmpty();
};

// console.log(isValid("{[]}"))




var isValid2 = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        if (c === '(' || c === '[' || c === '{') {
            stack.push(c);
        } else {
            if (stack.length === 0) {
                return false;
            }
            let top = stack.pop();
            if (c === ')' && top !== '(') return false;
            if (c === ']' && top !== '[') return false;
            if (c === '}' && top !== '{') return false;
        }
    }
    return stack.length === 0;
};
console.log(isValid2("()"))
