export const sameParityFilter = (arr = []) => {
    let even = true
    arr[0]%2 ? even = true : even = false
    let newArr = arr.filter((elem)=> {
        if(elem<0) elem = elem*(-1)
        if(even == elem%2) {
            return true
        } else return false
    })
    return newArr
}
