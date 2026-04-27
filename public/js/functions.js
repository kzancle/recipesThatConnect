function nullVerify(input){
    let isNull = false
    if(input == null){
        isNull = true
    }
    return isNull
}

function existsVerify(input, item){
    let exists = input.includes(item)
    return exists
}