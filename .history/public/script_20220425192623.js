var running = 0;
const getValue = 0;
let lastMin = 1;
let lastMac = 100;
const arvo = Math.floor(Math.random() * 100);
console.log(arvo);

function startGame() {
  let startbutton = document.getElementById("startGame");
  //jos se on jo käynnissä sittten running = true;
  let clientArvo = document.getElementById("numero").value;
  //console.log(clientArvo);
  do {
    if (clientArvo < arvo) {
      document.getElementById("message").innerHTML =
        "Numerosi on arvoa pienempi";
      lastMin = clientArvo;
    }
    if (clientArvo > arvo) {
      document.getElementById("message").innerHTML =
        "Numerosi on  arvoa isompi";
      lastMax = clientArvo;
    }
    if (clientArvo == arvo) {
      document.getElementById("message").innerHTML = "Arvosit oikein";
    }
    document.getElementById("message").innerHTML = "Tämä arvo on jo ollut.";
  } while (lastMin < clientArvo < lastMax);
}
