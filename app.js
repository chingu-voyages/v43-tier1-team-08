// DOM element constants
const storyTitle = document.querySelector(".story-title");
const form = document.querySelector("form");
const story = document.querySelector(".story")


// JSON object with the story title, an array holding the labels, an array holding the 
// ids, and an array holding the story pieces
let json = '{"title": "The Brady Bunch","labels": ["Adjective","Singular noun","Number","Adjective","Plural of the above noun","Plural body part","Color","Plural Noun"],"inputIDs": ["adjective","singular-noun","number", "adjective-2", "plural-noun", "body-part", "color", "plural-noun-2"],"storyPieces": ["Here\'s the story of a "," ", " who was bringing up "," very ", " ", ".  All of them had ", " of ", " like their mother, the youngest one had ","."]}';

  
    // place the story into the landing page
    story.innerHTML = storyHTML;
});