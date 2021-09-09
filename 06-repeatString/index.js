/**
 * repeatString - Duplicates every char in the string some times according to char index
 * @param {string} str - the string
 * @returns {string} - returns the new string
 */
export const repeatString = (str = '') => {
    let chars = str.split('')
    let counter = 1;
    for(let char in chars) {
        chars[char] =chars[char].repeat(counter)
        chars[char] = chars[char][0].toUpperCase() +chars[char].slice(1)
        counter++
    }
    return chars.join("-")

}
