// LIFO 后进先出
module.exports = class Stack {
    constructor(max = 1000) {
        this.max = max; // 栈容量
        this.sp = -1;   // 栈指针
        this.data = [];
    }
    // 入栈
    push(item) {
        if (this.ps === this.max - 1) {
            throw new Error('Stack Overflow');
        }
        this.sp++;
        this.data.push(item);
    }
    // 出栈
    pop() {
        if (this.sp === -1) {
            throw new Error('Stack Underflow');
        }
        this.sp--;
        return this.data.pop();
    }
    // 栈顶元素
    peek() {
        return this.data[this.data.length - 1];
    }
    // 栈的size
    size() {
        return this.data.length;
    }
    // 栈是否为空
    isEmpty() {
        return this.data.length === 0;
    }
    // 清空栈
    clear() {
        this.data = [];
    }
}

/* 
test

const stack = new Stack();
for (let i = 0; i < 4; i++) {
    stack.push(i);
}

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.isEmpty()); 
*/