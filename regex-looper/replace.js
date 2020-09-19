/**
 * Do regex replacement multiple operations on original string
 *
 * @author Adhidarma Hadiwinoto <me@adhisimon.org>
 * @date 2020-09-19
 *
 * @param {string} original
 * @param {Object[]} rules - list of rules to applied
 * @param {string} rules[].pattern - regex pattern
 * @param {string} rules[].replacement - replacement string
 * @param {string} [rules[].flags] - regex flags/options
 * @returns {string} result
 */
module.exports = (original, rules) => {
    if (
        !original || typeof original !== 'string'
        || !rules || !Array.isArray(rules) || !rules.length
    ) return original;

    let result = original;
    rules.forEach((item) => {
        if (!item.pattern || !item.replacement) return;

        const re = new RegExp(
            item.pattern,
            item.flags || item.flag || item.options || item.option,
        );

        result = result.replace(re, item.replacement);
    });

    return result;
};
