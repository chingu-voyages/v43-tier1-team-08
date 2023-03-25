// DOM element constants
const storyTitle = document.querySelector(".story-title1");
const form = document.querySelector("form");
const story = document.querySelector(".story")

// convert json object into javascript object
let parsed = JSON.parse(json);

// break object into sections
let title = parsed.title;
let labels = parsed.labels;
let ids = parsed.inputIDs;
let storyPieces = parsed.storyPieces;

// set title
storyTitle.innerHTML = title;

// create empty html variables for form and story
let formHTML = "";
let storyHTML = "";

// create form html
    // create labels and inputs
    for (i in labels) {
    formHTML += `
        <div class="form-control">
            <label for="${ids[i]}">${labels[i]} : </label>
            <input type="text" id="${ids[i]}" name="${ids[i]}">
        </div>`
    }
    
    // create reset and submit buttons
    formHTML += `
    <div class="buttons">
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
    </div>`;

// set form
form.innerHTML = formHTML;

// when form is submitted, 
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // gather user-entered words
    let words = [];
    for (i in ids) {
        words[i] = document.getElementById(ids[i]).value;
    }

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