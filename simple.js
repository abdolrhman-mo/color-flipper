const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "rebeccapurple",
  "black",
  "wheat",
  "aqua",
  "saddlebrown",
];

btn.addEventListener("click", () => {
  let randomColor = Math.floor(Math.random() * colors.length);
  console.log(randomColor);
  document.body.style.backgroundColor = colors[randomColor];
  color.value = colors[randomColor];
});

color.addEventListener("keyup", () => {
  document.body.style.backgroundColor = color.value;
});
