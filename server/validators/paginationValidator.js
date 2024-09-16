/**
 * The maximum limit for the number of items that can be retrieved per request.
 *
 * @constant {number}
 * @default 64
 */
const MAX_LIMIT = 64;

/**
 * Validates if the provided page number is a valid positive integer.
 *
 * This function checks whether the input is a positive integer greater than or equal to 1.
 * It also ensures that the original value matches the parsed integer to prevent non-numeric inputs.
 *
 * @param {any} page - The page number to validate. This can be a string or number.
 * @returns {boolean} - Returns true if the page number is valid, otherwise false.
 *
 * @example
 * // Valid usage
 * const isValid = isValidPage(1); // true
 * const isValid = isValidPage('2'); // true
 *
 * @example
 * // Invalid usage
 * const isValid = isValidPage(0); // false
 * const isValid = isValidPage(-5); // false
 * const isValid = isValidPage('abc'); // false
 * const isValid = isValidPage('1a'); // false
 */
exports.isValidPage = (page) => {
    const parsedPage = parseInt(page, 10);
    return (
        Number.isInteger(parsedPage) &&
        parsedPage >= 1 &&
        page.toString() === parsedPage.toString()
    );
};

/**
 * Validates if the provided limit is a valid integer within a specified range.
 *
 * This function checks whether the input is an integer greater than or equal to 1 and
 * less than or equal to a defined maximum limit. It ensures that the original value
 * matches the parsed integer to prevent non-numeric inputs.
 *
 * @param {any} limit - The limit to validate. This can be a string or number.
 * @returns {boolean} - Returns true if the limit is valid, otherwise false.
 *
 * @example
 * // Valid usage
 * const isValid = isValidLimit(10); // true
 * const isValid = isValidLimit('20'); // true
 *
 * @example
 * // Invalid usage
 * const isValid = isValidLimit(0); // false
 * const isValid = isValidLimit(-5); // false
 * const isValid = isValidLimit(65); // false (assuming MAX_LIMIT is 64)
 * const isValid = isValidLimit('abc'); // false
 * const isValid = isValidLimit('1a'); // false
 */
exports.isValidLimit = (limit) => {
    const parsedLimit = parseInt(limit, 10);
    return (
        Number.isInteger(parsedLimit) &&
        parsedLimit >= 1 &&
        parsedLimit <= MAX_LIMIT &&
        limit.toString() === parsedLimit.toString()
    );
};