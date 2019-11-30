"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 优先队列，由堆来实现
var MaxHeap_1 = __importDefault(require("./MaxHeap"));
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
    }
    PriorityQueue.prototype.constrcutor = function () {
        this.maxHeap = new MaxHeap_1.default();
    };
    PriorityQueue.prototype.size = function () {
        return this.maxHeap.size();
    };
    PriorityQueue.prototype.isEmpty = function () {
        return this.maxHeap.isEmpty();
    };
    PriorityQueue.prototype.add = function (e) {
        this.maxHeap.add(e);
    };
    PriorityQueue.prototype.peek = function () {
        return this.maxHeap.findMax();
    };
    PriorityQueue.prototype.remove = function () {
        return this.maxHeap.extractMax();
    };
    return PriorityQueue;
}());
module.exports = {
    PriorityQueue: PriorityQueue
};
