let arvo = 0;
var running = 0;
const getValue = 0;

function startGame() {
  let startbutton = document.getElementById("startGame");
  //jos se on jo käynnissä sittten running = true;
  let arvo = Math.floor(Math.random() * 100);
  let clientArvo = parseInt(document.getElementById("numero").value);
  console.log(parseInt(clientArvo));
  if (clientArvo < arvo) {
    document.getElementById("message").innerHTML = "Numerosi on arvoa pienempi";
  }
  if (clientArvo > arvo) {
    document.getElementById("message").innerHTML = "Numerosi on  arvoa isompi";
  }
  if (clientArvo === arvo) {
    document.getElementById("message").innerHTML = "Arvosit oikein";
  }

  console.log(arvo);
}
