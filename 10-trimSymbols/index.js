/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number | undefined} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
    let char = ''
    let count = 0
    if(size==0) return ''
    for(let elem in string){
        if(string[elem]==char){
           count++
        } else {
            if(count>=size) string.slice(count-size+1,elem-1)  
            char = string[elem];
            count = 1
        }
    }
    return string

}
