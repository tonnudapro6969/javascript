//1.Erinevad funktsioonid
//Koosta kaks funktsiooni, mis väljastavad sinu nime (ilma ühegi argumendita). Kasuta klassikaslist ja noolefunktsioone.

//2. Argumendiga funktsioon
//Kirjuta funktsioon nimega `kuupaevEesti`, mis kuvab konsoolile praeguse kuupäeva ja kuu eesti keeles. Argumendiks kuupäev kujul 19.07.23

//3.Teadmata hulk
//Kirjuta funktsioon, mis võtab siseniks kasutajalt teadmata hulga täisarve ning tagastab nende koguarvu ning keskmise.

//4. Salajane sõnum
//Kirjuta noolefunktsioon nimega salajaneSonum, mis võtab sisendiks sõnumi stringi ning tagastab selle sõnumi põhjal salajase versiooni.
 //Salajase versiooni loomiseks asendatakse kõik täishäälikud (vokaalid) tärniga (*), jättes konsonandid muutumatuks.

 //5.,Unikaalsed nimed
//Kirjuta noolefunktsioon nimega leiaUnikaalsedNimed, mis võtab sisendiks massiivi erinevatest nimedest ning tagastab uue massiivi,
    //kus on ainult unikaalsed nimed esialgses järjekorras. See tähendab, et kui esineb mitu sama nime,
    //siis tuleb need jätta ainult esinemise esialgsesse kohta ja eemaldada ülejäänud koopiad.
    //["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"]


    const noolFunktsioon = () => {
        console.log("Tonis Kandmaa!")
      };
      
      noolFunktsioon();

//https://www.freecodecamp.org/news/javascript-get-current-date-todays-date-in-js/
function kuupaevEesti( ){

    const date = new Date();

    let paev = date.getDate();
    let kuu = date.getMonth() + 1;
    let aasta = date.getFullYear();
    //let kuud = [
        //"Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni",
        //"Juuli", "August", "September", "Oktoober", "November", "Detsember"
    //];

    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${paev}-${kuu}-${aasta}`;
    return {
        currentDate
    };
}
console.log(kuupaevEesti());


const salajaneSonum = () => {
    let sonum = "salajane sonum"
    let SALADUS = sonum.replace(/[aeiouAEIOU]/g, " * ");
    
    console.log(SALADUS);
    //return{
        //SALADUS
    //};
}
salajaneSonum("Salajane sonum!");


const leiaUnikaalsedNimed = () => {
    nimed = ["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"]
    uusnimed = []
    for (let i = 0; i < nimed.length; i++) {
        if (!uusnimed.includes(nimed[i])) {
            uusnimed.push(nimed[i]);
        }
    }

    console.log(uusnimed);
};

leiaUnikaalsedNimed();
