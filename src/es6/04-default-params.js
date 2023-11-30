
//Antes de ECMASCIPT 6

function newUser(name,age,country){
    var name = name || 'Deyvi'; //toma Deyvi si no recibe nada en name
    var age = age || 23
    var country = country  || 'PE'
    console.log(name,age,country);
}

newUser();

newUser('Oscar', 15 , 'UK');


//En ECMASCRIPT 6
//mas ordenado
function newAdmin(name='Deyvi' , age = 23 , country = 'CR'){
    console.log(name,age,country);
}

newAdmin();
newAdmin('Lee',30,'AR');