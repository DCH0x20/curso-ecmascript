//devuelve una matriz de cualquier sub-matriz
const array = [1,1,2,3,4 , [1,3,5,6 , [1,2,4]]]
console.log(array.flat(3)) //le pasamos como argumento la profundidad - 3 niveles

//flat-map : mapea los elementos y luego aplana el resultado
const array2 = [1,2,3,4,5];
console.log(array2.flatMap((v => [v,v * 2]) )); //nos muestra primero el valor y luego multiplicado por 2
