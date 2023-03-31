// DOM element constants
const storyButtons = document.querySelector('.story-buttons');
const storyTitle = document.querySelector('.story-title');
const wordForm = document.querySelector('.word-form');
const form = document.querySelector('form');
const story = document.querySelector('.story');

// fetch story data from data.json file
fetch('./data/data.json')
    .then((response) => response.json())
    .then((arrayOfStoryOjects) => {
        // create array of story titles
        let storyTitles = [];
        for (i in arrayOfStoryOjects) {
            let { title } = arrayOfStoryOjects[i];
            storyTitles.push(title);
        }

        // create story title buttons
        let storyButtonsHTML = '';
        for (i in storyTitles) {
            storyButtonsHTML += `<button type="button" class="story-button" id="story-button-${i}">
            ${storyTitles[i]}</button>`;
        }
        storyButtons.innerHTML = storyButtonsHTML;

        // add eventListener to story title button class
        storyButtons.addEventListener('click', (e) => {
			// hide form and story
			wordForm.classList.add('hidden');
			story.classList.add('hidden');
			
            // get number of story chosen
            let storyNumber = Number(e.target.id.slice(13));

            // run through process for chosen story
            const { title, labels, inputIds, storyPieces } =
                arrayOfStoryOjects[storyNumber];

            // add title to DOM
            storyTitle.innerHTML = `"` + title + `"`;

            // create form
            let html = '';
            // create labels and inputs
            for (i in labels) {
                html += `
                <div class="form-control">
                    <label for="${inputIds[i]}">${labels[i]}: </label>
                    <input type="text" id="${inputIds[i]}" name="${inputIds[i]}">
                </div>`;
            }
            // add space if there are an odd number of inputs
            if (labels.length % 2 == 1) {
                html += `
			          <div class="form-control"></div>`;
            }
            // create reset and submit buttons
            html += `
            <div class="buttons">
                <button class="reset" type="reset">Reset</button>
                <button type="submit">Submit</button>
            </div>`;

            // add form to DOM
            form.innerHTML = html;
            wordForm.classList.remove('hidden');

            // gather user-entered words,
            // create story html, and
            // add story to DOM
            // inside the submit button handler
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                // gather user-entered words
                let words = [];
                for (i in inputIds) {
                    words[i] = document.getElementById(inputIds[i]).value;
                }
                // create story html
                let html =
                    '<div class="result"><img src="/public/3.png" width="100" height="100"/> <div class="story-final">';
                for (i in storyPieces) {
                    html += storyPieces[i];
                    if (i < words.length) {
                        html += `<span class="word">${words[i]}</span>`;
                    }
                }
                //creates button to go back to the form
                let resetButton = `
						</div></div>
						<div class="button-play-again">
						<br><button id="game-reset" onclick="resetGame()">Play Again</button>
						</div>
						`;
                html += resetButton;
                // hide form
                wordForm.classList.add('hidden');

                // set story
                story.innerHTML = html;
                story.classList.remove('hidden');
            }); /* end of form eventListener */
        }); /* end storyButton eventListener */
    }); /* end of fetch */

//other functions
function resetGame() {
    story.classList.add('hidden');
    story.innerHTML = '';
    storyTitle.innerHTML = '';
    form.reset();
}
