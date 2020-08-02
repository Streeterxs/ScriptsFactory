const readline = require('readline');
const childProcess = require('child_process');
const config = require('../scripts/config');

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readlineInterface.question(`Write your project name: \n`, (input) => {

    const projectToOpen = childProcess.exec('code .', {cwd: `${config.OPEN_PROJECT_URL}/${input}`});

    projectToOpen.stderr.on('data', (data) => {

        console.log('data: ', data);
    });

    projectToOpen.stdout.on('error', (error) => {

        console.log('error: ', error);
    })

    projectToOpen.on('close', () => {

        readlineInterface.close();
    });
});

readlineInterface.on('close', () => {

    setTimeout(() => {
        process.exit();
    }, 10000);
});
