const promises1 = new Promise((resolve,reject) => reject("Reject"));
const promises2  = new Promise((resolve,reject)=> resolve("resolve 1"));
const promises3 = new Promise((resolve , reject ) => resolve("resolve 2"));

//nos devuelve la primera que se cumpla satisfactoriamente
Promise.any([promises1,promises2,promises3])
.then(response => console.log(response));