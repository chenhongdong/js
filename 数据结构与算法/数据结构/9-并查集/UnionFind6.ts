// 路径压缩find，递归到底，有一定的递归消耗，比UF5略差一点点
class UnionFind6 {
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
        if (p > 0 && p < this.parent.length) {
            if (p !== this.parent[p]) {
                this.parent[p] = this.find(this.parent[p]);
            }
            return this.parent[p];
        }
    }

    isConnected(p: number, q: number): boolean {
        return this.find(p) === this.find(q);
    }

    unionElements(p: number, q: number) {
        let pRoot = this.find(p),
            qRoot = this.find(q),
            { parent, rank } = this;

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