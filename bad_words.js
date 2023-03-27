var Filter = require('bad-words')
filter = new Filter();

console.log(filter.clean("Don't be an ash0le"));

//How about we were to create a new list of bad words instead of an API?
var bad_words_list = ['bitch', 'fuck', 'asshole'];

filter.addWords(...bad_words_list)

//but this might be more cleaner especially if we need to compare
//user data and list items
filterTwo = new Filter({list:['damn', 'bastard', 'dick']})
