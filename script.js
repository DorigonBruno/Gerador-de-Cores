const div = document.querySelector(".cores");
const button = document.querySelector("button");

function handleClick() {
  div.innerHTML = "";

  for (let i = 0; i < 4; i++) {
    const color = randomColor();
    const divElement = document.createElement("div");
    const elementP = document.createElement("p");

    divElement.style.background = color;
    elementP.style.color = color;
    elementP.textContent = color;

    divElement.appendChild(elementP);
    div.appendChild(divElement);
  }
}

function randomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

button.addEventListener("click", handleClick);
