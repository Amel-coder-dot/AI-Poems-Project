function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "eda1f92ot1a03d330cbdb61ab7fc7664";
  let context =
    "You are a romantic poem expert and love to write short poems. Your misson is to generate a 4 line poem in HTML formate and separate each line with a <br />. Example: <p>this is a poem</p>. Make sure to follow the user instructions below. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a poem for you about ${instructionsInput.value}...</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
