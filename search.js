import 'dotenv/config';
import { startSearching } from './scripts/js/startSearching.js';

process.on('exit', async () => {
    console.log("\u0007");
});

const checkForIssues = (search) => {
    if (
        process.env.EMAIL === "" ||
        process.env.PASSWORD === "" ||
        process.env.CATEGORY === "" ||
        process.env.FIRST_NAME === "" ||
        process.env.LAST_NAME === "" ||
        process.env.PESEL === "" ||
        process.env.PHONE_NUMBER === "" ||
        process.env.PKK_NUMBER === "" ||
        process.env.WORDID === "" ||
        process.env.DATE_FROM === "" ||
        process.env.DATE_TO === "" ||
        process.env.PREFERRED_HOURS === ""
    ) {console.log("Pass all env variables!");process.exit()}
    
    search();
}

checkForIssues(startSearching)