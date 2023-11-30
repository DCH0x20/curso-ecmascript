//trim-start : quita los espaciose blanco del inicio ;
//trim-end : quita los espaciose blanco del final ;
//trim : quita los espaciose blanco del inicio y final;

const hello = '      Hello World!     ';
console.log(hello.trimStart());
console.log(hello.trimEnd());
console.log(hello.trim());