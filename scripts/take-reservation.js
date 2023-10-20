import fetch from "node-fetch";

export const takeReservation = async (practiceId, token) => {
    return new Promise(async resolve => {
        try {
            const response = await fetch(`https://info-car.pl/api/word/reservations`, {
                method: "POST",
                body: JSON.stringify({
                    candidate: {
                        category: process.env.CATEGORY,
                        email: process.env.EMAIL,
                        firstname: process.env.FIRST_NAME,
                        lastname: process.env.LAST_NAME,
                        pesel: process.env.PESEL,
                        phoneNumber: process.env.PHONE_NUMBER,
                        pkk: process.env.PKK_NUMBER
                    },
                    exam: {
                        "organizationUnitId": process.env.WORDID,
                        "practiceId": practiceId,
                        "theoryId": null
                    },
                    languageAndOsk: {
                        "language": "POLISH",
                        "signLanguage": "NONE",
                        "oskVehicleReservation": null
                    }
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                }
            }).catch(err => { throw new Error(err) });

            console.log("Status code: " + response.status);
            if (response.status === 201) {
                console.log("Reservation is being processed! Check the info-car website.");
            } else if (response.status === 401) {
                console.log("Bearer token outdated!");
            } else {
                console.log("Unknown issue!");
            }

            resolve("Ok");
        } catch (err) {
            process.exit();
        }
    })
}