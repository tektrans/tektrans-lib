/**
 * @todo selesaikan
 * @date 2020-10-05
 * @param {any} str
 * @returns {any}
 */
const findAllMACAddressInAString = (str) => {
    if (!str || typeof str !== 'string') return [];

    return str.match(/\w+:\w+:\w+:\w+:\w+:\w+/g);
};
exports.findAllMACAddressInAString = findAllMACAddressInAString;
