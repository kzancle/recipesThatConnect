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

function existsSpecial(pass){
    let specials = ["!","@","#","$","%","¨","&","*", "(", ")", "-", "_", "+", "-", "=", "?",">", "<"]
    let exists = false
    for (let i = 0; i < specials.length; i++) {
        if(pass.includes(specials[i])){
            exists = true
        }
    }
    return exists
}

function pontuationPass(pass){
        let points = 0
        let reSpecial = new RegExp("/[a-zA-Z0-9]/g+$");
        let reUpper = new RegExp("[A-Z]");
        let reNumber = new RegExp("[0-9]");
        if(pass.length>=8){
            points+= 1
        }

        if(reUpper.test(pass)){
            points+=1
        }

        if(reNumber.test(pass)){
            points+=1
        }

        if(existsSpecial(pass) == true){
            points+=1
        }

        

        return points
    }