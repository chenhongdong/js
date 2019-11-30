// 路径压缩，find方法，时间消耗最少，性能最好
class UnionFind5 {
    private parent: number[];
    private rank: number[];

    constructor(size: number) {
        for (let i = 0; i < size; i++) {
            this.parent.push(i);
            this.rank.push(1);
        }
    }

    getSize(): number {
        return this.parent.length;
    }

    find(p: number): number {
        if (p > 0 && p <= this.parent.length) {
            while (p !== this.parent[p]) {
                this.parent[p] = this.parent[this.parent[p]];
                p = this.parent[p];
            }

            return p;
        }
    }

    isConnected(p: number, q: number): boolean {
        return this.find(p) === this.find(q);
    }

    unionElements(p: number, q: number) {
        let pRoot = this.find(p);
        let qRoot = this.find(q);
        let { parent, rank } = this;

        if (pRoot === qRoot) return;

        if (rank[pRoot] < rank[qRoot]) {
            parent[pRoot] = qRoot;
        } else if (rank[pRoot] > rank[qRoot]) {
            parent[qRoot] = pRoot;
        } else {
            parent[qRoot] = pRoot;
            rank[pRoot] += 1;
        }
    }
}