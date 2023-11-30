//ASIGNACION DE DESESTRUCTURACION -- ARRAYS Y OBJETOS

//ARRAYS DESTRUCTURING
let fruits = ['Apple','Banana'];
let [a,b] = fruits; // se destructura y se asigna a las variables a y b
console.log(a,b);
console.log(b);
console.log(a,fruits[1]);

//OBJECT DESTRUCTURING

let user = {Username:'Deyvi' , age:23};
let{Username , age} = user;
console.log(Username,age);

//----- SPREAD OPERATOR ---------------
let person = {name:'Deyvi' , age:23};
let country = 'PE';

let data = {id:1 , ...person , country} //con los tres puntos trae los elementos de un objeto a otro
console.log(data);

//------- REST ---------------------
function sum(num,...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}
sum(1,3,2,5,4,3,4);
