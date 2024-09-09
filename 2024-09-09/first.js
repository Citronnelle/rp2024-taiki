// #11
const numbriMassiiv = [1,2,3,4,5,6];

const filtreeritudNumbriMassiiv1 = numbriMassiiv.filter(i => i%2 == 0);
const filtreeritudNumbriMassiiv2 = numbriMassiiv.filter((el) => el > 4);

console.log(numbriMassiiv);
console.log({ filtreeritudNumbriMassiiv1 });
console.log({ filtreeritudNumbriMassiiv2: filtreeritudNumbriMassiiv2 });

// #12
const nimeMassiiv = ["Mari", "Jüri", "Kadri", "Mati", "Taavi", "Maali", "Juuli", "August"];

const mapitudMassiiv = nimeMassiiv.map((nimi) => {
    return {
        nimi: nimi,
        vanus: Math.round(Math.random() * 100),
        epost: `${nimi}@firma.ee`,
        aadress: `${nimi} tn ` + Math.round(Math.random() * 200),
        kasutajaNimi: nimi.split("").reverse().join("")
    };
});

console.log({ mapitudMassiiv });

// #13
let muutuja = {
    nimi: nimeMassiiv[Math.round(Math.random() * 8) - 1],
    pikkus: Math.round(Math.random() * 70) + 150
};

console.log({ muutuja });

muutuja = {...muutuja, kaal: Math.round(Math.random() * 100) + 50};

console.log( { muutuja });

// #14
console.log(1 == "1");
console.log(1 === "1");

const lubadus = () => {
    return new Promise((resolve) => setTimeout(() => resolve("done"), 1000));
};

async function Nimi() {
    //return nimeMassiiv[Math.round(Math.random() * 8) - 1];
    return nimeMassiiv[Math.round(Math.random() * 7) % 8];
}

console.log(await Nimi());

const kaivitaLubadus = async () => {
    console.log(await lubadus());
};

kaivitaLubadus();

//setTimeout(() => console.log("timeout"), 2000);

