//Toote objekt
//Loo toote jaoks objekt ‘toode‘, mis sisaldab vähemalt 3 omadust (nimetus, hind, kogus)
//Kuva objekti omadused konsoolis
//Lisa meetodid ja kuva konsoolis:
//toote koguhind
//muudab toote kogust
//kuvab objekti sisu, kasutades sõne malli
//Ostukorv
//Tekita uus objekt ‘ostukorv‘ ja lisa omadus ‘tooted‘ ja lisa massiivina väärtused nimi, hind ja kogus





const ostukorv = {
    tooted: [
        { nimi:'Piim', hind:3.60, kogus:2 },
        { nimi:'Leib', hind:2.00, kogus:1 },
        { nimi:'Munad', hind:1.50, kogus:6 },
        { nimi:'Juust', hind:4.20, kogus:1 },
        { nimi:'Tomatid', hind:2.30, kogus:3 },
      ]};
    

      console.log(`${toode.nimi} - ${toode.hind} EUR - Kogus: ${toode.kogus}`);
      ostukorv.lisaToode('Kohv', 5.80, 2);
      console.log('Ostukorvi kogu summa:', ostukorv.koguSumma());
