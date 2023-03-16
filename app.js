const wordForm = document.querySelector(".word-form");
const story = document.querySelector(".story");

wordForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let word01 = document.getElementById("word01");
    let word02 = document.getElementById("word02");
    let word03 = document.getElementById("word03");
    let word04 = document.getElementById("word04");
    let word05 = document.getElementById("word05");
    let word06 = document.getElementById("word06");
    let word07 = document.getElementById("word07");
    let word08 = document.getElementById("word08");
    let word09 = document.getElementById("word09");
    let word10 = document.getElementById("word10");
    let word11 = document.getElementById("word11");
    let word12 = document.getElementById("word12");
    let word13 = document.getElementById("word13");
    let word14 = document.getElementById("word14");
    
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