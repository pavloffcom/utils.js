interface IsTrue {
    (val: true | 'true'): true;
    <T extends boolean>(val: T): T;
    (val): false;
}

/**
 * Returns true if `val` is true or equal to string 'true'
 *
 * @param val
 * @returns {boolean}
 *
 * @example
 *
 *      isTrue(true) // => true
 *      isTrue('true') // => true
 *      isTrue([true]) // => false
 *      isTrue('false') // => false
 */
export default ((val) => val === true || val === 'true') as IsTrue;
