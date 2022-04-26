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
      document.getElementById("message").innerHTML =
        "Numerosi on arvoa pienempi";
      document.getElementById("input").value = null;
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
  console.log("min:" + lastMin);
  console.log("max: :" + lastMax);
}

function resetGame() {
  clientArvo = 0;
  arvo = 0;
  lastMin = 0;
  lastMax = 101;
  kpl = 0;
  document.getElementById("numero").innerHTML = clientArvo;
  document.getElementById("maara").innerHTML = kpl;
}
