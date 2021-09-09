export const getLastWordLength = str => {
    str = str.trim()
    let words = str.split(" ")
    console.log(str)
    if(words[words.length-1]=='') return 0
    else {
        return words[words.length-1].length
    }
};
