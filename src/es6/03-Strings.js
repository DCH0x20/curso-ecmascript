
//antes de ecmascript 6

let hello = 'Hello';
let world = 'world';
let epicPhrase = hello + " " +world + '!' ;
console.log(epicPhrase);

//Multi-line strings
let lorem = 'esto es un string \n' + 'esto es otra linea';


//En ecmascript 6
//Template literals -- backticks
let epicPhrase2 = `${hello} ${world}! `;
console.log(epicPhrase2);

//Multi-line strings

let lorem2 = `esta es una frase epica
la continuacion de esa frase epica`;
console.log(lorem)
console.log(lorem2)