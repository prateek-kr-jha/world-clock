import { countryTimeZones } from './const.mjs';

function clock(countryCode) {
    if (!countryTimeZones) {
        throw new Error("country code can't be empty.");
    }
    countryCode = countryCode.toUpperCase();

    if (!countryTimeZones[countryCode]) {
        throw new Error('No config for this country.');
    }
    let currentTimestamp = Date.now();
    let currentTime = new Intl.DateTimeFormat('en-IN', {
        timeZone: countryTimeZones[countryCode.toUpperCase()],
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hourCycle: 'h23',
    });
    let currentDate = new Intl.DateTimeFormat('en-IN', {
        timeZone: countryTimeZones[countryCode.toUpperCase()],
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    });

    return {
        time: currentTime.format(currentTimestamp),
        date: currentDate.format(currentTimestamp),
    };
}

export { clock };
