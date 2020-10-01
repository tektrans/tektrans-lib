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

/**
 * Return an integer beetwen 0 to less than max (inclusive 0, but not max)
 * @date 2020-10-01
 * @param {number} max
 * @returns {number}
 */
const random = (max) => Math.floor(Math.random() * Math.floor(max));
exports.random = random;

/**
 * Get a random array element
 * @date 2020-10-01
 * @param {any[]} arr - array to search
 * @param {Object} criteria - key/value object to filter
 * @returns {any} random array element
 */
const randomArrayElement = (arr, criteria) => {
    const criteriaList = criteria && typeof criteria === 'object' && Object.entries(criteria);
    const criteriaCount = criteriaList && criteriaList.length;

    if (!arr) return null;

    const arrToSearch = !criteriaCount
        ? arr
        : arr.filter((arrItem) => {
            if (typeof arrItem !== 'object') return false;

            const invalid = criteriaList.find((criteriaItem) => {
                const [key, value] = criteriaItem;
                return arrItem[key] !== value;
            });

            return !invalid;
        });

    if (!arrToSearch || !Array.isArray(arrToSearch) || !arrToSearch.length) return null;
    const arrCount = arrToSearch.length;
    const idx = random(arrCount);
    return arrToSearch[idx];
};
exports.randomArrayElement = randomArrayElement;
