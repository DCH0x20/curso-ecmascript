/*
18.3 EJERCICIO 3
Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla los doce nombres utilizando la función console.log().
*/ 

let meses = ["Enero" , "Febrero" , "Marzo", "Abril" , "Mayo" , "Junio" , "Julio" ,"Agosto","Setiembre","Octubre","Noviembre","Diciembre"];

meses.forEach((elemento) =>{
    console.log(elemento)
})


for(let i=0 ; i < meses.length ; i++){
    console.log(meses[i]);
}

/*
18.4 EJERCICIO 4
A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola", "adios", 2];

1.-Determinar cual de los dos elementos de texto es mayor
2.-Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false
3.-Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos

*/
let textos = ["hola","adios"];

var valores = [true, 5, false, "hola", "adios", 2];

valores.forEach((elemento)=>{
    if(elemento === "hola"){
        if(elemento > elemento + 1){
            console.log(`el ${elemento} es mayor que ${elemento + 1}`)
        }
    }
})