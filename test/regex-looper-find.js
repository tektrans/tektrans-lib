/* global describe it */

require('should');

const regexLooperFind = require('../regex-looper/find');

describe('#regex-looper/find', () => {
    it('should return corect result', () => {
        regexLooperFind(
            'REFID: 520550410074/MASJID.. KATEGORI:S2/900 , PERIODE:092020, JUMLAH:1, TOTAL TAGIHAN : 72.010',
            [
                {
                    pattern: 'PERIODE:(\\d+)',
                    matchIdx: 1,
                },
            ],
        ).should.equal('092020', '#957D8C4C');

        regexLooperFind(
            'REFID: 520550410074/MASJID.. KATEGORI:S2/900 , PERIODE:092020, JUMLAH:1, TOTAL TAGIHAN : 72.010',
            [
                {
                    pattern: 'periode:(\\d+)',
                    matchIdx: 1,
                    flags: 'i',
                },
            ],
        ).should.equal('092020', '#C91E5AE6');

        regexLooperFind(
            'REFID: 520550410074/MASJID.. KATEGORI:S2/900 , PERIODE:092020, JUMLAH:1, TOTAL TAGIHAN : 72.010',
            [
                {
                    pattern: 'xxxxxx(\\d+)',
                    matchIdx: 1,
                },
                {
                    pattern: 'periode: *(\\d+)',
                    matchIdx: 1,
                    flags: 'i',
                },
                {
                    pattern: 'jumlah:(\\d+)',
                    matchIdx: 1,
                    flags: 'i',
                },
            ],
        ).should.equal('092020', '#C91E5AE6');
    });
});
