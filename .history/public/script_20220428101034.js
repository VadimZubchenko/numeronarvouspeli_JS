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

function msg(element, text) {
  document.getElementById(element).innerHTML = text;
}
function maara(text) {
  document.getElementById("maara").innerHTML = text;
}

function startGame() {
  let text = document.getElementById("message");
  text.style.color = "";
  document.body.style.backgroundColor = "";
  let clientArvo = document.getElementById("numero").value;
  //tarkistetaan syötetty arvo, onko se numerollinen ja jos on, sitten 'false'
  let checkNaN = isNaN(clientArvo);

  console.log("clientArvo: " + clientArvo);
  console.log("ei ole numero: " + checkNaN);

  if (lastMin < clientArvo && clientArvo < lastMax && !checkNaN) {
    if (clientArvo < arvo) {
      lastMin = clientArvo;
      msg(
        "message",
        "Valitse luku suurempi kuin: " + clientArvo + ". <br>Yritä uudelleen!"
      );
      kpl++;
    }
    if (clientArvo > arvo) {
      lastMax = clientArvo;
      msg(
        "message",
        "Valitse luku pienempi kuin: " + clientArvo + ". <br>Yritä uudelleen!"
      );
      kpl++;
    }
    if (clientArvo == arvo) {
      msg("message", "Arvosit oikein! " + clientArvo + ".");
      text.style.color = "red";
      document.body.style.backgroundColor = "yellow";
    }
  } else {
    msg(
      "message",
      "Ups! Jotain meni pielen.<br><br> Syötä numerollinen arvo. <br> " +
        lastMin +
        " ja " +
        lastMax +
        " välillä"
    );
    text.style.color = "red";
    document.body.style.backgroundColor = "pink";
  }
  msg("message", "Arvausten määrä: " + kpl);
  console.log("min:" + lastMin);
  console.log("max: :" + lastMax);
}

function resetGame() {
  clientArvo = 0;
  lastMin = 0;
  lastMax = 101;
  kpl = 0;
  document.getElementById("numero").value = "";
  document.body.style.backgroundColor = "";
  message = document.getElementById("message");
  message.style.color = "";

  msg("maara", "Arvausten määrä: " + kpl);
  msg("message", "Arva numero 1-100 väliltä");
  arvoLask();
}
