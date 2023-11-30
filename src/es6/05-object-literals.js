//enahced object literals

//ANTES
//retorna un objeto con los valores pasados
function newUser(user, age, country , uId){
    return {
        user : user,
        age : age,
        country : country,
        id : uId
    }
}

console.log(newUser("Deyvi" , 23 , 'PE', 1));



//DESPUES
function newUser(user, age, country , uId){
    return {
        user,
        age,
        country,
        uId
    }
}

console.log(newUser("Deyvi" , 23 , 'PE', 1));



