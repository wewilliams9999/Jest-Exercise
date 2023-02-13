exports.sum = (a,b) => {
    return a+b
}

exports.deleteUserById = (array, id)=>{
    return array.filter(user=>user.id !==id);
}