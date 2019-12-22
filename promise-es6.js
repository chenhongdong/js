class Promise {
    constructor(executor) {
        const self = this;
        self.value;
        self.reason;
        self.status = 'pending';
        self.onResolvedCb = [];
        self.onRejectedCb = [];

        function resolve(value) {
            if (self.status === 'pending') {
                self.status = 'fulfilled';
                self.value = value;
                self.onResolvedCb.forEach(fn => fn());
            }
        }

        function reject(reason) {
            if (self.status === 'pending') {
                self.status = 'rejected';
                self.reason = reason;
                self.onRejectedCb.forEach(fn => fn());
            }
        }

        try {
            executor(resolve, reject);
        } catch(e) {
            reject(e);
        }
    }



    then(onFulfilled, onRejected) {
        const self = this;
        let promise2;

        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : function(value) { return value; };
        onRejected = typeof onRejected === 'function' ? onRejected : function(err) { throw err; };

        if (self.status === 'fulfilled') {
            promise2 = new Promise((resolve, reject) => {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(self.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch(e) {
                        reject(e);
                    }
                }, 0);
            });
        }

        if (self.status === 'rejected') {
            promise2 = new Promise((resolve, reject) => {
                setTimeout(() => {
                    try {
                        let x = onRejected(self.reason);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch(e) {
                        reject(e);
                    }
                }, 0);
            });
        }

        if (self.status === 'pending') {
            promise2 = new Promise((resolve, reject) => {
                    self.onResolvedCb.push(() => {
                        setTimeout(() => {
                            try {
                                let x = onFulfilled(self.value);
                                resolvePromise(promise2, x, resolve, reject);
                            } catch (e) {
                                reject(e);
                            }
                        }, 0);
                    });
                    self.onRejectedCb.push(() => {
                        setTimeout(() => {
                            try {
                                let x = onRejected(self.reason);
                                resolvePromise(promise2, x, resolve, reject);
                            } catch(e) {
                                reject(e);
                            }
                        }, 0);
                    });
            });
        }

        return promise2;
    }
    // 静态方法，可以直接在类上调用
    static catch(errFn) {
        return this.then(null, errFn);
    }

    static all(promises) {
        return new Promise((resolve, reject) => {
            let count = 0;
            let arr = [];

            function processData(index, val) {
                arr[index] = val;
                count++;
                if (count === promises.length) {
                    resolve(arr);
                }
            }


            for (let i = 0; i < promises.length; i++) {
                promises[i].then(data => {
                    processData(i, data);
                }, reject);
            }
        });
    }

    static race(promises) {
        return new Promise((resolve, reject) => {
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(resolve, reject);
            }
        });
    }

    static resolve(value) {
        return new Promise(resolve => {
            resolve(value);
        });
    }

    static reject(reason) {
        return new Promise((resolve, reject) => {
            reject(reason);
        });
    }
    // 测试库需要
    static defer() {
        let def = {};
        def.promise = new Promise((resolve, reject) => {
             def.resolve = resolve;
             def.reject = reject;
        });
        return def;
    }
    static deferred() {
        let def = {};
        def.promise = new Promise((resolve, reject) => {
            def.resolve = resolve;
            def.reject = reject;
        });
        return def;
    }
}


function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
        return reject(new TypeError('循环引用'));
    }

    let called;

    if (x !== null && (typeof x === 'function' || typeof x === 'object')) {
        try {
            let then = x.then;
            if (typeof then === 'function') {
                then.call(x, y => {
                    if (called) return;
                    called = true;
                    resolvePromise(promise2, y, resolve, reject);
                }, e => {
                    if (called) return;
                    called = true;
                    reject(e);
                });
            } else {
                if (called) return;
                called = true;
                resolve(x);
            }
        } catch(e) {
            if (called) return;
            called = true;
            reject(e);
        }

    } else {
        if (called) return;
        called = true;
        resolve(x);
    }
}

module.exports = Promise;