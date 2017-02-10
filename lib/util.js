exports.debug = () => {
    const fs = require('fs');
    const border = '\n=================================================\n';
    const time = new Date();
    const output = border + title + JSON.stringify(obj) + '\n' + time + border;
};
