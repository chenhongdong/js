/* 
    栈 Stack
        - 栈也是一种线性结构
        - 相比数组，栈对应的操作是数组的“子集”
        - 只能从一端添加元素，也只能从一端取出元素
        - 这一端称为栈顶
        - 栈是一种后进先出的数据结构
        - Last In First Out - (LIFO)
*/

/* 
    栈的应用
        ·无处不在的Undo(撤销)操作
        ·程序调用的系统栈
*/

/* 
    栈的实现
        Stack
        ·push
        ·pop
        ·peek
        ·size
        ·isEmpty
*/
class Stack {
    constructor(max = 1000) {
        this.max = max;
        this.sp = -1;
        this.data = [];
    }
    // 入栈
    push(item) {
        if (this.sp === this.max - 1) {
            throw 'Stack Overflow';
        }
        this.data.push(item);
        this.sp++;
    }
    // 出栈
    pop() {
        if (this.sp === -1) {
            throw 'Stack Underflow';
        }
        this.sp--;
        return this.data.pop();
    }
    // 栈顶元素
    peek() {
        return this.data[this.data.length - 1];
    }
    // 栈是否为空
    isEmpty() {
        return this.data.length === 0;
    }
    // 返回栈的size
    size() {
        return this.data.length;
    }
    // 移除栈内所有元素
    clear() {
        this.data = [];
    }
}

const stack = new Stack();
for (let i = 0; i < 4; i++) {
    stack.push(i);
}

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.isEmpty())