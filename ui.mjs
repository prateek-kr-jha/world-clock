

function createUI() {
    const main = document.querySelector(".main");
    const display_box = document.createElement('div');
    const country_box = document.createElement('div');
    const date_box = document.createElement('div');
    const day_box = document.createElement('div');
    const clock_box = document.createElement('div');
    display_box.classList.add("display-box");
    day_box.classList.add("day-box");
    date_box.classList.add("date-box");
    clock_box.classList.add("clock-box");
    country_box.classList.add("country-box");
    country_box.innerText = "IND";
    day_box.innerText = "FRI";
    display_box.appendChild(country_box);
    display_box.appendChild(date_box);
    display_box.appendChild(day_box);
    display_box.appendChild(clock_box);
    main.appendChild(display_box);
}

export {
    createUI
}