let running = 0;
let firstStart = true;
let clientArvo = 0;
let lastMin = 0;
let lastMax = 101;
let kpl = 0;
let arvo = 0;

function arvoLask() {
  arvo = Math.floor(Math.random() * 100);
  console.log("Arvo :" + arvo);
}
if (firstStart) {
  arvoLask();
  firstStart = false;
}

function startGame() {
  let text = document.getElementById("message");
  text.style.color = "";
  document.body.style.backgroundColor = "";
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
        "Arvosit oikein! " + arvo + ".";
      document.getElementById("startGame").remove();

      text.style.color = "red";
      document.body.style.backgroundColor = "yellow";
    }
  } else {
    document.getElementById("message").innerHTML =
      "Ups! Jotain meni pielen.<br><br> Syötä numerollinen arvo. <br> " +
      lastMin +
      " ja " +
      lastMax +
      " välillä";

    text.style.color = "red";
    document.body.style.backgroundColor = "pink";
  }
  document.getElementById("maara").innerHTML = "Arvausten määrä: " + kpl;
  console.log("min:" + lastMin);
  console.log("max: :" + lastMax);
}

function resetGame() {
  clientArvo = 0;
  lastMin = 0;
  lastMax = 101;
  kpl = 0;
  document.getElementById("numero").value = "";
  document.getElementById("maara").innerHTML = "Arvausten määrä: " + kpl;
  message = document.getElementById("message");
  document.getElementById("message").innerHTML = "Arva numero 1-100 väliltä";
  document.body.style.backgroundColor = "";

  message.style.color = "";
  arvoLask();
}
