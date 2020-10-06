/* eslint-disable no-console */

// const MODULE_NAME = 'REGEX-LOOPER/FIND-ALL';

/**
 * Find all matches of rules on a string
 * @date 2020-10-05
 * @param {string} str - string subject to find
 * @param {Object[]} rules - array of rules
 * @param {string} rules[].pattern - regex pattern
 * @param {string} [rules[].flags] - regex flags/options
 * @param {boolean} returnOneRule - is only return object of first match
 * @returns {Object[]|Object} matched
 */
module.exports = (str, rules, returnOneRule) => {
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

        const re = new RegExp(pattern, flags);
        if (str.search(re) >= 0) {
            result.push(rule);
            if (returnOneRule) break;
        }
    }

    return returnOneRule ? (result && result[0]) || null
        : result || [];
};
