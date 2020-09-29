/* global describe it */

require('should');

const util = require('../util');

const MAX_LOOP = 100;

describe('#util', () => {
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
});
