/* eslint-disable no-console */

const MODULE_NAME = 'REGEX-LOOPER/FIND-ALL';

/**
 * Find all matches of rules on a string
 * @date 2020-10-05
 * @param {string} str - string subject to find
 * @param {Object[]} rules - array of rules
 * @param {string} rules[].pattern - regex pattern
 * @param {string} [rules[].flags] - regex flags/options
 * @returns {Object[]} array of matched rules
 */
module.exports = (str, rules, debug) => {
    if (
        !str || typeof str !== 'string'
        || !rules || !Array.isArray(rules) || !rules.length
    ) return null;

    const ruleCount = rules.length;
    const result = [];
    for (let i = 0; i < ruleCount; i += 1) {
        const rule = rules[i];
        const { pattern } = rule;
        const flags = rule.flags || rule.flag || rule.options || rule.option;

        if (debug) {
            console.log(`* DEBUG: ${MODULE_NAME}: `, { pattern, flags });
        }

        const re = new RegExp(pattern, flags);
        if (str.search(re) >= 0) {
            result.push(rule);
        }
    }

    return result || [];
};
