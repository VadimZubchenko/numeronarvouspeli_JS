let arvo = 0;
var running = 0;
const getValue = 0;

function startGame() {
  let startbutton = document.getElementById("startGame");
  //jos se on jo käynnissä sittten running = true;
  let arvo = Math.floor(Math.random() * 100);
  let clientArvo = document.getElementById("numero").value;
  document.getElementById("message").innerHTML = clientArvo;

  console.log(arvo);
}
