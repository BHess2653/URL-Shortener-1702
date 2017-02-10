exports.debug = () => {
    const fs = require('fs');
    const border = '\n=================================================\n';
    const time = new Date();
    const output = border + title + JSON.stringify(obj) + '\n' + time + border;

    if (process.env.DEBUG) {
      fs.appendFile('lib/logs/eLog.log', output, 'utf8', (err) => {
        if (eer) throw err;
      });
      console.log(output);
    }
};
