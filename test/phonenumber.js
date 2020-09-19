/* global describe it */

require('should');

const phoneNumber = require('../phonenumber');

describe('#phoneNumber', () => {
    describe('#removeNonDigit', () => {
        it('should return correct value', () => {
            phoneNumber.removeNonDigit('(021)-888-88888').should.equal('02188888888');
            phoneNumber.removeNonDigit('Phone: (021)-888-88888').should.equal('02188888888');
        });
    });

    describe('#toInternational', () => {
        it('should return correct value', () => {
            phoneNumber.toInternational('081812345678').should.equal('6281812345678', '081812345678');
            phoneNumber.toInternational('081812345678', '99', true).should.equal('+9981812345678', '081812345678, 99, true');
            phoneNumber.toInternational('081812345678', '99', false).should.equal('9981812345678', '081812345678, 99, false');

            phoneNumber.toInternational('4444').should.equal('624444', '4444');
        });
    });

    describe('#removeCountryCode', () => {
        it('should return correct value', () => {
            phoneNumber.removeCountryCode('628181234').should.equal('8181234', '628181234');
            phoneNumber.removeCountryCode('608181234').should.equal('608181234', '608181234');
            phoneNumber.removeCountryCode('608181234', '60').should.equal('8181234', '608181234, 60');
            phoneNumber.removeCountryCode('628181234', null, true).should.equal('08181234', '628181234, null, true');
            phoneNumber.removeCountryCode('+628181234').should.equal('8181234', '+628181234');
            phoneNumber.removeCountryCode('(62)-8181234').should.equal('8181234', '(62)-8181234');
        });
    });
});
