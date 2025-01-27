//Kasuta while-tsüklit, et sorteerida välja mündid
//Lisa mündid uude massiivi
//kuva mitu münti said ja mis on nende summa
function mundidfunk() {
    let mundid = [200, 0.2, 10, 0.01, 2, 1, 0.1, 0.02, 0.05, 100, 5, 0.5, 50, 20];
    let oigedmundid = [10, 2, 1, 5, 50, 20];
    let mingiarray = [];
    let summa = 0;
    let i = 0;

    while (i < mundid.length) {
        let j = 0;
        while (j < oigedmundid.length) {
            if (mundid[i] === oigedmundid[j]) {
                mingiarray[mingiarray.length] = mundid[i];
                summa += mundid[i];
                break;
            }
            j++;
        }
        i++;
    }

    // umardamine
    let mundidsumma = Math.round(summa);

    return {
    "mundid": mingiarray,
        "muntide arv?": mingiarray.length,
        "summa": mundidsumma + "£"
    };
}

console.log(mundidfunk());
