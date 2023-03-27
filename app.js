// DOM element constants
const storyTitle = document.querySelector(".story-title1");
const form = document.querySelector("form");
const story = document.querySelector(".story")

// fetch story data from data.json file and process with process() function
fetch("./data/data.json")
  .then((response) => response.json())
  .then((data) => process(data));

function process(data) {
    // add title to DOM
    storyTitle.innerHTML = data.title;

    // create form
    let html = "";
    // create labels and inputs
    for (i in data.labels) {
        html += `
            <div class="form-control">
                <label for="${data.inputIds[i]}">${data.labels[i]} : </label>
                <input type="text" id="${data.inputIds[i]}" name="${data.inputIds[i]}">
            </div>`
    }
    // create reset and submit buttons
    html += `
        <div class="buttons">
            <button type="reset">Reset</button>
            <button type="submit">Submit</button>
        </div>`;

    // add form to DOM
    form.innerHTML = html;

    // gather user-entered words,
    // create story html, and
    // add story to DOM
    // inside the submit button handler
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        // gather user-entered words
        let words = [];
        for (i in data.inputIds) {
            words[i] = document.getElementById(data.inputIds[i]).value;
        }
        // create story html
        let html = "";
        for (i in data.storyPieces) {
            html += data.storyPieces[i];
            if (i < words.length) {
            html += words[i];
            }
        }
        // set story
        story.innerHTML = html;
        story.classList.remove('hidden');

       //creates button to go back to the form
          let resetButton = `<br><button id="game-reset" onclick="resetGame()">Play Again</button>`;
          story.innerHTML += resetButton;
});

function resetGame() {
    story.classList.add('hidden');
    story.innerHTML = '';
    wordForm.reset();
    wordForm.classList.remove('hidden');

}