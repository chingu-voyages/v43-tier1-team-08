// DOM element constants
const storyTitle = document.querySelector(".story-title1");
const form = document.querySelector("form");
const story = document.querySelector(".story")

// fetch story data from data.json file and process with process() function
fetch("./data/data.json")
  .then((response) => response.json())
  .then((data) => process(data));

function process(data) {
    addTitleToDOM(data);
    let formHTML = createFormHTML(data);
    addFormToDOM(formHTML);
    let storyBlanks = gatherStoryBlanksFromForm();
    let storyHTML = createStory(data, storyBlanks);
    addStoryToDOM(storyHTML);
}

function addTitleToDOM(data) {
    storyTitle.innerHTML = data.title;
}

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