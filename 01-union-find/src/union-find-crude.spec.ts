import {UnionFindCrude} from './union-find-crude';

describe('Crude Union Spec', () => {
    let unionFind: UnionFindCrude = new UnionFindCrude(10);

    it('can union 1 and 5', () => {
        unionFind.union(1, 5);
        expect(unionFind.arr).toStrictEqual([0, 5, 2, 3, 4, 5, 6, 7, 8, 9]);
    })

    it('can union 5 and 7', () => {
        unionFind.union(5, 7);
        expect(unionFind.arr).toStrictEqual([0, 7, 2, 3, 4, 7, 6, 7, 8, 9]);
    })

    it('can check 1 and 5 is connected', () => {
        expect(unionFind.connected(1, 5)).toBeTruthy();
    })

    it('can check 1 and 7 is connected', () => {
        expect(unionFind.connected(1, 7)).toBeTruthy();
    })

    it('can check 1 and 2 is not connected', () => {
        expect(unionFind.connected(1, 2)).toBeFalsy();
    })
})
