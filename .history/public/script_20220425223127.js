var running = 0;

let lastMin = 0;
let lastMax = 101;
let kpl = 0;

let text = document.getElementById("message");
let arvo = Math.floor(Math.random() * 100);
console.log("Arvo :" + arvo);

function startGame() {
  //jos se on jo käynnissä sittten running = true;
  let clientArvo = document.getElementById("numero").value;
  //tarkistetaan syöty arvo onko numerollinen. jos on, sitten 'false'
  let checkNaN = isNaN(clientArvo);

  console.log("clientArvo: " + clientArvo);
  console.log("ei ole numero: " + checkNaN);

  if (lastMin < clientArvo && clientArvo < lastMax && !checkNaN) {
    if (clientArvo < arvo) {
      lastMin = clientArvo;
      document.getElementById("message").innerHTML =
        "Valitse luku suurempi kuin: " + clientArvo + ". <br>Yritä uudelleen!";
      kpl++;
    }
    if (clientArvo > arvo) {
      lastMax = clientArvo;
      document.getElementById("message").innerHTML =
        "Valitse luku pienempi kuin: " + clientArvo + ". <br>Yritä uudelleen!";
      kpl++;
    }
    if (clientArvo == arvo) {
      document.getElementById("message").innerHTML =
        "Arvosit oikein! Se oli " + arvo + ".";

      text.style.color = "red";
      document.body.style.backgroundColor = "yellow";
    }
  } else {
    document.getElementById("message").innerHTML =
      "Ups! Jotain meni pielen. <br>Valitse numerollinen arvo, joka suurempi kuin " +
      lastMin +
      " ja pienempi kuin : " +
      lastMax;
    document.body.style.backgroundColor = "pink";
  }
  document.getElementById("maara").innerHTML = "Arvausten määrä: " + kpl;
  console.log("min:" + lastMin);
  console.log("max: :" + lastMax);
}

function resetGame() {
  clientArvo = 0;
  arvo = 0;
  lastMin = 0;
  lastMax = 101;
  kpl = 0;
  document.getElementById("numero").value = "";
  document.getElementById("maara").innerHTML = kpl;
  document.getElementById("message").innerHTML = "Arva numero 1-100 väliltä";
  document.body.style.backgroundColor = "";
  text.style.color = "";
}
