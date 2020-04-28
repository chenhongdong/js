// FIFO 先进先出

class Queue {
    constructor(max = 1000) {
        this.data = [];
        this.p = 0; // 入队指针
        this.q = 0; // 出队指针
        this.size = 0;
        this.max = max;
    }
    // 入队
    enqueue(item) {
        if (this.size === this.max) {
            throw new Error('Queue Overflow');
        }
        this.p++;
        this.data[this.p] = item;
        this.size++;
        if (this.p === this.max) {  // 循环队列
            this.p = 0;
        }
    }
    // 出队
    dequeue() {
        if (this.size === 0) {
            throw  new Error('Queue Underflow');
        }
        this.q++;
        const item = this.data[this.q];
        this.size--;
        if (this.q === this.max) {
            this.q = 0;
        }
        return item;
    }
}