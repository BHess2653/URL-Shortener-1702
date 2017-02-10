exports.shortUrl = () => {

    let shortUrl = '';
    const randomText = 'abcdefghijlkmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; // text to loop through

    // for loop
    for (let i = 0; i < 8; i++) { // loops to length of 8
        shortUrl += randomText.charAt(Math.floor(Math.random() * randomText.length));
    }

    return 'http://sho.rt/' + shortUrl
};
