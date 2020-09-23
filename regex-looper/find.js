/* eslint-disable no-console */

const MODULE_NAME = 'REGEX-LOOPER/FIND';

/**
 * Find first match of rules on a string
 * @date 2020-09-23
 * @param {string} str - string subject to find
 * @param {Object[]} rules - array of rules
 * @param {string} rules[].pattern - regex pattern
 * @param {string} [rules[].flags] - regex flags/options
 * @returns {string} result, null if not found
 * @returns {any}
 */
module.exports = (str, rules, debug) => {
    if (
        !str || typeof str !== 'string'
        || !rules || !Array.isArray(rules) || !rules.length
    ) return null;

    const ruleCount = rules.length;
    let result;
    for (let i = 0; i < ruleCount; i += 1) {
        const rule = rules[i];
        const { pattern } = rule;
        const matchIdx = rule.matchIdx || rule.match_idx;
        const flags = rule.flags || rule.flag || rule.options || rule.option;

        if (debug) {
            console.log(`* DEBUG: ${MODULE_NAME}: `, { pattern, matchIdx, flags });
        }

        const re = new RegExp(pattern, flags);
        const matches = str.match(re);

        result = matches && matches[matchIdx];
        if (result) break;
    }

    return result || null;
};
