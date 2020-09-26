const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", () => {
  let mathRandom = [
    Math.floor(Math.random() * hex.length),
    Math.floor(Math.random() * hex.length),
    Math.floor(Math.random() * hex.length),
    Math.floor(Math.random() * hex.length),
    Math.floor(Math.random() * hex.length),
    Math.floor(Math.random() * hex.length),
  ];
  let randomNum = `#${hex[mathRandom[1]]}${hex[mathRandom[2]]}${
    hex[mathRandom[3]]
  }${hex[mathRandom[4]]}${hex[mathRandom[5]]}${hex[mathRandom[0]]}`;
  document.body.style.backgroundColor = randomNum;
  color.value = randomNum;
});

color.addEventListener("keyup", () => {
  document.body.style.backgroundColor = color.value;
});
