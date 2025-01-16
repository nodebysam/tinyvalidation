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
 * Validates whether the given URL points to a media platform (YouTube, TikTok, Vimeo, etc.)
 * and allows for custom or additional regex patterns.
 * 
 * @param {string} url - The URL to validate.
 * @param {Object} [options={}] - Options for checking custom or additional regex patterns.
 * @param {Array} [options.customRegexList=[]] - A custom list of regex patterns to match (default is empty).
 * @param {Array} [options.additionalRegexList=[]] - A list of additional regex patterns to check (default is empty).
 * @returns {boolean} True if the URL matches any of the regex patterns, false otherwise.
 */
const isMediaUrl = (url, options = {}) => {
    if (typeof url !== 'string') {
        return false;
    }

    const defaultRegexes = [
        /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/|v\/)|youtu\.be\/)[\w-]{11}/, // YouTube
        /^(https?:\/\/)?(www\.)?tiktok\.com\/(@[\w.-]+\/video\/\d+)/, // TikTok
        /^(https?:\/\/)?(www\.)?vimeo\.com\/\d+$/, // Vimeo
        /^(https?:\/\/)?(www\.)?facebook\.com\/(watch\/\?v=\d+|[\w.-]+\/videos\/\d+)/, // Facebook
        /^(https?:\/\/)?(www\.)?rumble\.com\/v[\d\w]+\/.+$/, // Rumble
        /^(https?:\/\/)?(www\.)?instagram\.com\/p\/[\w-]+/, // Instagram
        /^(https?:\/\/)?(www\.)?twitter\.com\/[\w.-]+\/status\/\d+/, // Twitter
        /^(https?:\/\/)?(www\.)?dailymotion\.com\/video\/[\w-]+/, // Dailymotion
        /^(https?:\/\/)?(www\.)?soundcloud\.com\/[\w-]+\/[\w-]+/, // SoundCloud
    ];

    const regexList = [
        ...defaultRegexes,
        ...(options.customRegexList || []), // Add user-defined custom regexes
        ...(options.additionalRegexList || []), // Add additional regexes
    ];

    return regexList.some(regex => regex.test(url));
};

module.exports = isMediaUrl;