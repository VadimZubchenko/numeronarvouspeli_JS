var running = 0;
const getValue = 0;

const arvo = Math.floor(Math.random() * 100);
console.log(arvo);

function startGame() {
  let startbutton = document.getElementById("startGame");
  //jos se on jo käynnissä sittten running = true;

  let clientArvo = document.getElementById("numero").value;
  console.log(clientArvo);
  if (clientArvo < arvo) {
    document.getElementById("message").innerHTML = "Numerosi on arvoa pienempi";
  }
  if (clientArvo > arvo) {
    document.getElementById("message").innerHTML = "Numerosi on  arvoa isompi";
  }
  if (clientArvo === arvo) {
    document.getElementById("message").innerHTML = "Arvosit oikein";
  }
}
