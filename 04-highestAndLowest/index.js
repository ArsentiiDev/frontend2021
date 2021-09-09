/**
 * highestAndLowest - Modify initial string into new one, that start with highest number and and with lowest:
 * @param {string} numbers - the source numbers
 * @returns {string} - returns the new string
 */
export const highestAndLowest = (numbers) => {
    let min = +Infinity;
    let max = -Infinity
    let numberArray = numbers.split(" ")
    for(let number in numberArray){
        if(parseFloat(numberArray[number])< min) min = numberArray[number]
        if(parseFloat(numberArray[number])>max) max = numberArray[number]
    }
    return [min,max].join(' ')
}
