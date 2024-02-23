import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const prompt = async () => {
    return new Promise(resolve => {
        rl.question('Paste your bearer token: ', resolve);
    });
}

export default prompt;