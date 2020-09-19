/* global describe it */

require('should');

const regexLooperReplace = require('../regex-looper/replace');

describe('#regex-looper/replace', () => {
    it('should return corect result', () => {
        regexLooperReplace(
            'REFID: 520550410074/MASJID.. KATEGORI:S2/900 , PERIODE:092020, JUMLAH:1, TOTAL TAGIHAN : 72.010',
            [
                {
                    pattern: ' *, *',
                    replacement: '/',
                    flags: 'g',
                },
                {
                    pattern: ' *: *',
                    replacement: ':',
                    flags: 'g',
                },
                {
                    pattern: 'TOTAL TAGIHAN*',
                    replacement: 'TOTALTAGIHAN',
                },
            ],
        ).should.equal('REFID:520550410074/MASJID.. KATEGORI:S2/900/PERIODE:092020/JUMLAH:1/TOTALTAGIHAN:72.010', 'TAJIRA PLN POSTPAID');
    });
});
