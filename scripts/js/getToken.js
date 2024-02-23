import { exec } from 'child_process'

const getToken = async () => {
    return new Promise(resolve => {
        const pythonCommand = `python ./scripts/py/getToken.py`;
        exec(pythonCommand, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing Python script: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`Python script stderr: ${stderr}`);
                return;
            }
        
            const outputValue = stdout.trim();

            resolve(outputValue);
        });
    });
}

export default getToken;