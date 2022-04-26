var running = 0;

let lastMin = 0;
let lastMax = 101;
let kpl = 0;

let arvo = Math.floor(Math.random() * 100);
console.log("Arvo :" + arvo);

function startGame() {
  //jos se on jo käynnissä sittten running = true;
  let clientArvo = document.getElementById("numero").value;
  //console.log(clientArvo);
  if (lastMin < clientArvo && clientArvo < lastMax) {
    if (clientArvo < arvo) {
      lastMin = clientArvo;
      document.getElementById("message").innerHTML =
        "Numerosi " + clientArvo + " on arvoa pienempi";

      kpl++;
    }
    if (clientArvo > arvo) {
      lastMax = clientArvo;
      document.getElementById("message").innerHTML =
        "Numerosi on  arvoa isompi";
      kpl++;
    }
    if (clientArvo == arvo) {
      document.getElementById("message").innerHTML = "Arvosit oikein";
    }
  } else {
    document.getElementById("message").innerHTML =
      "Valitse arvo isompi kuin " + lastMin + " ja pienempi kuin : " + lastMax;
  }
  document.getElementById("maara").innerHTML = kpl;
  console.log("min:" + lastMin);
  console.log("max: :" + lastMax);
}

function resetGame() {
  clientArvo = 0;
  arvo = 0;
  lastMin = 0;
  lastMax = 101;
  kpl = 0;
  document.getElementById("numero").innerHTML = "";
  document.getElementById("maara").innerHTML = kpl;
}
