// DOM element constants
const storyButtons = document.querySelector(".story-buttons");
const storyTitle = document.querySelector(".story-title1");
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
    console.log(storyTitles);
    
    // create story title buttons
    let storyButtonsHTML = "";
    for (i in storyTitles) {
        storyButtonsHTML += `<button type="button" class="story-button" id="story-button-${i}">
            ${storyTitles[i]}</button>`
    }
    storyButtons.innerHTML = storyButtonsHTML;

    // add eventListener to story title button class
    storyButtons.addEventListener("click", e => {
        let storyNumber = Number(e.target.id.slice(13));
        console.log(storyNumber)

        // run through process for chosen story
        console.log(arrayOfStoryOjects[storyNumber])

        const {title, labels, inputIds, storyPieces} = arrayOfStoryOjects[storyNumber];
        console.log(title)

        // add title to DOM
        storyTitle.innerHTML = title;

        // create form
        let html = "";
        // create labels and inputs
        for (i in labels) {
            html += `
                <div class="form-control">
                    <label for="${inputIds[i]}">${labels[i]} : </label>
                    <input type="text" id="${inputIds[i]}" name="${inputIds[i]}">
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
            for (i in inputIds) {
                words[i] = document.getElementById(inputIds[i]).value;
            }
            // create story html
            let html = "";
            for (i in storyPieces) {
                html += storyPieces[i];
                if (i < words.length) {
                html += words[i];
                }
            }
            // set story
            story.innerHTML = html;
        }); /* end of form eventListener */

    });  /* end storyButton eventListener */
    }); /* end of fetch */