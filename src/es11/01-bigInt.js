//hay un limite maximo y minimo de numeros grandes , si pasamos esos numeros los calculos pueden fallar , con BigInt esto se resuelve
const aBigNumber = 283927318739792313n;
const anotherBigNumber = BigInt(283927318739792313);
console.log(aBigNumber);
console.log(anotherBigNumber);
