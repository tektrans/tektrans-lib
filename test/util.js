/* global describe it */

const should = require('should');

const util = require('../util');

const MAX_LOOP = 200;

describe('#util', () => {
    describe('#isAStringWithTrueValue', () => {
        it('should return correct boolean value', () => {
            util.isAStringWithTrueValue(0).should.not.ok();
            util.isAStringWithTrueValue(1).should.ok();
            util.isAStringWithTrueValue(-1).should.ok();

            util.isAStringWithTrueValue('1').should.ok();
            util.isAStringWithTrueValue('0').should.not.ok();
            util.isAStringWithTrueValue('-1').should.ok();

            util.isAStringWithTrueValue('YES').should.ok();
            util.isAStringWithTrueValue('NO').should.not.ok();

            util.isAStringWithTrueValue([]).should.not.ok();
            util.isAStringWithTrueValue([1]).should.ok();

            util.isAStringWithTrueValue({}).should.not.ok();
            util.isAStringWithTrueValue({ a: 1 }).should.ok();
        });
    });

    describe('#random', () => {
        it('should return integer correct value in range', () => {
            const max = 10;

            for (let i = 0; i < MAX_LOOP; i += 1) {
                const result = util.random(max);
                result.should.greaterThanOrEqual(0, `greater than 0 (${result})`);
                result.should.lessThanOrEqual(max, `less than or equal ${max} (${result})`);
            }
        });

        it('should handle max 1', () => {
            const max = 1;
            for (let i = 0; i < MAX_LOOP; i += 1) {
                const result = util.random(max);
                result.should.greaterThanOrEqual(0, `greater than 0 (${result})`);
                result.should.lessThanOrEqual(max, `less than or equal ${max} (${result})`);
            }
        });

        it('should handle max 0', () => {
            const max = 0;
            for (let i = 0; i < MAX_LOOP; i += 1) {
                const result = util.random(max);
                result.should.greaterThanOrEqual(0, `greater than 0 (${result})`);
                result.should.lessThanOrEqual(max, `less than or equal ${max} (${result})`);
            }
        });
    });

    describe('#randomArrayElement', () => {
        it('should return correct value from simple array without criteria filter', () => {
            const arr = ['a', 'b', 'c', 'd'];

            for (let i = 0; i < MAX_LOOP; i += 1) {
                const item = util.randomArrayElement(arr);
                // console.log(item);
                arr.indexOf(item).should.greaterThanOrEqual(0);
            }
        });

        it('should return correct value using 1 criteria filter', () => {
            const arr = [
                { name: 'a', enabled: true },
                { name: 'b', enabled: true },
                { name: 'c', enabled: false },
                { name: 'd', enabled: true },
                { name: 'e', enabled: true },
            ];

            let hasA; let hasB; let hasC; let hasD; let hasE; let hasF;
            for (let i = 0; i < MAX_LOOP; i += 1) {
                const itemName = util.randomArrayElement(arr, { enabled: true }).name;
                // console.log(itemName);
                should.exists(itemName, 'item name should exists');
                itemName.should.equalOneOf('a', 'b', 'd', 'e');

                hasA = hasA || itemName === 'a';
                hasB = hasB || itemName === 'b';
                hasC = hasC || itemName === 'c';
                hasD = hasD || itemName === 'd';
                hasE = hasE || itemName === 'e';
                hasF = hasF || itemName === 'f';
            }

            hasA.should.ok();
            hasB.should.ok();
            hasC.should.not.ok();
            hasD.should.ok();
            hasE.should.ok();
            hasF.should.not.ok();
        });
    });
});
