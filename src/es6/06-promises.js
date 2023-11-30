//PROMESAS 
// es una forma de trabajar el asincronismo , es decir , que la informacion que pedimos nos lo devuelva en un tiempo x 
//las otras formas de trabajo son : callbacks , async - await .
//para esta version , se usaban las promesas.
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
    .catch(err => console.log(err));


const otraFuncion = resultado => {
    resultado = 12 + 3 ;
    return new Promise((resolve,reject)=> {
        if(true){
            resolve(resultado);
        }else{
            reject("Algo paso !!")
        }
    }) 
    
}

otraFuncion()
.then((respuesta ) => { 
    console.log(respuesta); 
})
.catch(error => console.error(error));



//promesas con funcion declarativa
function nombre() {
    return new Promise((resolve , reject) => {
        resolve("Hola");
        reject("Adios");
    })
}

nombre()
.then(resultado => resultado)
.catch(resultado => resultado)