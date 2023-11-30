//declarando la clase
class User {
}
class user {
    //metodos
    greeting() {
        return 'Hello';
    }
};

const newUser = new user(); //instancia de una clase
console.log(newUser.greeting());

const herencia = new user();   //herencia
console.log(herencia.greeting())

//constructor
class user {
    constructor(nombre='Deyvi'){
        console.log('nuevo usuario ' + nombre);
    }
    greeting() {
        return 'Hello';
    }
}
const newUser1 = new user();

//this -- hace referencia al elemento padre que lo contiene

class user {
    constructor(name) {
        this.name = name;
    }
    //metodos
    speak(){
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name} `;
    }
}
const ana = new user('Ana');
console.log(ana.greeting());


//setters and getters

class user {
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
    //metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        console.log(`${this.speak()} ${this.name}`)
    }
    get uAge(){   //obtener el valor
        return this.age;
    }
    set uAge(n){  //modificar un valor
        this.age = n;
    }
}

const dev = new user('Deyvi',16);
console.log(dev.uAge);
console.log(dev.uAge = 20);