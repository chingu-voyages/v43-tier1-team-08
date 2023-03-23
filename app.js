// constants to reference html elements used in functions
// const inputForm = document.querySelector('.input-form');
const wordForm = document.querySelector("form");
const story = document.querySelector(".story");
// console.log(wordForm.classList.value);
// console.log(story.classList.value);

// have the form listen for the submit event
wordForm.addEventListener("submit", (e) => {
    e.preventDefault();
    wordForm.classList.add('story');
//     console.log(wordForm.classList.value);
//  console.log(story.classList.value);

    // console.log(container);
    // place the user-entered words into variables with the
    // same name as the form input ids
    let creature = document.getElementById("creature").value;
    let adjective = document.getElementById("adjective").value;
    let verb = document.getElementById("verb").value;
    let feeling = document.getElementById("feeling").value;
    let clothing = document.getElementById("clothing").value;
    let sparkly = document.getElementById("sparkly").value;
    let superpower = document.getElementById("superpower").value;
    let food = document.getElementById("food").value;
    let game = document.getElementById("game").value;
    let animal = document.getElementById("animal").value;
    let song = document.getElementById("song").value;
    let room = document.getElementById("room").value;
    let place = document.getElementById("place").value;
    let password = document.getElementById("password").value;
    
    // create the text of the story to be added to the landing page
    let storyHTML = `Once there was a strange time where a <span class="word">${creature}</span> took over the world
    and made us all stay <span class="word">${adjective}</span> at home.  So we 
    <span class="word">${verb}</span> into our imagination and found out the key to 
    <span class="word">${feeling}</span> was all about wearing <span class="word">${clothing}</span> 
    with <span class="word">${sparkly}</span>.  It turned out that this was also the trick to turning 
    on our <span class="word">${superpower}</span> and getting to do everything you love all at once.  
    Now, we can eat <span class="word">${food}</span> while playing <span class="word">${game}</span>, 
    or search for a <span class="word">${animal}</span> while singing <span class="word">${song}</span>.  
    One time, we even turned the <span class="word">${room}</span> into <span class="word">${place}</span>.  
    Don’t believe us?  Just say <span class="word">" ${password} "</span> and we’ll show you.`;
  
    // place the story into the landing page
    story.innerHTML = storyHTML;
    story.classList.remove('story');
    let resetButton = `<br><button id="game-reset" onclick="resetGame()">Play Again</button>`;
    story.innerHTML += resetButton;
    // console.log(wordForm.classList.value);
    // console.log(story.classList.value);

});

function resetGame() {
    story.classList.add('story');
    story.innerHTML = '';
    wordForm.reset();
    wordForm.classList.remove('story');
}