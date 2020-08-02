const config = require('./config.js');

console.log(config);

setTimeout(() => {
    console.log(config.OPEN_PROJECT_URL);
}, 5000);
