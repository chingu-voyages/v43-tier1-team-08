var Filter = require('bad-words'),
filter = new Filter()

//Putting list of words into the filter
words = [];
for (let i= 0; i <= words.length; i++){
    filter.addWords(words[i]);
}

//When this function is called, it will use the API 
//to delete profane words
function cleanList(list){
    filter.clean(list)
    alert('Profane entries has been deleted. Click on the reset button.')
}

//calls the function
cleanList(words)
