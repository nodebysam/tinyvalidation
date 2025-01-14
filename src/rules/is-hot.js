/**
 * TINY VALIDATION
 * A minimalistic NodeJS data validation library
 * 
 * By Sam Wilcox <wilcox.sam@gmail.com>
 * 
 * This library is relased under the GNU v3.0 license.
 * For further details, see the LICENSE file.
 */

/**
 * Validates whether the value is considered, "HOT".
 * A good example is within bulletin board systems:
 * A topic is HOT because it met and/or exceeds a set value.
 * 
 * @param {any} value - The value to validate.
 * @param {Object} [thresholds={}] - The thesholds the value(s) must meet and/or exceed to be "HOT".
 * @param {number[]} [thesholds.map=[50]] - The thresholds mapping (e.g., [50, 100, 200, 250]).
 * @param {boolean} [thresholds.meet=true] - True to mark as hot if the value meets the mapping, false not to mark.
 * @param {boolean} [thesholds.exceed=true] - True to mark as hot if the value exceeds the mapping, false not to mark.
 * @param {boolean} [thresholds.meetEach=false] - True to meet all thresholds, false to just meet one single threshold (default: false).
 * @param {boolean} [thresholds.exceedEach=false] - True to exceed all thesholds, false to just exceed one single threshold (default: false).
 * @returns {boolean} True if the value is HOT, false it NOT HOT.
 */
module.exports = (value, thresholds = []) => {
    const {
        map = [50],
        meet = false,
        exceed = false,
        meetEach = false,
        exceedEach = false,
    } = thresholds;

    if (value === undefined || value === null) {
        throw new Error('Missing value to validate.');
    }

    // Handle "meetEach" and "exceedEach" first, as they require stricter conditions
    if (meetEach && exceedEach) {
        // If both meetEach and exceedEach are true, the value must meet and exceed all thresholds
        return map.every(threshold => value === threshold) && map.every(threshold => value > threshold);
    } else if (meetEach) {
        // If only meetEach is true, the value must meet all thresholds
        return map.every(threshold => value === threshold);
    } else if (exceedEach) {
        // If only exceedEach is true, the value must exceed all thresholds
        return map.every(threshold => value > threshold);
    }

    // Handle the "meet" and "exceed" cases
    if (meet && exceed) {
        // If both meet and exceed are true, the value must meet or exceed at least one threshold
        return map.some(threshold => value === threshold) || map.some(threshold => value > threshold);
    } else if (meet) {
        // If only meet is true, the value must meet at least one threshold
        return map.some(threshold => value === threshold);
    } else if (exceed) {
        // If only exceed is true, the value must exceed at least one threshold
        return map.some(threshold => value > threshold);
    }

    // If neither meet nor exceed is true, return false
    return false;
};