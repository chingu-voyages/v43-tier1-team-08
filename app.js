const wordForm = document.querySelector(".word-form");
const story = document.querySelector(".story");

wordForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let creature = document.getElementById("creature");
    let adjective = document.getElementById("adjective");
    let verb = document.getElementById("verb");
    let feeling = document.getElementById("feeling");
    let clothing = document.getElementById("clothing");
    let sparkly = document.getElementById("sparkly");
    let superpower = document.getElementById("superpower");
    let food = document.getElementById("food");
    let game = document.getElementById("game");
    let animal = document.getElementById("animal");
    let song = document.getElementById("song");
    let room = document.getElementById("room");
    let place = document.getElementById("place");
    let password = document.getElementById("password");
    
    let storyText = `Once there was a strange time where a <span class="word">${creature}</span> took over the world
    and made us all stay span <span class="word">${adjective}</span> at home.  So we 
    <span class="word">${verb}</span> into our imagination and found out the key to 
    <span class="word">${feeling}</span> was all about wearing <span class="word">${clothing}</span> 
    with <span class="word">${sparkly}</span>.  It turned out that this was also the trick to turning 
    on our <span class="word">${superpower}</span> and getting to do everything you love all at once.  
    Now, we can eat <span class="word">${food}</span> while playing <span class="word">${game}</span>, 
    or search for <span class="word">${animal}</span> while singing <span class="word">${song}</span>.  
    One time, we even turned <span class="word">${room}</span> into a <span class="word">${place}</span>.  
    Don’t believe us?  Just say <span class="word">" ${password} "</span> and we’ll show you.`;
  
    story.textContent = storyText;
});