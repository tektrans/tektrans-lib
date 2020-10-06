/* global describe it */

require('should');

const regexLooperFindAll = require('../regex-looper/find-all');

describe('#regex-looper/find-all', () => {
    it('should return corect result', () => {
        regexLooperFindAll(
            'Pembelian sebesar Rp. 5000 BERHASIL',
            [
                { pattern: '5000', keyword: 'S5' },
                { pattern: '5000', keyword: 'XL5' },
                { pattern: '10000', keyword: 'S10' },
                { pattern: '10000', keyword: 'XL10' },
            ],
        ).map((item) => (item.keyword)).should.containEql('S5', 'XL5');

        regexLooperFindAll(
            'Pembelian sebesar Rp. 5000 BERHASIL',
            [
                { pattern: '5000', keyword: 'S5' },
                { pattern: '5000', keyword: 'XL5' },
                { pattern: '10000', keyword: 'S10' },
                { pattern: '10000', keyword: 'XL10' },
            ],
        ).map((item) => (item.keyword)).should.not.containEql('S10', 'XL10');

        regexLooperFindAll(
            'Pembelian sebesar Rp. 10000 BERHASIL',
            [
                { pattern: '5000', keyword: 'S5' },
                { pattern: '5000', keyword: 'XL5' },
                { pattern: '10000', keyword: 'S10' },
                { pattern: '10000', keyword: 'XL10' },
            ],
        ).map((item) => (item.keyword)).should.containEql('S10', 'XL10');

        regexLooperFindAll(
            'Pembelian sebesar Rp. 5000 BERHASIL',
            [
                { pattern: '5000', keyword: 'S5' },
                { pattern: '5000', keyword: 'XL5' },
                { pattern: '10000', keyword: 'S10' },
                { pattern: '10000', keyword: 'XL10' },
            ],
            true,
        ).keyword.should.equal('S5');
    });
});
