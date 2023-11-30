//capturar valores en grupos 
const regex = /(\d{4})-(\d{2})-(\d{2})/; //formato fecha
const matchers = regex.exec('2022-01-01');
console.table(matchers);