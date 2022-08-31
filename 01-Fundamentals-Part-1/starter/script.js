/* 
       ----------VARIJABLE------------------

-Varijabla u sustini oznacava imenovanu memorijisku lokaciju
koja je pogodna za cuvanje odredjenog tipa podatka kojeg zelimo
(string , number, bulean...).

Pravila za davanje imena varijablama:

-Ne pisano pravilo je da se koristi takozvani "camelCase"
primer: let firstName = "Bojan";

-Ne mozemo poceti imenovanje varijable sa brojem.

-Imena varijabli mogu da sadrze: slova , brojeve(ali ne mogu da pocinju sa brojevima),doljnje crte, znak dolar.

-Takodje ne mozemo da koristimo rezervisane kljucne JavaScript reci u imenovanju varijabli kao sto su:
new , function , this...

-Kada imenujem varijablu sa sve velikim slovima to znaci da se ona nikad ne menja tj. constantna je.

*/
let firstName = "Matilda";

let PI = 3.14;

console.log(firstName);


/*
----------------TIPOVI PODATAKA U JS-U-----------------

- U javaScript-u postoje dvije vrste ili tipa podataka, to su objekti ili primitivne
vrste podataka(string, boolean, number etc.).

-Postoje 7 vrsta primitivnih ili prostih podataka u javaScriptu:
    1.Number let age = 23;
    2.string let firstName = "Bojan";
    3.Boolean let fullage = true;
        Ovo je logicki tip podatka koji moze biti samo true ili false
    4.undefined let children;
        Ovo je vrijednost varijable koja jos nije difinisana
    5. null 
        Isto kao undefined samo se koristi u drugacijim okolnostima
    6.Symbol
        Ova vrsta podatka je prestavljena kada je izasao ES6 i prestavlja vrednost koja 
        je nikatna i nemoze da se menja.
    7.BigInt
        To su intigeri koji su previse veliki da bi bili obicni brojevi


-JavaScript ima dinamicno tipovanje podataka.
Sto znaci da ne moramo manuelno da dodjelimo tip i vrstu podatka varijabli.
JavaScript to radi automacki.Sto nije slucaj u vecini programski jezika.
*/

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// U JavaScriptu postoji operator typeof koji prikazuje vrstu podatka u varijabli

console.log( typeof javaScriptIsFun);

/* 
----------------DEKLARACIJA VARIJABLI U JS-U-----------------

U javaScriptu postoje tri nacina deklarijanja varijbli
1.var (stari nacin koji se koristi prije izlaska ES6 standarda)
2.let
3.const 

*/

//let deklaracija se koristi kada znamo da ce ta varijabla u nekom trenutku da se promeni

let age = 34;

age = 35;

//const deklaracija se koristi kada znamo da se vrednost podatka u varijabli nikad nece menjati u buducnosti

const birthYear = 1988;

//godina rodjenja se nikad ne menja

console.log(birthYear);

//birthYear = 1987; ovo nije validno u JavaScriptu, ne mozemo da menjamo const varijable

/*
VAZNOOO!!!

Za razliku od let ili var deklaracije varijabli const deklaraciji
moramo da dodjelimo pocetnu vrednost

const job; ovo nije validno u JS-u

*/

/* 
----------------OPERATORI U JS-U-----------------

*/

// - operator
const now = 2022;
const ageBojan = now - 1988; 
const ageFilip = now - 2012;

console.log(ageBojan ,ageFilip);

console.log(2 ** 3)
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// + operatoer mozemo da koristimo kao obicno sabiranje dva broja ili da spojimo dva stringa

const firstName = 'Bojan';
const lastName = 'Mrkaja';

console.log(firstName +' '+ lastName);

let x = 10 + 5; // 15
x += 10 //x = x + 10 = 25
x *= 4 // x = x * 4 = 100
x++; // x = x + 1;
x--; // x = x - 1;

console.log(x);

//Comparison operators
// console.log(ageBojan > ageFilip) // > , > , <= >=b;
// Operatori poredjenja uvjek vracaju boolean vrednost tj. true ili false


const marksWeight = 78;
const marksHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

const marksBmi = marksWeight / marksHeight ** 2;
const johnBmi = johnWeight / johnHeight ** 2;

console.log(marksBmi , johnBmi);

const markHigherBMI = marksBmi > johnBmi;

console.log(markHigherBMI);


const firstName = 'Bojan';
const job = 'frontend developer';
const birthYear = 1988;
const year = 2022;

const bojan = `I'am ${firstName}, a ${year - birthYear} years old ${job}!`;
//Ovo je primjer templete literals ili template stringa...laksi nacin spajanja stringova i varijabli u JS-u.

console.log(bojan);

/* 
----------------IF ELSE STATEMENTS-----------------
*/

const age = 13;
const isOldEnought = age >= 18;

if (isOldEnought) {
    console.log(`Sarah can start driving licence`);
}else{
    console.log(`Sarah can't start driving licence , she is under age for driving licence`);
}


const birthYear = 2012;

let century;
/* 
Uvjek moramo deklarisati varijablu van if else bloka i onda mozemo da menjamo tu varijablu
u zavisnosti na uslove u if elese bloku.
*/
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);

const marksWeight = 78;
const marksHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

const marksBmi = marksWeight / marksHeight ** 2;
const johnBmi = johnWeight / johnHeight ** 2;


if (marksBmi > johnBmi) {
    console.log(`Mark's BMI (${marksBmi}) is higher than John's(${johnBmi})`);
}else{
    console.log(`John's BMI (${johnBmi}) is higher than Mark's BMI (${marksBmi})`);
}


/* 
----------------TYPE CONVERSION AND COERCION-----------------
*/

//Type conversion je kada manuelno promjenimo tip podatka.Naprimer kada promjenimo string u broj.
const inputYear = '1991';
console.log(Number(inputYear));
console.log(typeof inputYear);
console.log(String(23));

//Type coercion

/* 
----------------TRUTHY AND FALSY VALUES-----------------
*/

//U JS-u postoji 5 falsy vrednosti: 0 , '' , undefined , null , NaN
//U sustine sve ostale vrednosti su truthy vrednosti : bilo koji broj , bilo koji string itd.


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Bojan'));
console.log(Boolean({}));

const money = 0;

if (money) {
    console.log(`Don't spent it all!!`);
}else{
    console.log(`You should get a job!!`)
}

/* 
----------------OSNOVNA BOOLEAN LOGIKA-----------------
*/

const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = false;

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log(`Sarah is able to drive!!`)
}else{
    console.log(`someone else should drive.`)
}

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
    console.log(`Sarah is able to drive!!`)
}else{
    console.log(`someone else should drive.`)
}

// Coding Challenge #3

const dolphinsAvergeScore = (96 + 108 + 89) / 3;
const koalasAvergeScore = (88 + 91 + 110) / 3;

if (dolphinsAvergeScore > koalasAvergeScore) {
    console.log(`Dolphins has highest average score of ${dolphinsAvergeScore} and wins a trophy!`)
}else if( dolphinsAvergeScore === koalasAvergeScore){
    console.log(`Dolphins and Koalas average score are same and no one wins a trophy!`);
}else{
    console.log(`Koalas has highest average score of ${koalasAvergeScore} and wins a trophy!`)
}

//Bonus 1

const dolphinsAvergeScore = (97 + 112 + 101) / 3;
const koalasAvergeScore = (109 + 95 + 123) / 3;

console.log(dolphinsAvergeScore, koalasAvergeScore);

if (dolphinsAvergeScore > koalasAvergeScore && dolphinsAvergeScore >= 100) {
    console.log(`Dolphins wins a trophy!`);
}else if(koalasAvergeScore > dolphinsAvergeScore && koalasAvergeScore >= 100){
    console.log(`Koalas wins a trophy!`);
}else{
    console.log(`no one wins`);
}

//Bonus 2

const dolphinsAvergeScore = (97 + 112 + 101) / 3;
const koalasAvergeScore = (109 + 95 + 106) / 3;

console.log(dolphinsAvergeScore, koalasAvergeScore);

if (dolphinsAvergeScore === koalasAvergeScore && dolphinsAvergeScore >= 100 && koalasAvergeScore >= 100) {
    console.log(`It's a draw`);
}

/* 
----------------THE SWITCH STATEMENT-----------------
*/

const day = 'ponedeljak';

switch (day) {
    case 'ponedeljak': // day === 'ponedeljak'
        console.log('Idem na dosadan posao');
        break;
    case 'utorak':
        console.log('Borim se sa depresijom');
        break;
    case 'sreda':
    case 'cetvrtak':
        console.log('Nikad gori dani');   
        break;
    case 'petak':
        console.log('Petak je smor jer u subotu moram da radim'); 
        break;
    case 'subta':
    case 'nedelja':
        console.log('U subotu radim a u nedelju kao odmaram');
        break;
    default:
        console.log('nije validan dan');
}

/* 
----------------STATEMENTS AND EXPRESSIONS-----------------
*/

//Izraz ili expressions je u sustini dio koda koji ce da proizvede neku vrednost

/* 
----------------THE CONDITIONAL (TERNARY) OPERATOR-----------------
*/

const age = 23;

age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

