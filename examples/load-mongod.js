const path = require('path');
const {spawn} = require('child_process');
const config = require('../scripts/config');

(() => {
    const mongod = spawn('mongod', [], {cwd: `${config.MONGODB_URL}`});

    mongod.stdout.on('data', (data) => {
        console.log(`${data}`);
    });
})();
