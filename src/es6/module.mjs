const hello = () =>{
    console.log("Hello!");
}

export default hello;   //nos ayuda a importar el modulo en otro archivo , default , se usa para devolver solo un metodo.
export {hello} ; // nos permite devolver mas de una funcion
