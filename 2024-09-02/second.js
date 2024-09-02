// #1
const massiiv = [1,2,3,4,5,6,7,"test"];

function leiaIndeks(hulk, number) {
    return hulk.indexOf(number);    
}

console.log(leiaIndeks(massiiv, 4));

// #2
function liidaMeetodiga(num1, num2){
    return num1 + num2;
}

console.log(liidaMeetodiga(2,3));

// #3
const liidaNoolega = (num1, num2) => { 
    return num1 + num2;
}

console.log(liidaMeetodiga(2,3));

// #4
const liidaLyhemalt = (num1, num2) => num1 + num2;

console.log(liidaLyhemalt(2,3));

// #5
function liidaPesas(num1) {
    return function (num2) {
        return num1 + num2;
    }
}

console.log(liidaPesas(3)(4));

// #6
const liidaLyhemaltPesas = (num1) => (num2) => num1 + num2;

console.log(liidaLyhemaltPesas(6)(7));

// #7
