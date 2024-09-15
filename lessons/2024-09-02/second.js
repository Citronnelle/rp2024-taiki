// #1
const massiiv1 = [1,2,3,4,5,6,7,"test"];

function leiaIndeks(hulk, number) {
    return hulk.indexOf(number);    
}

console.log(leiaIndeks(massiiv1, 4));

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
const tere = (nimi = "World") => `Hello ${nimi}`;

console.log(tere());
console.log(tere("Mari"));

// #8
const massiiv2 = [1,2,3,4,5];
const liidaViis = (hulk) => hulk.map(i => i + 5);

console.log(liidaViis(massiiv2));

// #9
const kolmParameetrit = massiiv2.map((element, index, array) => {
    // `Element: ${element}; indeks: ${index}; massiiv: ${array}`;
    const added = 1 + 2;
    return element + 5;
});

console.log( { kolmParameetrit: kolmParameetrit } );