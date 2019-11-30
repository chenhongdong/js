class LoopQueue {
    constructor(max = 1000) {
        this.data = [];
        this.front = 0;
        this.tail = 0;
        this.size = 0;
        this.max = 1000;
    }

    getCapacity() {
        return this.data.length - 1;
    }
    isEmpty() {
        return this.front === this.tail;
    }
    getSize() {
        return this.size;
    }
    // 入队
    enqueue(e) {
        if ((this.tail + 1) % this.data.length === this.front) {
            this._resize(this.getCapacity() * 2);   // 扩容
        }

        this.data[this.tail] = e;
        this.tail = (this.tail + 1) % this.data.length;
        this.size++;
    }
    // 出队
    dequeue() {
        if (this.isEmpty()) {
            throw new Error('队列为空')
        }
        let res = this.data[this.front];
        this.data[this.front] = null;
        this.front = (this.front + 1) % this.data.length;
        this.size--;

        return res;
    }

    getFront() {
        return this.data[this.front];
    }

    _resize(newCapacity) {
        let newData = new Array(newCapacity);
        for (let i = 0; i < this.size; i++) {
            newData[i] = this.data[(i + front) % this.data.length];
        }
        this.data = newData;
        this.front = 0;
        this.tail = this.size;
    }
}