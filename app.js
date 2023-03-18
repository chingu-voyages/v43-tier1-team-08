const wordForm = document.querySelector("form");
const story = document.querySelector(".story");

wordForm.addEventListener("submit", (e) => {
    e.preventDefault();

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
    
    let storyText = `Once there was a strange time where a <span class="word">${word01}</span> took over the world
    and made us all stay span <span class="word">${word02}</span> at home.  So we 
    <span class="word">${word03}</span> into our imagination and found out the key to 
    <span class="word">${word04}</span> was all about wearing <span class="word">${word05}</span> 
    with <span class="word">${word06}</span>.  It turned out that this was also the trick to turning 
    on our <span class="word">${word07}</span> and getting to do everything you love all at once.  
    Now, we can eat <span class="word">${word08}</span> while playing <span class="word">${word09}</span>, 
    or search for <span class="word">${word10}</span> while singing <span class="word">${word11}</span>.  
    One time, we even turned <span class="word">${word12}</span> into a <span class="word">${word13}</span>.  
    Don’t believe us?  Just say <span class="word">" ${word14} "</span> and we’ll show you.`;
  
    story.textContent = storyText;
});