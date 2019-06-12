const growButton = document.getElementById("grow");
const blueButton = document.getElementById("blue");
const fadeButton = document.getElementById("fade");
const slideButton = document.getElementById("slide");
const rotateButton = document.getElementById("rotate");
const borderButton = document.getElementById("border");
const circleButton = document.getElementById("circle");
const randomColorButton = document.getElementById("random");
const resetButton = document.getElementById("reset");
const box = document.getElementById("box");

growButton.addEventListener("click", function() {
  box.classList.toggle("enlarged");
});
blueButton.addEventListener("click", function() {
  box.classList.toggle("blue");
  box.style = "";
});
fadeButton.addEventListener("click", function() {
  box.classList.toggle("fade");
});
slideButton.addEventListener("click", function() {
  box.classList.toggle("right");
});
rotateButton.addEventListener("click", function() {
  box.setAttribute("style", "transform: rotate(180deg); transition: 1s;");
  setTimeout(() => {
    box.style = "";
  }, 1000);
});
borderButton.addEventListener("click", function() {
  box.classList.toggle("border");
});
circleButton.addEventListener("click", function() {
  box.classList.toggle("circle");
});
randomColorButton.addEventListener("click", () => {
  box.style.backgroundColor = randomHex();
});
resetButton.addEventListener("click", function() {
  box.className = "default";
  box.style = "";
});

//random color generator. adapted code I wrote with a friend for another project.
function randomHex() {
  var hex = [];
  const hexList = ["a", "b", "c", "d", "e", "f", 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < 6; i++) {
    hex.push(hexList[Math.floor(Math.random() * hexList.length)]);
  }
  return `#${hex.join("")}`;
}
