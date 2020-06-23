export class UnionFindCrude {
    private readonly _arr: number[];

    constructor(length: number) {
        this._arr = new Array(length);
        for (let i = 0; i < length; i++) {
            this.arr[i] = i;
        }
    }

    get arr() {
        return this._arr;
    }

    connected(p: number, q: number): boolean {
        return this._arr[p] === this._arr[q];
    }

    union(p: number, q: number): void {
        const pid = this._arr[p];
        const qid = this._arr[q];
        for(let i = 0; i < this._arr.length; i++) {
            if (this._arr[i] === pid) this._arr[i] = qid
        }
    }
}
