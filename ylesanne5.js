let temperatuur = 13;

if (temperatuur > 25) {
    console.log("ROVE PALAV!");
}

if (temperatuur >= 15) {
    console.log("Hea ilm :)");
}

if (temperatuur < 15) {
    console.log("mmm kulm");
}



//if (nimi) = "admin" {
    //console.log("tere admin :D:D :D:D");

    //} else {
    //console.log("tere kylaline");
//}
let nimi = "admin";
 console.log( nimi == "admin" ? "Tere admin":"tere kulamline");


 let pilettuup = "soodus"; // Kasutaja valik: "taispilet" või "soodus"
 let vanus = 12; // Kasutaja vanus
 
 if (pilettuup === "taispilet") {
     if (vanus < 18) {
         console.log("Täispilet maksab 10 eurot.");
     } else if (vanus <= 64) {
         console.log("Täispilet maksab 20 eurot.");
     } else {
         console.log("Täispilet maksab 15 eurot.");
     }
 
 
    } else if (pilettuup === "soodus") {
     if (vanus < 18 && vanus >= 65) {
         console.log("Sooduspilet maksab 8 eurot.");
     } else {
         console.log("Sooduspilet maksab 15 eurot.");
     }
 } else {
     console.log("Kontrolli andmeid.");
 }

