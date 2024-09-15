/**
 * Validates if the given ID is a positive integer.
 *
 * This function checks if the input ID is a string or a number and ensures that it is a valid positive integer.
 * It parses the ID, checks if it is an integer, greater than zero, and verifies that the input matches the parsed integer.
 *
 * @param {string|number} id - The ID to validate. It can be a string or a number.
 * @returns {boolean} - Returns true if the ID is a valid positive integer, otherwise false.
 *
 * @example
 * // Valid cases
 * isValidId(5);             // returns true
 * isValidId("10");          // returns true
 * isValidId("12345");       // returns true
 *
 * // Invalid cases
 * isValidId(-3);            // returns false
 * isValidId(0);             // returns false
 * isValidId("5.5");         // returns false
 * isValidId("ab51");        // returns false
 * isValidId("1a");          // returns false
 * isValidId("abc");         // returns false
 * isValidId(NaN);           // returns false
 * isValidId(null);          // returns false
 */
exports.isValidId = (id) => {
    const parsedId = parseInt(id, 10);
    return Number.isInteger(parsedId) && parsedId > 0 && id.toString() === parsedId.toString();
};