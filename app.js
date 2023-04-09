// DOM element constants
const storyTitle = document.querySelector(".story-title1");
const form = document.querySelector("form");
const story = document.querySelector(".story")

//For the bad words filter
var Filter = require('bad-words'),
filter = new Filter()

// JSON object with the story title, an array holding the labels, an array holding the 
// ids, and an array holding the story pieces
let json = '{"title": "The Brady Bunch","labels": ["Adjective","Singular noun","Number","Adjective","Plural of the above noun","Plural body part","Color","Plural Noun"],"inputIDs": ["adjective","singular-noun","number", "adjective-2", "plural-noun", "body-part", "color", "plural-noun-2"],"storyPieces": ["Here\'s the story of a "," ", " who was bringing up "," very ", " ", ".  All of them had ", " of ", " like their mother, the youngest one had ","."]}';

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

    //Words are entered into the bad words filter
    for (let i= 0; i <= words.length; i++){
        filter.addWords(words[i]);
    }

    //Replaces profane words with asterisks (*)
        filter.clean(list)
        alert('Profane entries has been deleted. Click on the reset button to try again.')
    
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