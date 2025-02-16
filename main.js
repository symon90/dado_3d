const cube = document.querySelector(".cube");
const roll = document.querySelector("#roll");
const result = document.querySelector("#result");
// cube.style.transform = "rotateX(-30deg) rotateY(30deg)";

const array = [
  [2, 2, 2, 2],
  [4, 6, 3, 1],
  [5, 5, 5, 5],
  [3, 1, 4, 6],
];

roll.addEventListener("click", function () {
  rotazione();
});

function rotazione() {
  let randomX = Math.floor(Math.random() * 12) + 1; 
  let randomY = Math.floor(Math.random() * 12) + 1; 
  rotX = randomX * 90;
  rotY = randomY * 90;
  cube.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(0deg)`;
  calcoloRisultato(randomX, randomY);
}

function calcoloRisultato(ranx, rany) {
  let x, y;
  x = ranx % 4;
  y = rany % 4;
  setTimeout(() => {
    
    result.textContent = array[x][y];
  }, 800);
}
