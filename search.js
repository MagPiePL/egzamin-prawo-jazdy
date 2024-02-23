import 'dotenv/config';
import fetch from "node-fetch";
import getToken from "./scripts/js/getToken.js";
import { takeReservation } from "./scripts/js/take-reservation.js";
import { sleep } from "./scripts/js/sleep.js";

// strictedScheduledDates[0]
// {
//     day: '2023-09-05',
//     scheduledHours: [
//       {
//         time: '09:00:00',
//         theoryExams: [Array],
//         practiceExams: [],
//         linkedExamsDto: []
//       },
//       {
//         time: '16:00:00',
//         theoryExams: [Array],
//         practiceExams: [],
//         linkedExamsDto: []
//       },
//     ]
//   }

// strictedScheduledDates[0].scheduledHours[0].practiceExams
// [
//     {
//         id: '2375413172901643039',
//         places: 1,
//         date: '2023-10-03T13:00:00',
//         amount: 200,
//         additionalInfo: null
//     }
// ]

process.on('exit', async () => {
    console.log("\u0007");
});

const startSearching = async () => {
    console.log("Retrieving authorization token...")
    console.log("\n")
    let bearer_token = ""
    do {
        bearer_token = await getToken()
    } while(bearer_token == "")
    console.clear();

    console.log("ballz");
    console.log(bearer_token);

    let clearCount = 0;
    while (true) {
        try {
            const response = await fetch(`https://info-car.pl/api/word/word-centers/exam-schedule`, {
                method: "PUT",
                body: JSON.stringify({
                    category: "B",
                    wordId: process.env.WORDID
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": bearer_token
                }
            }).catch(err => { throw new Error(err); });

            if (response.status === 401) {
                console.log("\nstatus: 401");
                console.log("Bearer token outdated or incorrect!\n");
                console.clear();
                console.log("Retrieving new authorization token...");
                console.log("\u0007");

                bearer_token = ""
                do {
                    bearer_token = await getToken()
                } while(bearer_token == "")
                continue;
            }

            const { schedule } = await response.json();

            console.log("Looking for reservation...");

            const DATE_FROM = process.env.DATE_FROM;
            const DATE_TO = process.env.DATE_TO;

            const strictedScheduledDates = schedule.scheduledDays.filter(date => { return ((new Date(date.day) >= new Date(DATE_FROM)) && (new Date(date.day) <= new Date(DATE_TO))) });

            // Stricted schedules dates for practice exams
            const strictedPractiseExams = strictedScheduledDates.filter(scheduledDate => { return scheduledDate.scheduledHours.some(scheduledHour => scheduledHour.practiceExams.length !== 0) });

            if (strictedPractiseExams.length !== 0) {
                for (let y = 0; y < strictedPractiseExams.length; y++) {
                    let found = false;
                    let smallestIndex;
                    let scheduledHourIndex;

                    console.log("\n");
                    console.log("---------DATE---------");
                    console.log(strictedPractiseExams[y].day);
                    console.log("---------HOURS---------");
                    for (const [i, hour] of strictedPractiseExams[y].scheduledHours.entries()) {
                        if (hour.practiceExams.length !== 0) {
                            console.log(`${hour.time} places: ${hour.practiceExams[0].places}`);
                            const index = process.env.PREFERRED_HOURS.split(",").indexOf(hour.time.split(":")[0]);

                            if (found === false) {
                                if (index > -1) {
                                    smallestIndex = index;
                                    scheduledHourIndex = i;
                                    found = true;
                                }
                            }
                            else if ((index > -1) && (smallestIndex > index)) {
                                smallestIndex = index;
                                scheduledHourIndex = i;
                            }
                        }
                    }

                    console.log("\n");

                    if (scheduledHourIndex != undefined) {
                        // await takeReservation(strictedPractiseExams[y].scheduledHours[scheduledHourIndex].practiceExams[0].id, bearer_token);
                        process.exit();
                    }
                }
            }
            clearCount++;
            if (clearCount === 20) {
                console.clear();
                // Na chwile
                bearer_token = ""
                clearCount = 0;
            }
            // Zmienić na 10000
            await sleep(2000);
        } catch (err) {}
    }
};

startSearching();