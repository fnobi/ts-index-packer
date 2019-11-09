import { groupBy, padLeft } from '../src/';

describe('group by', () => {
    it('integrate array with prop', () => {
        type People = {
            age: number;
            name: string;
        };
        const sample: People[] = [{
            age: 10,
            name: 'hoge'
        },{
            age: 15,
            name: 'moge'
        },{
            age: 21,
            name: 'foo'
        },{
            age: 35,
            name: 'bar'
        }];
        const expected = new Map<number, People[]>([
            [10, [{
                age: 10,
                name: 'hoge'
            },{
                age: 15,
                name: 'moge'
            }]],
            [20, [{
                age: 21,
                name: 'foo'
            }]],
            [30, [{
                age: 35,
                name: 'bar'
            }]]
        ]);
        const processed = groupBy(sample, ({ age }) => {
            return Math.floor(age / 10) * 10;
        });        
        expect(processed).toEqual(expected);
    });
});

describe('pad left', () => {
    it('fill with 0', () => {
        expect(padLeft(3, 2)).toBe('03');
        expect(padLeft(10, 5)).toBe('00010');
    });
    it('will not change when over count', () => {
        expect(padLeft(10, 2)).toBe('10');
        expect(padLeft(100, 2)).toBe('100');
    });
    it('fill with another text', () => {
        expect(padLeft(3, 2, 'x')).toBe('x3');
    });
});