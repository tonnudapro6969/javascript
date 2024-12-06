
let valjund;
let arvukesed = -5



    switch(true) {
    case (arvukesed == 0):
    valjund = "arv on 0"
    break;
    case(arvukesed < 0): 
    valjund = "negatiivne"
    break;
    case(arvukesed > 0):
    valjund = "arv on postiivine"
    break;
    default:
        arvukesed = "speak";

}
console.log(valjund);






let lauanumber = 55;
let broneering;

switch (true) {
  case (lauanumber == 1 || lauanumber == 2):
    broneering = "laud 2le";
    break;

  case (lauanumber == 3 || lauanumber == 4):
    broneering = "Laud 4le.";
    break;

    case (lauanumber == 5 || lauanumber == 6):
    broneering = "Laud 6le.";
    break;

    case (lauanumber > 6):
    broneering = "Suur laud palun.";
    break;

  default:
  broneering = "SISESTA OIGE ARV INIMESI";
}

console.log(broneering);