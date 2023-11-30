//cambiar de arrays de arrays a un objeto
const entries = new Map([["name","deyvi"],["age",80]]);
console.log(entries);
console.log(Object.fromEntries(entries));