//modulo
// nos permite separar nuestro codigo en otros archivos , llamados modulos y traerlos cuando lo necesitemos.
//nos ayuda a ordenar nuestro codigo

import hello from "./module.mjs";  //llamamos al metodo (hello) del modulo (module)
import {hello} from "./module.mjs"; //nos permite devolver las funciones exportadas con esa sintaxys.
hello();  

//tenemos que decirle en package.json que acepete modulos "type":module
/*
otra forma es agregarle la extension .mjs para que reconozca que es un modulo , tambien agregarle al archivo 
con eso nos evitamos configurar el package.json.
*/