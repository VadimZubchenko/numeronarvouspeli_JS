var running = 0;
const getValue = 0;
let lastMin = -1;
let lastMax = 101;
let kpl = 0;

const arvo = Math.floor(Math.random() * 100);
console.log(arvo);

function startGame() {
  let startbutton = document.getElementById("startGame");
  //jos se on jo käynnissä sittten running = true;
  let clientArvo = document.getElementById("numero").value;
  console.log(clientArvo);
  if (lastMin < clientArvo < lastMax) {
    if (clientArvo < arvo) {
      document.getElementById("message").innerHTML =
        "Numerosi on arvoa pienempi";
      kpl++;
      lastMin = clientArvo;
    }
    if (clientArvo > arvo) {
      document.getElementById("message").innerHTML =
        "Numerosi on  arvoa isompi";
      kpl++;
      lastMax = clientArvo;
    }
    if (clientArvo == arvo) {
      document.getElementById("message").innerHTML = "Arvosit oikein";
    }
  } else {
    document.getElementById("message").innerHTML =
      "Tämä arvo on jo ollut. Yritä uudelleen";
  }

  document.getElementById("maara").innerHTML = kpl;
}
