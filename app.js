// DOM element constants
const storyButtons = document.querySelector('.story-buttons');
const storyTitle = document.querySelector('.story-title');
const wordForm = document.querySelector('.word-form');
const form = document.querySelector('form');
const story = document.querySelector('.story');

//For the bad words filter
var Filter = require('bad-words'),
filter = new Filter()

// JSON object with the story title, an array holding the labels, an array holding the 
// ids, and an array holding the story pieces
let json = '{"title": "The Brady Bunch","labels": ["Adjective","Singular noun","Number","Adjective","Plural of the above noun","Plural body part","Color","Plural Noun"],"inputIDs": ["adjective","singular-noun","number", "adjective-2", "plural-noun", "body-part", "color", "plural-noun-2"],"storyPieces": ["Here\'s the story of a "," ", " who was bringing up "," very ", " ", ".  All of them had ", " of ", " like their mother, the youngest one had ","."]}';

// convert json object into javascript object
let parsed = JSON.parse(json);

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

                //Words are entered into the bad words filter
                for (let i= 0; i <= words.length; i++){
                    filter.addWords(words[i]);
                }

                //Replaces profane words with asterisks (*)
                    filter.clean(list)
                    alert('Profane entries has been deleted. Click on the reset button to try again.')
            
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

    //Replaces profane words with asterisks (*)
        for(w in words){
            if (filter.isProfane(word[w])){
                filter.replaceWord(word[w])
            }
        }
        alert('Profane entries has been deleted. Click on the reset button to try again.')
    
    // create story
    for (i in storyPieces) {
        storyHTML += storyPieces[i];
        if (i < words.length) {
        storyHTML += words[i];
        }
    }

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
