/**
 * largestPairSum - Returns sum of highest and lowest values in array:
 * @param {array} numbers - the array of numbers
 * @returns {number} - returns the new number
 */
export const largestPairSum = (numbers) => {
    let max1 = -Infinity;
    let max2 = -Infinity;
    for(let number in numbers) {
        if(parseFloat(numbers[number])>max1) {
            max1 = parseFloat(numbers[number])
        }
    }
    for(let number in numbers) {
        if(parseFloat(numbers[number])>max2 && parseFloat(numbers[number])!=max1) { 
            max2 = parseFloat(numbers[number])
        }
    }
    return max1+max2
}
