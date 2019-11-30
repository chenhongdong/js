// 优先队列，由堆来实现
import MaxHeap from './MaxHeap';

class PriorityQueue {
    private maxHeap: MaxHeap;

    constrcutor() {
        this.maxHeap = new MaxHeap();
    }

    size(): number {
        return this.maxHeap.size();
    }

    isEmpty(): boolean {
        return this.maxHeap.isEmpty();
    }

    add(e) {
        this.maxHeap.add(e);
    }

    peek() {
        return this.maxHeap.findMax();
    }

    remove() {
        return this.maxHeap.extractMax();
    }
}

module.exports = {
    PriorityQueue
}