var lastName = 'Deyvi';
lastName = 'Oscar';
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

//con const no se puede sobreescribir una constante como en let y var
const animal = 'Dog';
animal  = 'Cat';
console.log(animal);



const frutas = ['platano' , 'uvas ' , 'cereza'];
frutas = ['manzana' , 'pera', 'durazno']  //no se puede porque se esta haciendo referencia a la constante fruta

console.log(frutas);
frutas.pop()
frutas[1] = 'papaya';     //si se puede porque se hace referencia al array y el array es mutable , y no se hace referencia a la variable.
frutas.push('manzana');
console.log(frutas);



const fruits = () => {
    if(true){
        var fruit1 = 'Apple';     //function scope -- dentro de la funcion podemos acceder a esa variable
        let fruit2 = 'Kiwi';      //block scope -- solo se pueden acceder a estas variables donde son declaradas (dentro del if)
        const fruit3 = 'Banana';  //block scope
    }

    console.log(fruit1);
    console.log(fruit2); //error
    console.log(fruit3)  //error
}

fruits();


if (true){
    var hola = "saludo";
    console.log(hola)
}

console.log(hola);

function mi_funcion(){
    return hola
};

console.log(mi_funcion());


function mi_funcio1(){
    if (true){
        let adios = "despedida";  // se puede utilizar en la condicional y la condicional que contiene a esta , mas no en la funcion.
        console.log(adios);
        if(true){
            console.log(adios)
        }
    }
    console.log(adios);
}

mi_funcio1()









