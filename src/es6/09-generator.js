function* iterate(array){
    for(let value of array){
        yield value;
    }
}

const it = iterate(["Oscar" , "David" , "Ana" , "Ulises" , "Jennifer"]);
console.log(it.next().value);
console.log(it.next().value);



//-----------------------------------------------------------


// Mi Funcion Generador

function* Generador(cualquiera) {
    for(let elemento of cualquiera){
        yield elemento;
    }
}

let funcion_generador = Generador(["Deyvi" , 23 , "Alto" , true]);

console.log(funcion_generador.next().value);
console.log(funcion_generador.next().value);


/*con numeros , no sirve porque se repite*/ 
var valor = [];
for (let j = 0; j < 10; j++) {
    var numero = Math.floor(Math.random()*10);
    valor.unshift(numero); 
}
console.log(valor);

/* con letras */
var numero=[];
for (let j = 1; j <= 10; j++) {
    numero.push(`A00${j}`);
}; 
console.log(numero);
