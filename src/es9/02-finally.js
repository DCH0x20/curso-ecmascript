//se ejectua siempre al final ya sea que caiga resolve o reject
const anotherFunction = () => {
    return new Promise((resolve , reject) =>{
        if(true){
            resolve('Hey!!');
        }else {
            reject('Whooops!')
        }
    } )
}

anotherFunction()
    .then(resolve => console.log(resolve) ) //podemos tener muchos .then
    .catch(err => console.log(err))
    .finally(() => console.log('Finally'));