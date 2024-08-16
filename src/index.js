function generatePoem(event) {
  event.preventDefault();

  new Typewriter('#poem', {
    strings: "Generating poem...",
    autoStart: true,
    delay: 50,
  });
}

let poemElement = document.querySelector("#form");
poemElement.addEventListener("submit", generatePoem);