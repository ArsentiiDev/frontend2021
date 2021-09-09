// TODO: rename function, maybe array-of-arrays

export const chunk = (arr = [], size = 0) => {
let res = []
let index = 0
while(index < arr.length){
    res.push(arr.slice(index, size+index))
    index +=size
}
return res
}
