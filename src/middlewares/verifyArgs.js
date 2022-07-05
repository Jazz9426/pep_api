function verifyArgs(data, require){
    for (let element of require){
        if (!(element in data))
            return false
    }
    return  true
}

module.exports=verifyArgs