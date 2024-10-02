function clock() {
    // let main = document.querySelector(".main");
    let currentTime = new Date();
    console.log(`${currentTime.getHours()}`.padStart(2, '0') + " : " + `${currentTime.getMinutes()}`.padStart(2, '0') + " : " + `${currentTime.getSeconds()}`.padStart(2, '0'));
    // main.innerText = `${currentTime.getHours()}`.padStart(2, '0') + " : " + `${currentTime.getMinutes()}`.padStart(2, '0') + " : " + `${currentTime.getSeconds()}`.padStart(2, '0');
    return `${currentTime.getHours()} : ${currentTime.getMinutes()} : ${currentTime.getSeconds()}`;

}


setInterval(clock, 1000);


