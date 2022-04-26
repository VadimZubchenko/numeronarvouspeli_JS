let arvo = 0;
var running = 0;

function startGame() {
  let startbutton = document.getElementById("startGame");
  //jos se on jo käynnissä sittten running = true;
  if (running) {
    running = 0;
    arvo = 0;
  } else {
    running = 1;
    let arvo = Math.floor(Math.random() * 100);
    document.getElementById(message).innerHTML = arvo;

    console.log(arvo);
  }
}
