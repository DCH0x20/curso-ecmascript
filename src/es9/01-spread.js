const user = {username : 'deyvi' , age : 23 , country: 'PE'};
const { username,...values } = user;
console.log(username);
console.log(values);