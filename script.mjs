import { clock } from './clock.mjs'

function populateDisplay(countryCode = 'IN') {
    let time = clock(countryCode)
    let clock_display = document.querySelector('.clock-box')
    let date_display = document.querySelector('.date-box')

    clock_display.innerText = time.time
    date_display.innerText = time.date
}

setInterval(populateDisplay, 1000)

// TODO: Clock
// TODO: TOGGLE for dark and light mode
// TODO: dropdown to select country