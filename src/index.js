function displayPoem(response) {
  
  new Typewriter('#poem', {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    
  });
}

function generatePoem(event) {
  event.preventDefault();

  let topicInput = document.querySelector("#poemInput");
  let apiKey = "b8bt1eedc53a49e91cf7bb6aob435022";
  let context =
    "You are an intelligent API who enjoys writing poetry.  Be concise and provide a different answer every time.  Write a 4-line poem using HTML and separate each line with a <br />.  Do not include a title.  Separate each line with a line break.  Please make your answer appropriate for children.";
  let prompt = `Write a poem based on the ${topicInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
  console.log("Generating poem...");
  
  axios.get(apiUrl).then(displayPoem);

}

let poemElement = document.querySelector("#form");
poemElement.addEventListener("submit", generatePoem);