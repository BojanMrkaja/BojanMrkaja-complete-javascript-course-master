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
 */
