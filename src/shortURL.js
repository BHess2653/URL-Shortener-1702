exports.short = (urlLink) => {

var short = '';
var randomText = 'abcdefghijlkmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; // text to loop through

// for loop
for(var i = 0; i < 5; i++){
short =+ randomText.charAt(Math.floor(Math.random() * randomText.length));
}

var myURL = 'http://sho.rt/';

return {
  origUrl: urlLink, // This is the link the user enters
  shortUrl: myURL + short // This will be the Shortened version
};
};