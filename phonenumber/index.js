const DEFAULT_COUNTRY_CODE = '62';

/**
 * Remove non digit/numeric charaters from a phone number.
 *
 * @date 2020-09-19
 * @param {string} phoneNumber
 * @returns {string} phoneNumber without any non digit character
 */
const removeNonDigit = (phoneNumber) => (phoneNumber || '')
    .trim()
    .replace(/\D/g, '');
exports.removeNonDigit = removeNonDigit;

/**
 * Convert domestic phone number to international phone number
 * @date 2020-09-19
 * @param {string} phoneNumber
 * @param {string} [countryCode] - optional country code, will used '62' as default value
 * @param {boolean} includePlusSign - true if you want to include plus sign in front of phone number
 * @returns {string} - converted phone number in international format
 */
const toInternational = (phoneNumber, countryCode, includePlusSign) => {
    const cleanedPhoneNumber = removeNonDigit(phoneNumber);

    const cc = countryCode || DEFAULT_COUNTRY_CODE;
    let internationalNumber = includePlusSign ? '+' : '';

    if (phoneNumber.indexOf(cc) === 0) {
        internationalNumber += cleanedPhoneNumber;
        return internationalNumber;
    }

    internationalNumber += `${cc}${cleanedPhoneNumber.replace(/^0+/, '')}`;

    return internationalNumber;
};
exports.toInternational = toInternational;

/**
 * Remove country code from phone number.
 * @date 2020-09-19
 * @param {string} phoneNumber
 * @param {string} countryCode
 * @param {boolean} includeZeroAsFirstChar
 * @returns {string}
 */
const removeCountryCode = (phoneNumber, countryCode, includeZeroAsFirstChar) => {
    const cc = countryCode || DEFAULT_COUNTRY_CODE;
    const pattern = `^${cc}`;
    const re = new RegExp(pattern);

    return removeNonDigit(phoneNumber).replace(re, includeZeroAsFirstChar ? '0' : '');
};
exports.removeCountryCode = removeCountryCode;
