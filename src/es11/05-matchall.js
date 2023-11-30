//esta relacionado a regex , nos permite buscar una cadena de texto dentro de un regex.
const regex = /\b(Apple)+\b/g;
const fruit = 'Apple , Banana , Kiwi , Apple , Orange';
for(const match of fruit.matchAll(regex)){
    console.log(match);
}