// DOM element constants
const storyButtons = document.querySelector(".story-buttons");
const storyTitle = document.querySelector(".story-title1");
const wordform = document.querySelector(".word-form");
const form = document.querySelector("form");
const story = document.querySelector(".story")

// fetch story data from data.json file
fetch("./data/data.json")
    .then((response) => response.json())
    .then((arrayOfStoryOjects) => {

    // create array of story titles
    let storyTitles = [];
    for (i in arrayOfStoryOjects) {
        let {title} = arrayOfStoryOjects[i];
        storyTitles.push(title);
    }
    
    // create story title buttons
    let storyButtonsHTML = "";
    for (i in storyTitles) {
        storyButtonsHTML += `<button type="button" class="story-button" id="story-button-${i}">
            ${storyTitles[i]}</button>`
    }
    storyButtons.innerHTML = storyButtonsHTML;

    // add eventListener to story title button class
    storyButtons.addEventListener("click", e => {

        // get number of story chosen
        let storyNumber = Number(e.target.id.slice(13));

        // run through process for chosen story
        const {title, labels, inputIds, storyPieces} = arrayOfStoryOjects[storyNumber];

        // add title to DOM
        storyTitle.innerHTML = title;

        // create form
        let html = "";
        // create labels and inputs
        for (i in labels) {
            html += `
                <div class="form-control">
                    <label for="${inputIds[i]}">${labels[i]}: </label>
                    <input type="text" id="${inputIds[i]}" name="${inputIds[i]}">
                </div>`
        }
        // add space if there are an odd number of inputs
        if (labels.length % 2 == 1) {
            html += `
                <div class="form-control"></div>`
        }
        // create reset and submit buttons
        html += `
            <div class="buttons">
                <button type="reset">Reset</button>
                <button type="submit">Submit</button>
            </div>`;

        // add form to DOM
        form.innerHTML = html;
        wordform.classList.remove("hidden");

        // gather user-entered words,
        // create story html, and
        // add story to DOM
        // inside the submit button handler
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            // gather user-entered words
            let words = [];
            for (i in inputIds) {
                words[i] = document.getElementById(inputIds[i]).value;
            }
            // create story html
            let html = "";
            for (i in storyPieces) {
                html += storyPieces[i];
                if (i < words.length) {
                html += `<span class="word">${words[i]}</span>`;
                }
            }
            //creates button to go back to the form
            let resetButton = `<br><button id="game-reset" onclick="resetGame()">Play Again</button>`;
            html += resetButton;
            // hide form
            wordform.classList.add('hidden');

            // set story
            story.innerHTML = html;
            story.classList.remove("hidden");

        }); /* end of form eventListener */

    });  /* end storyButton eventListener */
    }); /* end of fetch */

//other functions
function resetGame() {
    story.classList.add('hidden');
    story.innerHTML = '';
    storyTitle.innerHTML = "";
    form.reset();
}