const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let rondomNum = [
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
  ];
  let randomColor = `rgb(${rondomNum[1]}, ${rondomNum[2]}, ${rondomNum[0]})`;
  document.body.style.backgroundColor = randomColor;
  color.value = randomColor;
});

color.addEventListener("keyup", () => {
  document.body.style.backgroundColor = color.value;
});
