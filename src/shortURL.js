exports.short = (urlLink) => {

var short = '';
var randomText = 'abcdefghijlkmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; // text to loop through

// for loop
for(var i = 0, i < 5, i++){
short =+ randomText.charAt(Math.floor(Math.random() * randomText.length));
}

};
