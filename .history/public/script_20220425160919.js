let arvo = 0;
var running = 0;
const getValue = 0;

function startGame() {
  let startbutton = document.getElementById("startGame");
  //jos se on jo käynnissä sittten running = true;

  running = 1;
  let arvo = Math.floor(Math.random() * 100);
  clientArvo = document.getElementById("numero");
  //document.getElementById("message").innerHTML = arvo;
  //getValue = document.getElementById("numero").value;

  console.log(arvo);
}
