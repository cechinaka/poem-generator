function displayPoem(response) {
  
  new Typewriter('#poem', {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: "",

  });
}

function generatePoem(event) {
  event.preventDefault();

  let topicInput = document.querySelector("#poemInput");
  let apiKey = "b8bt1eedc53a49e91cf7bb6aob435022";
  let context =
    "You are a creative and witty API who enjoys writing poetry.  Be concise and provide a different answer every time.  Write a 4-line poem using HTML.  Do not include a title.  Separate each line with a <br />.  Please make your answer appropriate for children. Always add an extra <br /> after the last line in the poem and before signing the poem.  Sign the poem with <em>Written by SheCodes AI</em> at the end of the poem.";
  let prompt = `Write a poem based on the ${topicInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">Generating a poem about ${topicInput.value} ⏳</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemElement = document.querySelector("#form");
poemElement.addEventListener("submit", generatePoem);