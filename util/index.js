/**
 * Some common functions
 */

/**
 * String-string yang dianggap bernilai FALSE
 */
const FALSE_STRINGS = [
    '0',
    'FALSE',
    'N/A',
    'NA',
    'NO',
    'NULL',
    'DISABLE',
    'DISABLED',
    'OFF',
    'UNCHECK',
    'UNCHECKED',
    'UNDEFINED',
    'UNKNOWN',
    'INVALID',
];
exports.FALSE_STRINGS = FALSE_STRINGS;

/**
 * Sleep promise
 * @param {number} ms - milliseconds to sleep
 */
const sleep = (ms) => new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, ms);
});
exports.sleep = sleep;

/**
 * Get keyword from Express request object.
 * @param {Object} req - Express request object
 * @param {string} keyword - keyword to extract
 * @returns {any} value
 */
const getFromBodyOrQueryOrParams = (req, keyword) => req && (
    (typeof req.body === 'object' && req.body && req.body[keyword])
    || (typeof req.query === 'object' && req.query && req.quer[keyword])
    || (typeof req.params === 'object' && req.params && req.params[keyword])
);
exports.getFromBodyOrQueryOrParams = getFromBodyOrQueryOrParams;

/**
 * Memeriksa sebuah string apakah bernilai seperti TRUE.
 *
 * Biasa digunakan untuk memeriksa flag boolean dari masukan bertipe string,
 * misalkan pada query string.
 *
 * @param {string} str - string yang ingin diperiksa
 * @returns {boolean} TRUE jika string bernilai equivalent dengan TRUE,
 * FALSE jika tidak atau str tidak bertipe string
 */
const isAStringWithTrueValue = (str) => {
    if (!str) return false;
    if (typeof str !== 'string') return false;
    if (!(str || '').trim()) return false;

    if (FALSE_STRINGS.indexOf((str || '').trim().toUpperCase() >= 0)) return false;

    return true;
};
exports.isAStringWithTrueValue = isAStringWithTrueValue;

const random = (max) => Math.floor(Math.random() * Math.floor(max));
exports.random = random;
