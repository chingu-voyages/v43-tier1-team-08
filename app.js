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
    form.innerHTML = formHTML;

    // gather user-entered words,
    // create story html, and
    // add story to DOM
    // inside the submit button handler
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        // gather user-entered words
        let blanks = [];
        for (i in data.inputIds) {
            blanks[i] = document.getElementById(data.inputIds[i]).value;
        }

    });
}



/*


    // create story
    for (i in storyPieces) {
        storyHTML += storyPieces[i];
        if (i < words.length) {
        storyHTML += words[i];
        }
    }

    // set story
    story.innerHTML = storyHTML;
});

*/