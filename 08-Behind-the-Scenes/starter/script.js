'use strict';
/*
Java Script je:

1.Hight- level programski jezik
Svakom programu su potrebni resursi racunara kao sto su memorija ili CPU(procesor).
U ovom smislu high-level znaci da programer ili developer ne mora  manuelno da upravlja resursima 
na primer ne mora da "memoriju" za prostor da bi kreirao varijablu vec se to automacki radi u pozadini tj. u javaScript engin-u.

Postoje i low-level programski jezici kao sto su C gde diveloper manuelno upravlja resursima.
Rezultat toga je da su programi pisani u C ili nekom drugom low-level jeziku mnogo brzi i optimizovaniji
nego programi pisani u high-level jezicima. 


2.Garbage-collected
Je u sustini algoritam u JavaScript enginu koji cisti stare i nepotrebne objekte iz memorije


3.Interpreted or just-in-time compiled
Sa obzirom da CPU(procesor) razume samo nule i jedinice svaki program mora da bude napisan sa jedinicam i nulama.
Koji se drugacije naziva machine code ili masinski kod.Sa obzirom da masinski kod nije praktican za pisanje mi pisemo kod 
koji je razumljiv.Ali taj kod mora da se prevede u masinski kod kako bi ga racunar razumeo.U slucaju JavaScripta ovo se desava
u JavaScript engin-u.


4.Multi-paradigm
U programiranju paradigm je sveobuhvatni pristup strukturisanju koda.

Tri popularna paradigma su:
-Procedural programmin
-Object-oriented programming
-Functional programming


5.Prototype-based object-oriented
Kao prvo skoro sve u JavaScriptu je objekat sem primitivnih tipova podataka kao sto su brojevi, stringovi itd.
Ali na primer nizovi(array's) su objekti u stvari a ne poseban tip podatka.
Mozemo da koristimo razne array metode kao sto su push ili indexOf zahvaljujuci prototype inheritance sistemu.
U sustini mi kreiramo nizove(array's) iz Array sablona koji se naziva prototype.
Ovaj Prototype sadrzi sve array metode i onda nizovi(array's) u nasem kodu nasledjuju sve metode Array Prototype-a.


6.First-class functions
JavaScript je jezik sa first-class funkcijamasto znaci da se funkcije tretiraju kao varijable.
Sto znaci da mozemo da ih dodajemo kao argumente u druge funkcije ili da ih vratimo(return) iz drugih funkcija.
Ovo nam omogucava da koristimo functional programming

7.Dynamic
JavaScript je dinamicki kucan programski jezik sto u sustini znaci da ne moramo manuelno da dodeljuje tip podatka varijablama.
JavaScript engine detektuje tip podatka u varijabli kada se kod izvrsi.Ovako lako mozemo da menjamo tip podatka koji cuvamo u varijabli.
Na primer ako smo inicijalno kreirali varijablu sa brojem kao tipom podatka poslje lako mozemo da promenimo da bude string, boolean, objekat ili nesto drugo.

8.Single-threaded , non-blocking event loop
Non-blocking Concurrency model:nacin na koji se JavaScript engine nosi sa vise zadataka koji se desavaju u isto vrijeme.
Ovo je potrebno zato sto javaScript single-threaed sto znaci da moze da izvrsava samo jednu po jednu stvar.
JavaScript koristi event loop za zatatke kojima treba dugo da se izvrse.
Event loop uzima zadatke koji se dugo izvrsavaju stavlja ih u "pozadinu" i onda kad se zavrse, vraca ih u glavni tred(thread).
Primer ovoga je "hvatanje" nekih podataka sa udaljenog servera.Da nema event loopa celi program bi "blokirao" dok se podaci skidaju sa servera.




-------------JAVASCRIPT ENGINE AND RUNTIME--------------------------

JavaScript engine je program koji izvrsava javaScript kod.

Svaki pretrazivac(google crome,firefox itd.) ima svoj JS engine, najpoznatiji je google-v V8.

JS engine se sastoji iz dve osnovne komponente: CALL STACK I HEAP.

U call stack-u se izvrsava js kod koristeci nesto sto se zove execution context.

Heap je memoriski "pool" gde se cuvaju svi ojekti koji su potrebni nasoj aplikaciji.

COMPILATION VS INTERPRETATION

CPU samo razume nule i jedinice,u skladu sa tim svaki kompjuterski program mora biti konvertovan u ovaj machine code.
Ovaj proces moze da se odradi koristeci "compilation" ili "interpretation".

Compilation:Sav kod se konvertuje u machine kod odjednom, i upisuje se u binarni file i kao takav moze da se izvrsi u CPU-u.

Interpretation:Prolazi kroz kod  i izvrsava ga liniju po liniju.

JavaScript koristi kombinaciju ova dva navedena procesa i naziva se Just-in-time compilation.

Citav kod se konvertuje u machine code odjednom i odmah se izvrsava.



-------------EXECUTION CONTEXT AND CALL STACK--------------------------

Nakon kompilacije koda kreira se global execution context za top level kod.Top level kod je kod koji se ne nalazi 
u funkcijama.

Sta je execution context??
To je okruzenje gde se delovi javaScript-a izvrsavaju.Tu se cuvaju sve potrebne informacije za neki kod da bi se izvrsio, kao sto su:
varijable ili argumenti koji se prosledjuju u funkcije itd.

Nakon sto se top level code izvrsi, izvrsavaju se i funkcije.Kada se god funkcija pozove, takodje se kreira execution context za svaku funkciju.
Isti princip vazi i za metode jer su to funkcije koje su dio nekog objekta.

Sta je unutar svakog exetution context-a??

Variable okruzenje
- let , const i var deklaracije
-funkcije
-arguments objekat
Argument objekat sadrzi sve argumente koji su prosledjeni funkciji kojem trenutni executio context pripada.
Zato sto svak funkcija ima svoj execution context cim je funkcija pozvana.Funkcije takodje mogu da pristupe varijablama iznad njihovog execution contexta.
Zahvaljujuci necemu sto se zove scope chain.Svaki execution context sadrzi specijalnu varijablu koja se zove THIS kljucna rec.

Arrow funkcije ne sadrze arguments objekat i this kljucnu rec vec mogu da ih koriste od najblize "roditeljske" funkcije.


Sta je call stack??

To je mjesto su JS engine-u gde se execution contekst-i "gomilaju" jedan na drugi,da bi pratili i vodili racuna gde smo trenutno u 
exekuciji koda.

-------------SCOPE AND SCOPE CHAIN--------------------------

Scoping:Kako su varijable u nasem programu organizovane i kako im se pristupa.
Scoping oznacava gde mozemo da pristupimo odredjenim varijablama a gde ne mozemo.

Scope:Mesto ili okruzenje u kojem su odredjene varijable deklarisane.U JavaScriptu postoji global scope, function scope i block scope.

Scope of a variable:Dio naseg koda gde se odredjenim varijablama moze pristupiti.

1.Global scope
    Global scope je rezervisan za top level kod.To su varijable koje su deklarisane van bilo koje funkcije ili bloka koda.
    Varijablama koje su deklarisane u global scope-u mozemo da pristupimo bilo gde u nasem programu.

2.function scope
    Varijable deklarisane u funkcijama su samo dostupne u samim tim funkcijama, ne izvan njih.
    Ovaj scope se takodje naziva local scope...zato sto su varijable samo localno dostupne.

3.Block scope(ES6)
    Varijable deklarisane u nekom bloku koda kao sto su if block, for loop block su samo dostupne u tom bloku.
    Ovo samo vazi za varijable deklarisane sa let i const.
    
Scope chain:
    Svaki scope uvjek ima pristup svim varijablama iz spoljasnjih scopov-a.Ovaj proces se naziva scope chain.
    Kada varijabla nije u trenutnom scope-u, engine trazi u scope chain-u dok ne nadje varijablu koja je potrebna.
    Ovaj proces se naziva variable lookup.
    
    

    -------------SCOPE AND SCOPE CHAIN IN PRACTICE--------------------------
 */

function calcAge(birthYear) {
  const age = 2022 - birthYear;
  //   console.log(firsName);

  function printAge() {
    const output = `${firsName}, you are ${age} , born in ${birthYear}`;
    // console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh , and you are a milenial ${firsName}`;
      //   console.log(str);
    }

    // console.log(str);
    //Reference Error:Ne mozemo da pristupimo varijablama iznad if block-a
  }

  printAge();
  return age;
}

const firsName = 'Bojan';

calcAge(1988);

/*
-------------VARIABLE ENVIROMENT: HOISTING AND THE TDZ--------------------------

U javaScript programskom jeziku postoji mehanizam koji se naziva hosting.
Pomocu ovog mehanizma mozemo da pristupimo nekim tipovima varijabli u nasem kodu prije nego sto su deklarisane.
Hoisting ne radi isto za sve tipo varijabli(funkcija)
*/

// console.log(me); //undefined
// console.log(job); //referenceError:Cannot access "job" before initialization zato sto je job varijabla u TDZ-u
// console.log(year);

var me = 'Bojan';
let job = 'Developer';
const year = 1988;

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 4));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

/*
-------------THIS KEYWORD--------------------------
This kljucna rec je specijalna varijabla koja je kreirana za svaki execution context(svaku funkciju).
Uzima vrednost od "vlasnika" funkcije u kojoj je this kljucna rec koriscena.Takodje pokazuje na "vlasnika" funkcije.
This kljucna rec je treca komponenta svakog execution contexta pored scope chain-a i varible enviroment-a.

-This nema staticnu vrednost.Zavisi od toga kako pozivamo funkciju,vrednost se tek dodeljuje kada se funkcija pozove.
  -method this = Objekat koji poziva metodu
  -Obicna funkcija this = undentifined u strict mode-u
  -Arrow funkcija ne dobija svoju this kljucnu rec vec uzima this od "roditeljske" funkcije(lexical this)
  -Event Listener this = sam DOM element
*/

console.log(this); //ukazuje na globalni window objekat

const calcAge1 = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this); //undefined u strict mode-u
};

calcAge1(1988);

const calcAgeArrow = birthYear => {
  console.log(2022 - birthYear);
  console.log(this); //pokazuje na globalni window objekat(lexical this)
};

calcAgeArrow(1988);

const bojan = {
  year: 1988,
  calcAge: function () {
    console.log(this); //pokazuje na sam "bojan" objekat
  },
};

bojan.calcAge();
