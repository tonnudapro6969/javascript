//tonis kandmaa ul2 23.10.24

let tund = "15:";
let min = "32:";
let sek = "55";

let kellaaeg = "kell on: " + tund + min + sek + "PM";
console.log(kellaaeg);

const tsitaat = "now i death destroyer of worlds lol";
const autor = " - roberto oppenhimir";
const kuupaev = ' 19444444 72 jaanuar';

console.log( tsitaat + autor + kuupaev);


let nimi = "Roberto ";
let pnimi = "Pasametsa";

let esimenetahtnimi = nimi[0];
let esimenetahtpnimi = pnimi[0];

let nimekene = nimi + pnimi + " nimetähed on: " + esimenetahtnimi + "." + esimenetahtpnimi;
console.log(nimekene);

const nimitais =  "meerits, martin";
const indeks = nimitais.indexOf(",");

console.log(indeks);
console.log((nimitais.substring(0,indeks)))
console.log((nimitais.substring(0,indeks).toUpperCase()))
console.log((nimitais.substring(0,indeks).length))

const epost = "karmen@netlog.com";
console.log(epost.replaceAll("netlog", "gmail"))



const andmed = "1, Marshal, Martinovic, mmartinovic0@dedecms.com, Male, 40.19.226.175";
const array = andmed.split(",");
const array1= array[3].split("@");

console.log(array[5]);
console.log(array1[0]);



